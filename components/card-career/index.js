import React, { memo, useLayoutEffect } from 'react'

const CardCareer = ({ title, startDate, endDate, organization, city, link }) => {
  function calculateDifference(startDate, endDate) {
    let startYear, startMonth, startDay, endMonth, endDay, endYear

    if (endDate.toJSON() === null) {
      endYear = new Date().getFullYear()
      endMonth = new Date().getMonth()
      endDay = new Date().getDate()
    } else {
      endYear = endDate.getFullYear()
      endMonth = endDate.getMonth()
      endDay = endDate.getDate()
    }

    startYear = startDate.getFullYear()
    startMonth = startDate.getMonth()
    startDay = startDate.getDate()

    let years = endYear - startYear
    let months = endMonth - startMonth

    if (months < 0 || (months === 0 && endDay < startDay)) {
      years--;
      months += 12;
    }

    if (years < 0) {
      years = 0
      months = 0
    }

    return `${years} yr ${months} mos`
  }

  return (
    <div style={{marginBottom: '40px'}}>
      <h3 style={{height: '32px'}}>{title}</h3>
    <p style={{margin: '0', height: '32px'}}>
      <a href={link}
         target='_blank'>{organization}</a>
      <span> • {city}</span>
    </p>
      <p style={{margin: '0'}}>
      <span>{startDate}</span><span> – </span><span>{endDate}</span><span> • </span><span>{calculateDifference(new Date(`${startDate}`), new Date(`${endDate}`))}</span></p></div>
  )
}


export default CardCareer
