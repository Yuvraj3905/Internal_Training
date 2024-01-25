import React from 'react'
import style from './css_module/FoodItem.module.css'
export default function FoodItem({x}) {
  return (
   <>
   <li  className={style.bgcolor}>{x}</li>
   </>
  )
}
