
import FoodList from './component/FoodList'

function App() {
  const foodItem=["Shahi Paneer","Daal Makhani","Raita","Salad","Lassi","Parantha","Gur"];

  return (
    <>
    <FoodList item={foodItem}/>
    </>
  )
}

export default App
