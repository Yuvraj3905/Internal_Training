import React from 'react'
import FoodItem from './FoodItem';

export default function FoodList(props) {
    let item=props.item;
    if(item.length===0){
        return <div className='alert alert-danger' role='alert'>No Food Available</div>;
    }else{

        return (
            
    <>
    <div className='container'>
        <h2 className='p-3'>Food Items</h2>
    <ul className="list-group">
        {
      
        item.map((x)=>(
  <FoodItem x={x} key={x}/>
  ))}
  
</ul>
    </div>
    </>
  )
}
}
