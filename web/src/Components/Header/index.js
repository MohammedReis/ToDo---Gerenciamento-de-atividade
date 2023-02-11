import * as S from'./styles'
import { Link } from 'react-router-dom';
import {useEffect,useState} from 'react';


import logo from '../../assets/logo.png';
import bell from '../../assets/bell.png'

import api from '../../services/api';

function Header({clickNotification}) {
    const[lateCount, setLateCount] = useState();


    async function lateVerify(){
        await api.get(`/task/filter/late/11:11:11:11:11:11`)
        .then(response =>{
            setLateCount(response.data.length)
        })
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
                <Link to='/qrcode'>SINCRONIZAR CELULAR</Link>
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
