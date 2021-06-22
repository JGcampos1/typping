import React, { useState } from "react";

import { Container } from "./styles";
// import { FaAdjust } from "react-icons/fa";
import GameModal from "../../components/GameModal";
import GameModalFreeTime from "../../components/GameModalFreeTime";
import GameMode1 from "../../assets/ModeGame1.svg";
import GameMode2 from "../../assets/ModeGame2.svg";
interface IFrase {
  id?: number;
  frases?: string;
  tempo?: number;
}

var timeSelecFrase = [
  5,
  10,
  15,
  20,
  25,
  30,
  35,
  40,
  45,
  50,
  55,
  60,
  65,
  70,
  75,
  80,
  85,
  90,
  95,
  100,
  105,
  110,
  115,
  120,
  ,
];
var frasesDb: IFrase[] = [
  {
    id: 0,
    frases:
      "A arte de programar consiste em organizar e dominar a complexidade.",
    tempo: 15,
  },
  {
    id: 1,
    frases:
      "O espaço entre a teoria e a prática não é tão grande como é, a teoria na prática.",
    tempo: 8,
  },
  {
    id: 2,
    frases:
      "Qualquer um pode escrever um código que o computador entenda. Bons programadores escrevem códigos que os humanos entendam.",
    tempo: 15,
  },
  {
    id: 3,
    frases:
      "Existem duas tarefas difíceis na Ciência da Computação: invalidação de cache e nomear as coisas.",
    tempo: 15,
  },
  {
    id: 4,
    frases:
      "Ciência da computação é tão sobre computadores quanto astronomia é sobre telescópios.",
    tempo: 15,
  },
  { id: 5, frases: "Na minha máquina funciona.", tempo: 5 },
  {
    id: 6,
    frases: "Hardware é o que você chuta, software é o que você xinga.",
    tempo: 12,
  },
  { id: 7, frases: "Falar é fácil. Mostre-me o código.", tempo: 10 },
  {
    id: 8,
    frases: "Nove pessoas não podem fazer um bebê em um mês.",
    tempo: 7,
  },
  {
    id: 9,
    frases:
      "Há dois principais produtos que saem de Berkeley: LSD e UNIX.Nós não acreditamos que isso seja uma coincidência.",
    tempo: 20,
  },
];

const Play: React.FC = () => {
  const [timeBolean, setTimeBolean] = useState<boolean>(false);
  const [selectFrase, setSelectFrase] = useState<boolean>(true);
  const [frase, setFrase] = useState<IFrase | null>();
  const [booleanGame, setBooleanGame] = useState<boolean>(false);

  return (
    <Container>
      <h1>Play</h1>

      <h2>Vamos começar!</h2>
      <div>
        <h3>Escolha as opções de game</h3>
        <div className="radioTypeGame">
          <div>
            <input
              type="radio"
              name="typeGame"
              checked={!timeBolean}
              id="typeGame2"
              onChange={() => {
                setTimeBolean(false);
              }}
            />
            <label htmlFor="typeGame2" className="SelecTypeGame">
              <img
                src={GameMode2}
                alt="imagem ilutrativa do modo de jogo"
              ></img>
              Tempo livre
            </label>
          </div>
          <div>
            <input
              type="radio"
              name="typeGame"
              id="typeGame1"
              checked={timeBolean}
              onChange={() => {
                setTimeBolean(true);
              }}
            />
            <label htmlFor="typeGame1" className="SelecTypeGame">
              <img
                src={GameMode1}
                alt="imagem ilutrativa do modo de jogo"
              ></img>
              Contra o cronometro
            </label>
          </div>
        </div>
      </div>
      <div className="SelectFraseGame">
        <h3>Selecione a frase do jogo</h3>
        <div className="InputRadioSelectFrase">
          <div>
            <input
              type="radio"
              name="fraseGame"
              id="fraseGame1"
              checked={selectFrase}
              onChange={() => {
                setSelectFrase(true);
              }}
            />
            <label htmlFor="fraseGame1">Frases prontas</label>
            <input
              type="radio"
              name="fraseGame"
              checked={!selectFrase}
              id="fraseGame2"
              onChange={() => {
                setSelectFrase(false);
                setFrase(null);
              }}
            />
            <label htmlFor="fraseGame2">Nova Frase</label>
          </div>
        </div>
        {selectFrase ? (
          <>
            <h3>Selecione a frase</h3>
            <select
              name="frasesDataBases"
              id="SelectFrase"
              onChange={(e) => {
                console.log(e.target.value);
                const { value } = e.target;
                const newFrase = frasesDb[parseInt(value)];
                console.log(typeof newFrase);
                setFrase(newFrase);
              }}
            >
              <option>Selecione a frase</option>
              {frasesDb.map((frase, index) => {
                return (
                  <>
                    <option value={index}>
                      {frase.frases} / {frase.tempo}
                    </option>
                  </>
                );
              })}
            </select>
          </>
        ) : (
          <>
            <h3>Informe a frase e o tempo</h3>
            <label htmlFor="inputNewFrase" className="labelInputNewFrase">
              Digite a nova frase
            </label>
            <input
              type="text"
              name="inputNewFrase"
              className="inputNewFrase"
              placeholder="frase"
              id="inputNewFrase"
              onChange={(e) => {
                const { value } = e.target;
                setFrase({ ...frase, frases: value });
              }}
            />
            {timeBolean && (
              <>
                <label
                  htmlFor="inputNewFraseTime"
                  className="labelInputNewFrase"
                >
                  Digite o tempo frase
                </label>
                <select
                  className="inputNewFrase"
                  id="inputNewFraseTime"
                  name="frasesDataBases"
                  onChange={(e) => {
                    const { value } = e.target;
                    const segundos = timeSelecFrase[parseInt(value)];
                    console.log(typeof frase?.tempo, typeof segundos);
                    setFrase({ ...frase, tempo: segundos });
                  }}
                >
                  <option>Selecione o tempo</option>
                  {timeSelecFrase.map((time, index) => {
                    return (
                      <>
                        <option value={index}>{time} segundos</option>
                      </>
                    );
                  })}
                </select>
              </>
            )}
          </>
        )}
      </div>
      {timeBolean ? (
        <>
          <h1>{frase?.frases}</h1>
          <h1>{frase?.tempo}</h1>
          {frase?.frases && frase?.tempo && (
            <button
              className="buttonInitiGame"
              onClick={() => {
                setBooleanGame(true);
              }}
            >
              {" "}
              INICAR JOGO
            </button>
          )}
        </>
      ) : (
        <>
          {frase?.frases && (
            <button
              className="buttonInitiGame"
              onClick={() => {
                setBooleanGame(true);
              }}
            >
              {" "}
              INICAR JOGO
            </button>
          )}
        </>
      )}
      {booleanGame && (
        <>
          {timeBolean ? (
            <GameModal
              onClose={() => {
                setFrase(null);
                setBooleanGame(false);
              }}
              frase={frase!}
              // setFrase={setFrase}
            />
          ) : (
            <GameModalFreeTime
              onClose={() => {
                setFrase(null);
                setBooleanGame(false);
              }}
              frase={frase!}
              // setFrase={setFrase}
            />
          )}
        </>
      )}
    </Container>
  );
};

export default Play;
