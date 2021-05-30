import React from 'react';

import { Container,MenuGlobal } from './styles';
import {FaHome,FaPlay,FaUser} from 'react-icons/fa'
const menuGlobal: React.FC = ({children}) => {
  return (
    <>
      <Container>
        <MenuGlobal>
          <div className='containerIcons'>
            <div className='IconLabel'>
              <FaHome/>
              <p>Home</p>
            </div>
            <div className='IconLabel'>
              <FaPlay/>
              <p>Play</p>
            </div>
          </div>

          <div className='IconLabel'>
            <FaUser/>
            <p>Perfil</p>
          </div>
        </MenuGlobal>

        {children}
      </Container>
    </>
  );
}

export default menuGlobal;