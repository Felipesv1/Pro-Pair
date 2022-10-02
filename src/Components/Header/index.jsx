import React from 'react'
import * as S from './Style'
import RC from '../../img/RC.png'
import menu from '../../img/menu.png'

export default function Header(){


    
    return(
        <S.Header>
            <S.Container>
        <S.BoxLogo>
        <img src={RC} alt="Logo"/>
        </S.BoxLogo>
        <S.Btn><S.Menu src={menu} alt="menu"/></S.Btn>
        <S.BoxList>
            <S.List>ABOUT</S.List>
            <S.List>RECIPES</S.List>
            <S.List>SUBSCRIBE</S.List>
        </S.BoxList>
            </S.Container>
        <S.BoxTitle>
      <S.Title>RECIPES</S.Title>
    </S.BoxTitle>
        </S.Header>
    )
} 