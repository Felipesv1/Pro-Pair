import styled from 'styled-components'
import ImgRecipes from '../../img/ImgRecipes.png'

export const Header = styled.header`

background-image:url(${ImgRecipes});
background-repeat:no-repeat;
background-size:cover;
width:100%;
padding: 30px;
height:900px; 
display:flex;
justify-content: space-between;
flex-direction:column;
align-items:flex-start;

@media (max-width:400px) {
  background-position-x:-650px;
 }
`
export const Btn = styled.button`

background:transparent;
border:none;
cursor:pointer;
`
export const Menu = styled.img`

display:none;
@media (max-width:814px) {
display:flex;
}
`

export const Container = styled.section`
width:100%;
display:flex;
justify-content: space-between;
align-items:center;

`
export const BoxList = styled.ul`

width:50%;
height:50px;
display:flex;
align-items:center;
justify-content:space-evenly;
list-style:none;
margin-left:10px;
@media (max-width:814px) {
display:none;
}

`
export const List = styled.li`
width:40%;
height: 100%;
display:flex;
align-items:center;
justify-content:space-evenly;
font-family: 'Open Sans', sans-serif;
font-weight:200;
cursor:pointer;
&:hover{
    border: 3px solid black;
}
`
export const BoxLogo = styled.section`

width:100%;

`
export const BoxTitle = styled.section`
width:100%;
height:100%;
display:flex;
align-items:center;
justify-content:center;
margin-top:40px;

`

    export const Title = styled.h1`
    font-size:6rem;
    font-family: 'Inter Tight', sans-serif;
    letter-spacing:12px;
    color:#373737;
    
    @media (max-width:952px){
        font-size:2rem;

    }
    
 
    `
