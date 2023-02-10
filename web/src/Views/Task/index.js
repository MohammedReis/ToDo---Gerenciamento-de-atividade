import {useState,useEffect} from 'react';
import * as S from'./styles'
import api from '../../services/api';

//Componentes
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import TypeIcons from '../../utils/typeIcons';



function Task() {
    const[lateCount, setLateCount] = useState();
    const [type, setType] = useState();

    async function lateVerify(){
        await api.get(`/task/filter/late/11:11:11:11:11:11`)
        .then(response =>{
            setLateCount(response.data.length)
        })
    }

    useEffect(() =>{
        lateVerify();
    }, [])


    return (
        <S.Container>
            <Header lateCount={lateCount} />
            


        <S.Form>
            <S.TypeIcons>
                {
                    TypeIcons.map((icon,index)=>(
                        index > 0 && 
                        <button type="button" onClick={()=> setType(index)}>
                            <img src={icon} alt="Tipo da tarefa"
                            className={type && type != index && 'inative'}/>
                        
                        </button>
                    ))
                }
            </S.TypeIcons>

            <S.Input>
                <span>Título</span>
                <input type="text" placeholder="Título da tarefa"/>
            </S.Input>

            <S.TextArea>
                <span>Descrição</span>
                <textarea rows={5} placeholder="Detalhes da Tarefa"/>
            </S.TextArea>

            <S.Input>
                <span>Data</span>
                <input type="date" placeholder="Título da tarefa"/>
            </S.Input>

            <S.Input>
                <span>Hora</span>
                <input type="time" placeholder="Título da tarefa"/>
            </S.Input>
            
            <S.Options>
                <div>
                    <input type="checkbox" />
                    <span>CONCLUÍDO</span>
                </div>
                <button type="button">EXCLUIR</button>
            </S.Options>

            <S.Save>
            <button type="button">SALVAR</button>
            </S.Save>
        </S.Form>





            <Footer/>
        </S.Container>
    );
}

export default Task;
