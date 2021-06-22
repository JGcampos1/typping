import styled from 'styled-components';

export const Container = styled.div`
    background-color:#0e0414ef;
    width:100%;
    height:100vh;

    position:fixed;
    top:0;
    right:0;
    left:0;
    display:flex;
    align-items:center;
    justify-content:center;
    .container{
      overflow:scroll;
      width:800px;
      height:80vh;
      background: #fff;
      color:var(--primary-color);
      display:flex;
      padding:50px;
      border-radius:10px;
      align-items:center;
      justify-content:flex-start;
      flex-direction:column;
      textarea:disabled{
        border: gray;
        background:#c5c5c5;
      }
      textarea{
        border:3px solid #000;
        border-radius:5px;
        width:99%;
        min-width:99%;
        max-width:99%;
        min-height:100px;
        max-height:100px;
        margin-top:50px;
      }
      h2,h3{
        width:100%;
        text-align:left;
        color:var(--text-color);
      }
      button{
        background:var(--primary-color);
        margin:10px;
        border-radius:5px;
        border:none;
        color: var(--secundary-color);
        padding:10px;
        width:500px;
        
      }
      input{
        border-radius:5px;
        border:solid 2px var(--text-color);
        padding:10px;
        width:500px;
      }
      table{
        width:100%;
          margin-top:40px;
      }
      
      thead tr{
          background:var(--primary-color); 
          /* 1px solid; */
        th{
          color:white;
          padding:10px;
        }   
      }
      tbody tr{
        
          background:var(--primary-color); 
          /* 1px solid; */
        td{
          color:white;
        
        }

      }
      .tableName{
        width:25%;
      }
      .tableFrase{
        width:50%;
      }
      tr{
        text-align:center;
      }
    }
`;