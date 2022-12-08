import './Costs.css'
import Card from '../UI/Card.js'
import CostsFilter from './CostsFilter.js'
import React, { useState } from 'react'
import CostList from './CostList.js'
import CostsDiagram from './CostsDiagram.js'

const Costs = (props) => {
  const [selectedYear, setSelectedYear] = useState('2022')

  const yearChangeHandler = (year) => {
    setSelectedYear(year)
  }

  const filteredCosts = props.costs.filter(cost => {
    return cost.date.getFullYear().toString() === selectedYear
  })

  return (
    <div>
        <Card className='costs'>
        <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler}/>
        <CostsDiagram costs={filteredCosts}/>
        <CostList costs={filteredCosts}/>
        </Card>
    </div>
  )
}

export default Costs
