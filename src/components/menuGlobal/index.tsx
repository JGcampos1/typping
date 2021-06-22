import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container,MenuGlobalContainer } from './styles';
import {FaHome,FaPlay,FaUser} from 'react-icons/fa'


const MenuGlobal: React.FC = ({children}) => {
  const history = useHistory();
  return (
    <>
      <Container>
        <MenuGlobalContainer>
          <div className='containerIcons'>
            <div className='IconLabel' onClick={()=>{
              history.push('/')
            }}>
              <FaHome/>
              <p>Home</p>
            </div>
            <div className='IconLabel' onClick={()=>{
              history.push('/play')
            }}>
              <FaPlay/>
              <p>Play</p>
            </div>
          </div>

          <div className='IconLabel' onClick={()=>{
              history.push('/user')
            }}>
            <FaUser/>
            <p>Perfil</p>
          </div>
        </MenuGlobalContainer>
        {children}
      </Container>
    </>
  );
}

export default MenuGlobal;