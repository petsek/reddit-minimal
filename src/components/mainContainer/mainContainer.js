import './mainContainer.css'
import {Post} from '../../features/post/post'
import { useEffect } from 'react'



export const MainContainer = () => {


  return (
    <div className= 'mainContainer'>
      <Post />
    </div>
  )
}