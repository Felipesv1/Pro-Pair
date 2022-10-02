import React from 'react'
import bolo from '../../img/bolo.png'
import pizza from '../../img/pizza.png'
import copo from '../../img/copo.png'
import colher from '../../img/colher.png'
import * as S from './Style'


export default function Main(){

  return(
    <main>
      <S.ContainerMain>
        <S.BoxTitle>
     <h2>LATEST RECIPES</h2> 
     <S.Border></S.Border>
        </S.BoxTitle>
     <S.BoxCards>
        <S.Card>
          <S.ImgCard src={bolo} alt='imagem de um bolo '/>
        <S.BoxTitle>
          <S.Border></S.Border>
          <S.Title>Red velvet Cake</S.Title>
        </S.BoxTitle>
        </S.Card>
        <S.Card>
          <S.ImgCard src={pizza} alt='imagem de uma pizza'/>
          <S.BoxTitle>
          <S.Border></S.Border>
          <S.Title>Margherita Pizza</S.Title>
          </S.BoxTitle>
        </S.Card>
        <S.Card>
          <S.ImgCard src={copo} alt='imagem de uns copos '/>
          <S.BoxTitle>
          <S.Border></S.Border>
          <S.Title>Peanut Smoothie</S.Title>
          </S.BoxTitle>
        </S.Card>
     </S.BoxCards>
      <S.BoxAbout>
        <S.Img src={colher} alt='foto de uma colher'/>
        <S.BoxP>
        <S.TitleAbout>ABOUT</S.TitleAbout>
        <S.Border></S.Border>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quam odio labore odit accusantium voluptates dolor eveniet soluta iure. Amet impedit nesciunt facere. Ex placeat alias minus perferendis. Quos, dignissimos. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti sequi commodi quibusdam quasi reiciendis natus quia similique veritatis odit asperiores adipisci quos itaque obcaecati debitis, quaerat optio ab sunt alias. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero fugiat ea, iure reprehenderit molestiae soluta dolor voluptatibus debitis dolorem id explicabo non asperiores nemo et aspernatur facilis saepe odit voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quidem molestiae et voluptas voluptates perspiciatis nobis cupiditate voluptatem est eius ipsa iusto, minus porro consequuntur neque soluta atque! Id, ullam?</p>
        </S.BoxP>
      </S.BoxAbout>
      </S.ContainerMain>
      <S.BoxSubs>
        <S.BoxForm>
        <h2>SUBSCRIBE</h2>
        <p>sign up for newsletter</p>
        <form onSubmit={(e)=> e.preventDefault()}>
        <input type='email' placeholder='Your Email'/>
        <S.BoxBtn>
        <button type="submit">SUBMIT
        </button>
        </S.BoxBtn>
        </form>
        </S.BoxForm>
      </S.BoxSubs>
    </main>
  )
}