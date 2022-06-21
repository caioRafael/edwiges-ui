import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    >div{
        display: flex;
        align-items: center;
        /* justify-content: center; */
        flex-direction: row;

        >input{
            width: 24px;
            height: 24px;
            margin-right: 10px;
            background: #ABD2FA;
            border: solid 2px #1B2CC1;
            border-radius: 50%;

            cursor: pointer;
        }
        /* >button{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 20px;
            height: 20px;
            padding: 5px;
            background: #ABD2FA;
            border: solid 2px #1B2CC1;
            border-radius: 50%;

            >span{
                width: 30px;
                height: 30px;
                background: #1B2CC1;
                border-radius: 50%;
            }
        } 

        >span{
            margin-left: 5px;
            font-size: 16px;
            color: #08133a;
            font-family: sans-serif;
        } */
    }
`