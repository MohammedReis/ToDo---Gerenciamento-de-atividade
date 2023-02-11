import {useState,useEffect} from 'react';
import * as S from'./styles'
import api from '../../services/api';
import { Link } from 'react-router-dom';

//Componentes
import Header from "../../Components/Header";
import Footer from '../../Components/Footer';
import FilterCard from '../../Components/FilterCard';
import TaskCard from '../../Components/TaskCard';



function Home() {
    const[filterActived, setFilterActived] = useState('all')
    const[tasks, setTask] = useState([])
    

    async function loadTasks(){
        await api.get(`/task/filter/${filterActived}/11:11:11:11:11:11`)
        .then(response =>{
            setTask(response.data)
        })
    }


    function Notification(){
        setFilterActived('late')
    }

    useEffect(() =>{
        loadTasks();
    }, [filterActived])


    return (
        <S.Container>
            <Header clickNotification={Notification}/>
            <S.FilterArea>
                <button type="button"onClick={()=> setFilterActived("all")} >
                <FilterCard title="Todos"   actived={filterActived === 'all'}/>
                </button>
                <button type="button"onClick={()=> setFilterActived("today")} >
                <FilterCard title="Hoje"    actived={filterActived === 'today'}/>
                </button>
                <button type="button"onClick={()=> setFilterActived("week")} >
                <FilterCard title="Semana"  actived={filterActived === 'week'}/>
                </button>
                <button type="button"onClick={()=> setFilterActived("month")} >
                <FilterCard title="Mês"     actived={filterActived === 'month'}/>
                </button>
                <button type="button"onClick={()=> setFilterActived("year")} >
                <FilterCard title="Ano"     actived={filterActived === 'year'}/>
                </button>
            </S.FilterArea>

            <S.Title>
                <h3>{filterActived == 'late' ? 'TAREFAS ATRASADAS' : 'TAREFAS'}</h3>
            </S.Title>

            <S.Content>
                {
                tasks.map(t=>(
                <Link to={`/task/${t._id}`}>
                    <TaskCard type={t.type} title={t.title} when={t.when} done={t.done}/>
                </Link>
                ))
                }
                </S.Content>
            <Footer/>
        </S.Container>
    );
}

export default Home;
