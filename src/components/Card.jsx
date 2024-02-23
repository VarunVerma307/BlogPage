import React from 'react'

const Card = (props) => {
  const post=props.post;
  return (
    <div>
      <p>{post.title}</p>
      <p>
        By {post.author}
      </p>
      <p>
        Posted on {post.date}
      </p>
      <p>{post.content}</p>
      <p>
        {post.tags.map((tag)=>{
          return <span>{`#${tag}`}</span> 
        })}
      </p>
    </div>
  )
}

export default Card
