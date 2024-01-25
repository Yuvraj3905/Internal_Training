import React from 'react'

export default function FoodList(props) {
  return (
    <>
    {console.log(props.item)}
    <div className='container'>
        <h2 className='p-3'>Food Items</h2>
    <ul className="list-group">
  <li className="list-group-item">{props.item[0]}</li>
  <li className="list-group-item">Burger</li>
  <li className="list-group-item">Fries</li>
  <li className="list-group-item">Hotdog</li>
  <li className="list-group-item">Pizza</li>
</ul>

    </div>
    </>
  )
}
