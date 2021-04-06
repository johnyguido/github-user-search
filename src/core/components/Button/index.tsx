import React from 'react'
import './styles.css'

type Props = {
      text: string
}

const Button = ({ text }: Props) => (
      <button className="site-btn">
         <h5>{text}</h5>
      </button>
)

export default Button