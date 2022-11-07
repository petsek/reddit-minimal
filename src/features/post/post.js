import './post.css'
import {FaReddit} from 'react-icons/fa';
import { fetchPost, selectHasError, selectIsLoading, selectPost } from './postSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from "react";
import { Comment } from '../comment/comment';


export const Post=() => {

  const [ display, setDisplay ] = useState({display: 'none'});

  const dispatch = useDispatch();

  
  useEffect(() => {
    dispatch(fetchPost())
  }, [dispatch])


  const posts = useSelector(selectPost)
  const error = useSelector(selectHasError)
  const loading = useSelector(selectIsLoading)

  const handleComment =() => {
    display.display === 'none' ? setDisplay({display: 'block'}) : setDisplay({display: 'none'})
  }

  if(loading) {
    return <h2>Loading</h2>
  } else if (error) {
    return <h2>No data available. Please try later!</h2>
  } else {
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
            {(post.is_video) ?
            <video className= 'postVideo' preload="auto" controls>
              <source src={post.media.reddit_video.fallback_url} type="video/mp4" />
            </video> 
            : null}
  
          {/* {(!post.url.includes('i.redd.it') && !post.url.includes('v.redd.it') && post.selftext.length > 0 ) ? <p>{post.selftext}</p> : null } */}
          {(post.url.includes('v.redd.it') || post.url.includes('i.redd.it')) ? null : <p className='postUrl'><a href={post.url} target="_blank" rel="noreferrer" >Click here for the details</a></p>}
          </div>
          <div className="footerContainer">
            <div className="footerElement">
              <p>&#128077;</p>
              <p>{post.ups}</p>
            </div>
            <div className="footerElement">
              <p>&#128338;</p>
              <p>Posted {Math.round(((new Date().getTime()/1000) - post.created_utc)/3600)} hours ago</p>
            </div>
            <div className="footerElement">
            <FaReddit />
            <p><a href={`https://www.reddit.com/${post.subreddit_name_prefixed}/comments/${post.id}/${post.title}/`} target= '_blank' rel="noreferrer">Go to Reddit </a></p>
            </div>
            <div className="footerElement"><button className='button' onClick={handleComment}>
              <p>&#128172;</p>
              <p>{post.num_comments}</p>
              </button></div>
          </div>
          <div style={display} className ='comment'>
              <Comment permalink={post.permalink}/>
          </div>
        </div>
        ))
      }
      </div>
    )
  }



}