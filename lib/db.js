const path = require('path')
const ogs = require('open-graph-scraper')
const prompts = require('prompts')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const selectDB = [
  {
    type: 'select',
    name: 'db',
    message: 'Select a database:',
    choices: [
      { title: 'Reading', value: 'reading' },
      { title: 'Design', value: 'design' },
      { title: 'Music', value: 'music' },
      { title: 'Keyboards', value: 'keyboards' }
    ]
  }
]

const main = async () => {

  const { db: dbName } = await prompts(selectDB)
  const dbFileName = path.join(__dirname, `../data/${dbName}.json`)

  const adapter = new FileSync(dbFileName)
  const db = low(adapter)

  db.defaults({ schema: [], data: [] })

  const dbKeys = db.get('schema').value()

  if (!dbKeys) {
    console.error(`Cannot find schema for ${dbName} database in ${dbFileName}`)
    process.exit(1)
    return
  }

  const { key, url } = await prompts([
    {
      type: 'select',
      name: 'key',
      message: 'Pick a key:',
      choices: dbKeys.map(k => {
        return {
          name: k.name,
          value: k.name
        }
      })
    },
    {
      type: 'text',
      name: 'url',
      message: 'Enter a URL:'
    }
  ])

  ogs({ url }, (error, results) => {
    if (error) {
      console.log(`Error while fetching OG data.`)
      process.exit(1)
      return
    }

    const { data } = results

    const image = data.ogImage ? data.ogImage.url : null
    const title = data.ogTitle
    const description = data.ogDescription

    const alreadyExists = db
      .get('data')
      .find({ url: url })
      .value()

    const obj = {
      title,
      description,
      image,
      url,
      key
    }

    if (alreadyExists) {
      db.get('data')
        .find({ url: url })
        .assign(obj)
        .write()
    } else {
      db.get('data')
        .unshift(obj)
        .write()
    }

    console.log('✨ Added database entry.')
  })
}

// main()
