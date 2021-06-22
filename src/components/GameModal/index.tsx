import React, { useEffect, useState, useRef } from "react";

import { Container } from "./styles";
import { FaTimes, FaCheck } from "react-icons/fa";

interface IFrase {
  id?: number;
  frases?: string;
  tempo?: number;
}
interface Props {
  onClose: () => void;
  frase: IFrase;
}
interface IPlacar {
  nameUser: string;
  quantidadePalavras: number;
  frase?: string;
  congratulaton: boolean;
}

const GameModal: React.FC<Props> = ({ onClose, frase }) => {
  const [validate, setValidade] = useState<boolean>();
  const [newTimer, setNewTimer] = useState<number>(frase.tempo!);
  const [newTimer1, setNewTimer1] = useState<number>(frase.tempo!);
  const [nameUser, setNameUser] = useState<string>("");
  const [start, setStart] = useState<boolean>(false);
  const [placar, setPlacar] = useState<IPlacar[]>([
    {
      nameUser: "asda",
      frase: "asdad",
      congratulaton: true,
      quantidadePalavras: 1,
    },
  ]);
  const [fraseUser, setFraseUser] = useState<string>("");

  const handleCloseModal = (e: any) => {
    if (e.target.id === "modal") {
      onClose();
    }
  };
  useEffect(() => {
    setNewTimer1(newTimer);
  }, [newTimer]);
  const stopGame = () => {
    setNameUser("");
    setFraseUser("");
    setNewTimer(frase.tempo!);

    setStart(false);
    setPlacar([
      ...placar!,
      {
        frase: fraseUser!,
        quantidadePalavras: fraseUser!.split("").length,
        nameUser: nameUser,
        congratulaton: fraseUser === frase.frases ? true : false,
      },
    ]);
  };
  const timeSecundary = async () => {
    let timer = 1000;
    for (let i = newTimer; i >= 0; i--) {
      setTimeout(() => {
        setNewTimer(i);
        if(fraseUser === frase.frases){
          stopGame();
        }
        if (i === 0) {
          stopGame();
        }
      }, timer * Math.abs(i - newTimer));
    }
  };

  

  return (
    <Container id="modal" onClick={(e) => handleCloseModal(e)}>
      <div className="container">
        <h1>Contra o cronometro</h1>
        {<h2>frase: {frase.frases}</h2>}
        <h3>tempo: {newTimer1}</h3>

        <label htmlFor="nameUser">Nome do Jogador</label>
        <input
          type="text"
          id="nameUser"
          name="nome"
          value={nameUser}
          onChange={(e) => {
            const { value } = e.target;
            setNameUser(value);
          }}
        />
        {nameUser !== "" && (
          <button
            type="button"
            onClick={() => {
              setStart(true);
              document.getElementById("textAreaGamming")?.focus();
            }}
          >
            Iniciar
          </button>
        )}
        <textarea
          id="textAreaGamming"
          value={fraseUser}
          disabled={!start}
          onPaste={function (e) {
            e.preventDefault()
            return e.clipboardData.getData("")
          }}  
          
          onChange={(e) => {
            timeSecundary();
            const { value } = e.target;
            if (frase.frases) {
              setFraseUser(value);
              const comparable = frase.frases.substr(0, value.length);
              if (value === comparable) {
                setValidade(true);
              } else {
                setValidade(false);
              }
            }
          }}
          style={{ borderColor: validate ? "#0f0" : "#f00" }}
        />
        {placar.length > 0 && (
          <>
            <h1>Placar</h1>
            <table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Frase</th>
                  <th>Quntidade de Palavras</th>
                  <th>Terminou?</th>
                </tr>
              </thead>
              <tbody>
                {placar.map((placar) => {
                  return (
                    <>
                      <tr>
                        <td className="tableName">{placar.nameUser}</td>
                        <td className="tableFrase">{placar.frase}</td>
                        <td className="tableMenor">
                          {placar.quantidadePalavras}
                        </td>
                        <td className="tableMenor">
                          {placar.congratulaton ? <FaCheck /> : <FaTimes />}
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </>
        )}
      </div>
    </Container>
  );
};

export default GameModal;
