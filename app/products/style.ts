import styled from "styled-components";

export const Title = styled.h2`
    font-size: 3.9rem;
    font-family: var(--font-sans);
    font-weight: 400;
    
`

export const Subtitle = styled.h4`
    font-size: 1.5rem;
    font-family: var(--font-sans);
    font-weight: 300;
    color: var(--gray-text);
`
export const AddButton = styled.button`
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
