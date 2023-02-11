import logo from '../../assets/logo.png';
import bell from '../../assets/bell.png'
import * as S from'./styles'
import { Link } from 'react-router-dom';

function Header({lateCount,clickNotification}) {
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
                <a href='#'>SINCRONIZAR CELULAR</a>
                <span className='dividir'/>
                <button onClick={clickNotification} id ="notification">
                    <img src={bell} alt="Notificacoes"/>
                    <span>{lateCount}</span>
                </button>
            </S.RigthSide>
        </S.Container>
    );
}

export default Header;
