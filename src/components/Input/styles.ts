import styled from "styled-components";
import { ILabel } from ".";

export const Label = styled.label<ILabel>`
    display: flex;
    position: relative;

    > input {
        background: #ABD2FA;
        border: 2px solid #91B2FD;
        border-radius: 5px;
        display: block;
        outline: none;

        margin: 5px;
        padding: 12px;
        padding-left: ${(props) => (props.icon ? '40px' : '12px')};

        color: #3D518C;
        font-size: 16px;

        transition: 180ms ease-in-out;

        &::placeholder{
            color: #3D518C;
        }

        ~ svg {
            fill: #1B2CC1;
            position: absolute;
            left: 12px;
            top: 16px;
            width: 24px;
            height: 24px;
            transition: 180ms ease-in-out;
        }
        &:focus {
            border: 2px solid ${(props) => props.color};
            ~ svg {
                fill: ${(props) => props.color};
            }
        }
    }
`