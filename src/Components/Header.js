import React from 'react'
import header from '../img/Header.png'
import styled from 'styled-components'

const Img = styled.img`
width:100%;
`
export default function Header(){


    return(
        <section>
        <div>
            <Img src={header}alt='header'/>
        </div>
        <ul>
            <li>RC</li>
            <li>ABOUT</li>
            <li>RECIPES</li>
        </ul>
        </section>
    )
} 