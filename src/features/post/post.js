import './post.css'
import {FaReddit} from 'react-icons/fa';
import { fetchPost, selectPost } from './postSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";

export const Post=() => {

  // const fetchPost = async () => {
  //   const response = await fetch('https://www.reddit.com/r/all.json')
  //   const json = await response.json();
  //   const data =  json.data.children.map(post => post.data)
  //   console.log(data)
  //   return data
  // }

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchPost())
  }, [])


  const posts = useSelector(selectPost)
  console.log(posts)

  return (
    <div className="postContainer">
      <div className="postCategory">
        <p></p>
      </div>
      <div className="postTitle">
        <h2>Title</h2>
      </div>
      <div className="postMedia">
        <h2>Post Media</h2>
      </div>
      <div className="footerContainer">
        <div className="footerElement">
          <p>&#128077;</p>
          <p>10000</p>
        </div>
        <div className="footerElement">
          <p>&#128338;</p>
          <p>Posted 2 hours ago</p>
        </div>
        <div className="footerElement">
        <FaReddit />
        <p>Go to Reddit</p>
        </div>
        <div className="footerElement">
          <p>&#128172;</p>
          <p>326</p>
        </div>
      </div>
    </div>
  )
}