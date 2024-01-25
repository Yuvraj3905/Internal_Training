
import FoodList from './component/FoodList'

function App() {
  const foodItem=["Shahi Paneer","Daal Makhani","Raita","Salad","Lassi","Parantha"];

  return (
    <>
    <FoodList item={foodItem}/>
    </>
  )
}

export default App
