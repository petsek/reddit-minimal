import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory, selectCategory } from "./categorySlice";
import './category.css'
import { fetchSubReddit } from "../post/postSlice";

export const Category = () => {
  const categories = useSelector(selectCategory)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategory())
  }, [dispatch])


  console.log(categories)
  return (
    <ul className="categoryUl">
      {
      categories.map((category) => (
      <li key = {category.id} className = 'categoryLi'>
        <img src= {category.icon_img || `https://api.adorable.io/avatars/25/${category.display_name}`} alt= {category.display_name_prefixed} className = 'categoryIcon' />
        <button onClick={() => dispatch(fetchSubReddit(category.display_name))}>{category.display_name_prefixed}</button>
      </li>
      ))
      }

    </ul>
  )
}
