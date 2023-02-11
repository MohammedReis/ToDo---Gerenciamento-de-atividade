import * as S from'./styles'
import { Link } from 'react-router-dom';
import {useEffect,useState} from 'react';


import logo from '../../assets/logo.png';
import bell from '../../assets/bell.png'

import api from '../../services/api';
import isConnected from '../../utils/isConnected';

function Header({clickNotification}) {
    const[lateCount, setLateCount] = useState();


    async function lateVerify(){
        await api.get(`/task/filter/late/${isConnected}`)
        .then(response =>{
            setLateCount(response.data.length)
        })
    }

    async function Logout(){
        localStorage.removeItem('@todo/macaddress');
        window.location.reload();
    }

    useEffect(() =>{
        lateVerify();
    });

    return (
        <S.Container>
            <S.LeftSide>
                <img src={logo} alt="logo" />
            </S.LeftSide>
            <S.RigthSide>
                <Link to='/'>INÍCIO</Link>
                <span className='dividir'/>
                <Link to='/task'>NOVA TAREFA</Link>
                <span className='dividir'/>
                {!isConnected ?
                <Link to='/qrcode'>SINCRONIZAR CELULAR</Link>
                :
                <button type='button' onClick={Logout}>SAIR</button>
                }
                {
                lateCount &&
                    <>    
                        <span className='dividir'/>
                        <button onClick={clickNotification} id ="notification">
                            <img src={bell} alt="Notificacoes"/>
                            <span>{lateCount}</span>
                        </button>
                    </>
                }
            </S.RigthSide>
        </S.Container>
    );
}

export default Header;
