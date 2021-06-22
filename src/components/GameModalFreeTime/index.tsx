import React, { useEffect, useState, useRef } from "react";

import { Container } from "./styles";
// import { FaTimes, FaCheck } from "react-icons/fa";

interface IFrase {
  id?: number;
  frases?: string;
  tempo?: number;
}
interface Props {
  onClose: () => void;
  frase: IFrase;
}
interface IPlacarFreeTime {
  nameUser: string;
  time: number;
}

const GameModalFreeTime: React.FC<Props> = ({ onClose, frase }) => {
  const [validate, setValidade] = useState<boolean>();
  const [nameUser, setNameUser] = useState<string>("");
  const [start, setStart] = useState<boolean>(false);
  const [placar, setPlacar] = useState<IPlacarFreeTime[]>([
    {
      nameUser: "João Gabriel",
      time: 24.0,
    },
  ]);
  const [newTimer, setNewTimer] = useState<number>(0);
  const timerRef = useRef(newTimer);
  timerRef.current = newTimer;

  const [fraseUser, setFraseUser] = useState<string>("");
  const fraseRef = useRef(fraseUser);
  fraseRef.current = fraseUser;

  const handleCloseModal = (e: any) => {
    if (e.target.id === "modal") {
      onClose();
    }
  };

  const stopGame = (timeGame: number) => {
    setNameUser("");
    setFraseUser("");
    setNewTimer(0);

    setStart(false);
    setPlacar([
      ...placar!,
      {
        nameUser: nameUser,
        time: timeGame,
      },
    ]);
  };
  const timeSecundary = async () => {
    if (start) {
      setInterval(() => {
        setNewTimer(timerRef.current + 0.1);
        if (frase.frases === fraseRef.current) {
          stopGame(timerRef.current);
          clearInterval();
        }
      }, 100);
    }
  };

  return (
    <Container id="modal" onClick={(e) => handleCloseModal(e)}>
      <div className="container">
        <h1>Tempo Livre</h1>
        {<h2>frase: {frase.frases}</h2>}
        <h3>tempo: {Math.round(newTimer * 100) / 100}</h3>

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
          onFocus={() => {
            timeSecundary();
          }}
          onChange={(e) => {
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
                  <th>Tempo</th>
                </tr>
              </thead>
              <tbody>
                {placar.map((placar) => {
                  return (
                    <>
                      <tr>
                        <td className="tableName">{placar.nameUser}</td>
                        <td className="tableMenor">
                          {Math.round(placar.time * 100) / 100}
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

export default GameModalFreeTime;
