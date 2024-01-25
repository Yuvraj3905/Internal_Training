import React from 'react'
import FoodItem from './FoodItem';
import Error from './Error';

export default function FoodList(props) {
    let item=props.item;
    if(item.length===0){
        return <Error />;
    }else{

        return (
            
    <>
    <div className='container'>
        <h2 className='p-3'>Food Items</h2>
    <ul className="list-group" >
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
