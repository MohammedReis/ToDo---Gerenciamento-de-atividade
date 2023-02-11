import {useState} from 'react';
import * as S from'./styles'
import Qr from 'qrcode.react'
import { Navigate } from 'react-router-dom';

//Componentes
import Header from "../../Components/Header";
import Footer from '../../Components/Footer';
import { Redirect } from 'react-router-dom';


function QrCode(){
    const[mac,setMac]=useState();
    const[redirect, setRedirect] = useState(false)

    async function SaveMac(){
        if(!mac){
            alert('Você precisa digitar o numero que apareceu no celular!');
        }else{
            localStorage.setItem('@todo/macaddress',mac)
            await setRedirect(true)
            window.location.reload()
        }
        
    }

    return (
        <S.Container>
            {redirect && <Navigate to={'/'}/>}
            <Header/>
            <S.Content>
                <h1>CAPTURE O QRCODE PELO APP</h1>
                <p>Suas atividades serão sincronizadas com a do seu celular.</p>
                <S.QrCodeArea>
                    <Qr value='getmacaddress' size={350}/>
                </S.QrCodeArea>
                <S.ValidationCode>
                    <span>Digite a numeração que apareceu no seu celular</span>
                    <input type='text'onChange={e=>{setMac(e.target.value)}} value={mac}/>
                    <button type='button' onClick={SaveMac}>SINCRONIZAR</button>
                </S.ValidationCode>
            </S.Content>
            <Footer/>
        </S.Container>
    )
}

export default QrCode
