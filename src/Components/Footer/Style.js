import styled from "styled-components";


export const Footer = styled.section`
background: #F2F4F1;
width:100%;
height:200px;
display:flex;
align-items:center;
justify-content:space-between;
padding:25px;
@media (max-width:952px) {
   flex-direction:column-reverse;
}
`
export const BoxIcons = styled.ul`
width:90%;
display:flex;
align-items:center;
justify-content:space-between;
`
export const BoxList = styled.ul`
width:100%;
display:flex;
align-items:center;
justify-content:space-evenly;
list-style:none;
margin-left:10px;
@media (max-width:952px) {
   flex-direction:column;
}
`
export const List = styled.li`

width:40%;
display:flex;
align-items:center;
justify-content:space-evenly;
cursor:pointer;
font-family: 'Open Sans', sans-serif;
font-weight:200;
`