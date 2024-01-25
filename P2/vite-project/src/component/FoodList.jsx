import React from 'react'

export default function FoodList(props) {
    let item=props.item;
  return (
    <>
    <div className='container'>
        <h2 className='p-3'>Food Items</h2>
    <ul className="list-group">
        {item.map((x)=>(
  <li key={x} className="list-group-item">{x}</li>
        ))}
  
</ul>
    </div>
    </>
  )
}
