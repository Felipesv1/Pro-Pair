import React from 'react'
import * as S from './Style'
import Insta from '../../imgIcons/instagram.png'
import Face from '../../imgIcons/facebook.png'
import twitter from '../../imgIcons/twitter.png'
import Pinterest from '../../imgIcons/Pinterest.png'


export default function Footer(){

  return(
    <S.Footer>
      <S.BoxIcons>
        <S.List><a href="https://www.instagram.com/"><img src={Insta} alt="icon Instagram" title=' icon Instagram'/> </a></S.List>
        <S.List><a href="https://www.twitter.com/"><img src={twitter} alt="icon twitter" title=' icon twitter'/> </a></S.List>
        <S.List><a href="https://www.Facebook.com/"><img src={Face} alt="icon Facebook" title=' icon Facebook'/> </a></S.List>
        <S.List><a href="https://www.Pinterest.com/"><img src={Pinterest} alt="icon Pinterest" title=' icon Pinterest'/> </a></S.List>
      </S.BoxIcons>
      <S.BoxList>
            <S.List>ABOUT</S.List>
            <S.List>RECIPES</S.List>
            <S.List>SUBSCRIBE</S.List>
        </S.BoxList>
    </S.Footer>
  )
}