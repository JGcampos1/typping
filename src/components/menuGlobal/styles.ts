import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  height:100vh;
  width:100%;
  background-color:#000;

`;
export const MenuGlobal = styled.div `
  width: 100px;
  background:#282B33;
  display:flex;
  align-items:center;
  justify-content:space-between;
  flex-direction:column;
  padding:30px 0%;
  
  .containerIcons{
    width:100%;
    height:auto;
    display:flex;
    align-items:center;
    flex-direction:column;
    justify-content:space-between
  }
  .IconLabel{
    width:100%;
    text-align:center;
    margin:10px 0%;
    svg{
    font-size:32px;
    color:var(--secundary-color);
    transition:500ms;
      :hover{
        color:var(--primary-color);
      }  
  }
    p{
      color:var(--secundary-color);
      font-weight:bold;
      margin:10px 0px;
    }
  }
`