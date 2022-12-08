import React, { useState } from 'react'
import NewCost from './components/NewCost/NewCost.js'
import Costs from './components/Costs/Costs.js'

// eslint-disable-next-line camelcase
const initial_costs = [
  {
    id: 'c1',
    date: new Date(2022, 2, 12),
    description: 'Холодильник',
    amount: 999.99
  },
  {
    id: 'c2',
    date: new Date(2022, 11, 22),
    description: 'MacBook',
    amount: 1239.99
  },
  {
    id: 'c3',
    date: new Date(2022, 3, 1),
    description: 'Джинсы',
    amount: 49.99
  }
]

const App = () => {
  const [costs, setCosts] = useState(initial_costs)
  /* return React.createElement('div', {}, React.createElement('h1', {}, 'Начнём изучение React!'), React.createElement(Costs, { costs })
  ) */

  const addCostHandler = (cost) => {
    setCosts(prevCosts => {
      return [cost, ...prevCosts]
    })
  }

  return (
    <div>
      <NewCost onAddCost={addCostHandler}/>
      <Costs costs={costs}/>
    </div>
  )
}

export default App
