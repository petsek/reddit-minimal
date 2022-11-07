import { useEffect } from "react";
import { useState } from "react";



export const Comment = (props) => {

  const { permalink } = props;
  const [ comments, setComments ] = useState([]);

  useEffect(() => {
    const getComments = async () => {
      const response = await fetch(`https://www.reddit.com${permalink}.json`);
      const json = await response.json();
      setComments(json[1].data.children.map((comment) => comment.data));
    };

    getComments();
  }, [permalink]);


  return(
<ul>
  {
comments.slice(0,10).map((comment) => (
    <li key = {comment.id}>
            <h5>u/{comment.author}</h5>
              <p>{comment.body}</p>
    </li>
  ))
  }
</ul>
  )
}