import {useState} from 'react';
import * as S from'./styles'

//Componentes
import Header from "../../Components/Header";
import Footer from '../../Components/Footer';
import FilterCard from '../../Components/FilterCard';



function Home() {
    const[filterActived, setFilterActived] = useState('today')
    return (
        <S.Container>
            <Header/>
            <S.FilterArea>
                <button type="button"onClick={()=> setFilterActived("all")} >
                <FilterCard title="Todos"   actived={filterActived == 'all'}/>
                </button>
                <button type="button"onClick={()=> setFilterActived("today")} >
                <FilterCard title="Hoje"    actived={filterActived == 'today'}/>
                </button>
                <button type="button"onClick={()=> setFilterActived("week")} >
                <FilterCard title="Semana"  actived={filterActived == 'week'}/>
                </button>
                <button type="button"onClick={()=> setFilterActived("month")} >
                <FilterCard title="Mês"     actived={filterActived == 'month'}/>
                </button>
                <button type="button"onClick={()=> setFilterActived("year")} >
                <FilterCard title="Ano"     actived={filterActived == 'year'}/>
                </button>
            </S.FilterArea>
            <Footer/>
        </S.Container>
    );
}

export default Home;
