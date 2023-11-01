import React from 'react'

export default function NewsItem(props) {
  return (
    <div className='card'>
        <img className='card-img-top' src={!props.imageUrl?"https://www.opindia.com/wp-content/uploads/2023/06/Willowbrook-mass-shotting.jpg":props.imageUrl} alt="Logo-Pic" />
        <div className='card-body'>
            <div className='title'>
                {props.title}
            </div>
            <p className='description'>{props.desc}</p>
            <p className='author'>By {props.author} on {props.date}</p>
            <a href={props.newsUrl} >Read More</a>
        </div>
        <div className="sources">
          {props.source.name}
        </div>
    </div>
  )
}
