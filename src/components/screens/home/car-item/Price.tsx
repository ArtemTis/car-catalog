import React from 'react'

const Price = ({price}: {price: number}) => {
  return (
    <p>${Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'USD' }).format(price)}</p>
  )
}

export default Price