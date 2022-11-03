import './mainContainer.css'
import {Post} from '../../features/post/post'
import { useEffect } from 'react'



export const MainContainer = () => {

  // const fetchPost = async () => {
  //   const response = await fetch('https://www.reddit.com/r/all.json')
  //   const json = await response.json()
  //   console.log(json)
  //   const postArray = json.data.children.map(post =>post.data)
  //   console.log(postArray)
  // }
  // useEffect(() => {
  //   fetchPost();
  // }, [])

  return (
    <div className= 'mainContainer'>
      <Post />
      <Post />
      <Post />
    </div>
  )
}