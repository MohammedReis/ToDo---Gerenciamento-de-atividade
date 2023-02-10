import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction:column;
    align-items:center;


`


export const Form = styled.div`
    width: 50%;
    height: 500px;
`

export const TypeIcons = styled.div`
    width:100%;
    display: flex;
    justify-content:center;
    
    button{
        border: none;
        background: none;
    }

    .inative{
        opacity: 0.5;
    }

    img{
        width:50px;
        height:50px;
        margin:10px;
        cursor: pointer;
        &:hover{
            opacity:0.5;
        }
    }
`

export const Input = styled.div`
    width:100%;
    display: flex;
    flex-direction: column;
    margin:20px 0;

    span{
        color:#707070;
        margin:5px 0;
    }

    input{
        font-size:16px;
        padding:15px;
        border:none;
        border-bottom:solid 1px #ee6b26
    }


`
export const TextArea = styled.div`
    width:100%;
    display: flex;
    flex-direction: column;
    margin:20px 0; 

    span{
        color:#707070;
        margin:5px 0;
    }
    textarea{
        font-size:16px;
        border:solid 1px #ee6b26
    }

`

export const Options = styled.div`
display:flex;
justify-content:space-between;

div{
    display:flex;
    align-items:center;
    color:#ee6b26;
    font-weight:bold;
    font-size:18px;
}


button{
    font-weight:bold;
    color: #20295f;
    font-size:18px;
    cursor: pointer;
    border: none;
    background:none;

    &:hover{
        opacity:0.7;
    }
}
`
export const Save = styled.div`
    width:100%;
    margin-top:20px;

    button{
        width:100%;
        background:#ee6b26;
        border: none;
        font-size:20px;
        color:#fff;
        padding:20px;
        border-radius:50px; 
        cursor: pointer;
        
        &:hover{
        opacity:0.7;
    }
    }
`