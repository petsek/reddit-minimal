import { Category } from '../../features/category/category'
import './sideContainer.css'
import { useSelector } from "react-redux";
import { selectCategory } from "../../features/category/categorySlice";


export const SideContainer = () => {
  const categories = useSelector(selectCategory)

  return (
    <div className= 'sideContainer'>
      <h3>Subreddits</h3>
          <Category/>
    </div>
  )
}