import { useState, useEffect } from "react";
import * as S from "./styles";
import api from "../../services/api";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import { Navigate } from "react-router-dom";
import isConnected from "../../utils/isConnected";

//Componentes
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import TypeIcons from "../../utils/typeIcons";

function Task() {
    const [redirect, setRedirect] = useState(false);
    const [type, setType] = useState();
    const [done, setDone] = useState(false);
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [date, setDate] = useState();
    const [hour, setHour] = useState();
    const { id } = useParams();


    async function LoadTaskDetails() {
        await api
            .get(`/task/${id}`)
            .then((response) => {
                setType(response.data.type);
                setDone(response.data.done);
                setTitle(response.data.title);
                setDescription(response.data.description);
                setDate(format(new Date(response.data.when), "yyyy-MM-dd"));
                setHour(format(new Date(response.data.when), "HH:mm"));
            })
            .catch((err) => {
                console.log(err.data);
            });
    }

    async function Save() {
        //Validação dos Dados
        if (!title) {
            return alert("Você precisa informar o titulo da tarefa");
        } else if (!description) {
            return alert("Você precisa informar a descrição da tarefa");
        } else if (!type) {
            return alert("Você precisa informar o tipo da tarefa");
        } else if (!date) {
            return alert("Você precisa informar a data da tarefa");
        } else if (!hour) {
            return alert("Você precisa informar a hora da tarefa");
        }

        if (id) {
            await api
                .put(`/task/${id}`, {
                    macaddress:isConnected,
                    done,
                    type,
                    title,
                    description,
                    when: `${date}T${hour}:00.000`,
                })
                .then(() => setRedirect(true));
        } else {
            await api
                .post("/task", {
                    macaddress:isConnected,
                    type,
                    title,
                    description,
                    when: `${date}T${hour}:00.000`,
                })
                .then(() => setRedirect(true));
        }
    }

    async function Remove(){
        const res = window.confirm('Deseja realmente remover a tarefa ?')
        if(res ==true){
            await api.delete(`/task/${id}`)
            .then(() =>setRedirect(true));
            
        }
    }


    useEffect(() => {
        if(!isConnected){
            setRedirect(true);
        }
        LoadTaskDetails();
    }, []);

    return (
        <S.Container>
            {redirect && <Navigate to={"/"} />}
            <Header />

            <S.Form>
                <S.TypeIcons>
                    {TypeIcons.map(
                        (icon, index) =>
                            index > 0 && (
                                <button
                                    type="button"
                                    onClick={() => setType(index)}
                                >
                                    <img
                                        src={icon}
                                        alt="Tipo da tarefa"
                                        className={
                                            type && type != index && "inative"
                                        }
                                    />
                                </button>
                            )
                    )}
                </S.TypeIcons>

                <S.Input>
                    <span>Título</span>
                    <input
                        type="text"
                        placeholder="Título da tarefa"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                </S.Input>

                <S.TextArea>
                    <span>Descrição</span>
                    <textarea
                        rows={5}
                        placeholder="Detalhes da Tarefa"
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                    />
                </S.TextArea>

                <S.Input>
                    <span>Data</span>
                    <input
                        type="date"
                        placeholder="Título da tarefa"
                        onChange={(e) => setDate(e.target.value)}
                        value={date}
                    />
                </S.Input>

                <S.Input>
                    <span>Hora</span>
                    <input
                        type="time"
                        placeholder="Título da tarefa"
                        onChange={(e) => setHour(e.target.value)}
                        value={hour}
                    />
                </S.Input>

                <S.Options>
                    <div>
                        <input
                            type="checkbox"
                            checked={done}
                            onChange={() => setDone(!done)}
                        />
                        <span>CONCLUÍDO</span>
                    </div>
                    {id && <button type="button"onClick={Remove} >EXCLUIR</button>}
                </S.Options>

                <S.Save>
                    <button type="button" onClick={Save}>
                        SALVAR
                    </button>
                </S.Save>
            </S.Form>

            <Footer />
        </S.Container>
    );
}

export default Task;
