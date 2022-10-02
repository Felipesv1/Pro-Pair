import styled from "styled-components";


export const ContainerMain = styled.section`

background-color: #F2F4F1;
width:100%;
height:100%; 
margin-top:40px;
display:flex;
align-items:center;
justify-content:center;
flex-direction: column;
`
export const BoxTitle = styled.section`
width:100%;
height:100%;
display:flex;
align-items:center;
justify-content:center;
flex-direction: column;
padding:80px;
margin-top:10px;




h2{
    font-size:1.4rem;
    font-family: 'Inter Tight', sans-serif;
    margin-bottom:15px;
    letter-spacing:2px;
    color:#373737;
}

`

export const ImgCard = styled.img`

width:100%;
height:50%;

object-fit: cover;
`

export const BoxCards = styled.div`

display: flex;
align-items:center;
justify-content:space-evenly;
flex-wrap: wrap;
width:100%;
height:100%; 
@media (max-width:952px) {
    flex-direction:column;
    margin-bottom:30px;
}
`

export const Border = styled.div`
width:50px;
border-radius:2px;
border:2px solid;

`
export const Card = styled.div`

background:white;
width:20rem;
height:60%;
display:flex;
align-items: center;
justify-content:space-between;
flex-direction:column;
box-shadow: 0 0 10px 0px;
transition:1s all;
&:hover{
    transform:scale(1.2) ;
}
@media (max-width:952px) {
    margin-bottom:30px;
}

`


export const Title = styled.h3`

margin-top:20px;
font-family: 'Open Sans', sans-serif;
font-weight:200;
`


export const BoxAbout = styled.div`


width: 100%;
height: 100%;
display:flex;
justify-content: center;
align-items:center;
background-color:white;
margin-top:140px;
@media (max-width:952px) {
    flex-direction:column;
}
`

export const TitleAbout = styled.h2`

margin-bottom:20px;
font-family: 'Open Sans', sans-serif;
@media (max-width:952px) {
margin-top:20px;

}
`



export const Img = styled.img`
width:50%;
height:50%;
object-fit: cover;
@media (max-width:952px) {
width:100%;
height:50%;
}
`
export const BoxP = styled.div`

width:100%;
height:100%;
display:flex;
justify-content: center;
align-items:center;
flex-direction:column;

P{
width:70%;
height:50%;
color:#373737;
margin-top:60px;
}
@media (max-width:952px) {
margin-bottom:60px;

}
`

export const BoxSubs = styled.section`
width:100%;
height:450px;
background:#DFE4DE;
display:flex;
justify-content: center;
align-items:center;


h2{
    margin-bottom:10px;
    font-family: 'Inter Tight', sans-serif;
    letter-spacing:5px;
}

p{
    margin-bottom:20px;
    font-weight:200;
    font-size:1.7rem;
    font-family: 'Open Sans', sans-serif;

}
`

export const BoxBtn = styled.section`
width: 100%;
height:50px;
display:flex;
justify-content: center;
align-items:center;
margin-top:20px;

button{
    width: 35%;
    height:50px;
    background:transparent;
    border:4px solid;
    cursor:pointer;
    font-weight:bold;

}
`

export const BoxForm = styled.section`
width:500px;
height:400px;
display:flex;
justify-content: center;
align-items:center;
flex-direction:column;


input{
    width:100%;
    padding:25px;
    padding-left:140px;
    padding-right:140px;
    outline:none;
    border:none;
}
`