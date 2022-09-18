import React from 'react'
import './Description.css'
import Todo from '../../assets/Todo.png'

const Description = () => {
  return (
    <section>
        <div className="imgcontainer">
            <img src={Todo}  />
        </div>
        <p className='Paragraph'>Add your to do list here</p>
    </section>
  )
}

export default Description