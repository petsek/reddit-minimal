import { Category } from '../../features/category/category'
import './sideContainer.css'



export const SideContainer = () => {

  return (
    <div className= 'sideContainer'>
      <h3>Subreddits</h3>
          <Category/>
    </div>
  )
}