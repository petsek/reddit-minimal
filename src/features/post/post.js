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
    <div>
    {
      posts.map((post) => (
        <div className="postContainer" key={post.id}>
        <div className="postCategory">
          <p>{post.subreddit_name_prefixed}</p>
        </div>
        <div className="postTitle">
          <h2>{post.title}</h2>
        </div>
        <div className="postMedia">
          {(post.url.includes('i.redd.it')) ? <img className = 'postImage' src={post.url} alt=''/> : null}
          {(post.url.includes('v.redd.it')) ?
          <video className= 'postVideo' preload="auto" controls>
            <source src={post.media.reddit_video.fallback_url} type="video/mp4" />
          </video> 
          : null}

        {(!post.url.includes('i.redd.it') && !post.url.includes('v.redd.it') && post.selftext.length > 0 ) ? <p>{post.selftext}</p> : null }
        {(post.url.includes('v.redd.it') || post.url.includes('i.redd.it')) ? null : <div><a href={post.url} target="_blank" rel="noreferrer" >{post.url}</a></div>}
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
      ))
    }
    </div>
  )
}