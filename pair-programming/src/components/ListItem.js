import './ListItem.css'
import React from 'react'

export default function ListItem(props) {
    return(
        <li className="listItem">
            <h2>{props.title}</h2>
            <p>{props.content}</p>
        </li>
    )
}