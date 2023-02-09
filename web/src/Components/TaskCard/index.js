import * as S from'./styles'
import iconDefaults from '../../assets/default.png'

function TaskCard() {
    return (
        <S.Container>
            <S.TopCard>
                <img src={iconDefaults} alt="Icone da Tarefa"/>
                <h3>Titulo da Tarefa</h3>
            </S.TopCard>
            <S.BottomCard>
                <strong>17/10/2023</strong>
                <span>10:00</span>
            </S.BottomCard>
        </S.Container>
    );
}

export default TaskCard;