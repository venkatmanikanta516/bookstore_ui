import React from 'react'

function test() {
    const items = ['item1', 'item2', 'item3'];
  return (
    <div>
     {items.map((item, index) => (
        <div key={index}>
          {item}
        </div>
      ))} 
    </div>
  )
}

export default test
