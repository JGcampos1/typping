import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 20px 50px;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  color: white;
  h3 {
    text-align: left;
    width: 100%;
  }
  .radioTypeGame {
    display: flex;
    width: 500px;
  }
  .SelecTypeGame {
    width: 200px;
    height: 200px;
    border-radius: 5px;
    border: solid 3px var(--text-color);
    margin: 20px;
    padding: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    img {
      width: 80%;
    }
  }
  input[type="radio"] {
    display: none;
  }
  input[type="radio"]:checked + .SelecTypeGame {
    border: solid 3px var(--secundary-color);
    background-color: var(--primary-color);
  }

  .SelectFraseGame {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 500px;
    .InputRadioSelectFrase {
      width: 100%;
      margin: 20px 0px;
      display: flex;
      justify-content: center;
      align-items: center;

      input[type="radio"]:checked + label {
        border: 2px solid var(--primary-color);
      }
      label {
        padding: 5px 20px;
        margin: 0px 20px;
        border-radius: 5px;
        border: 2px solid var(--secundary-color);
      }
    }
  }
  .inputNewFrase {
    padding: 20px;
    border: 3px solid var(--primay-color);
    width: 100%;
    border: white 2px solid;
    color: white;
    border-radius: 5px;
    background-color: var(--text-color);
  }
  .labelInputNewFrase {
    text-align: left;
    width: 500px;
    color: #c5c5c5;
    margin-top: 20px;
  }

  #SelectFrase {
    width: 500px;
    padding: 20px;
    border: white 2px solid;
    color: white;
    border-radius: 5px;
    background-color: var(--text-color);
    margin: 30px 0px;
  }
  .buttonInitiGame{
    width:400px;
    padding:25px;
    color:white;
    background:var(--primary-color);
    border-radius:5px;
    border:3px solid white;
    font-weight:bold;

  
  }
`;
