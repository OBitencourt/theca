import styled from "styled-components";

export const ButtonDiv = styled.button`
    border: none;
    border-radius: 100%;
    padding: 8px;
    position: absolute;
    bottom: 5%;
    right: 5%;
    background-color: var(--cs);
    transition: all 150ms ease-in-out;
    cursor: pointer;

    &:hover {
        transform: scale(1.05);
        filter: brightness(0.97);
    }

    &:active {
        transform: scale(0.97);
    }
`