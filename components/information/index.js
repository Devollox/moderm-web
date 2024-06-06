import React from 'react'

const Information = ({ title ,children }) => {
  return (
    <>
      <h1>{title}</h1>
      <p style={{ margin: '20px 0 20px 0' }}>{children}</p>
    </>
  )
}

export default Information