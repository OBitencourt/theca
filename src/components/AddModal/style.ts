import styled from "styled-components";

export const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
`


export const ModalBox = styled.div`
    width: 30%;
    height: 800px;
    background-color: #f1f1f1;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    padding: 32px 42px;

    h2 {
        color: black;
        font-size: 1.8rem;
        font-family: var(--font-sans);
        padding-bottom: 16px;
        text-align: center;
        font-weight: 500;
    }
`

export const FormBox = styled.div`
    padding: 12px 0px;
    border-top: 2px solid var(--border-color);
    border-bottom: 2px solid var(--border-color);
    display: flex;
    flex-direction: column;
    
    h5 {
        font-family: var(--font-roboto);
        font-size: 1.3rem;
        margin-bottom: 8px;
    }
`

export const StyledInput = styled.input`
    width: 100%;
    outline: none;
    padding: 12px 12px;
    border: 1px solid black;
    border-radius: 4px;
    margin-bottom: 24px;
`

export const ButtonsWrapper = styled.div`
    display: flex;
    align-self: flex-end;
    gap: 24px;
    font-family: var(--font-sans);
    padding-top: 28px;
`

export const CancelButton = styled.button`
    background-color: transparent;
    cursor: pointer;
    transition: all 200ms ease-in-out;
    border: none;
    color: var(--gray-text);
    font-size: 1.2rem;
    padding: 12px 24px;
    border-radius: 8px;

    &:hover {
        background-color:rgb(230, 230, 230);
    }
`

export const ConfirmButton = styled.button`
    background-color: var(--cs);
    color: #fff;
    padding: 12px 24px;
    border-radius: 8px;
    border: none;
    font-size: 1.2rem;
    transition: all 200ms ease-in-out;
    cursor: pointer;
    
    &:hover {
        filter: brightness(0.92);
        transform: scale(1.05);
    }

    &:active {
        transform: scale(0.98);
    }
`