import styled from "styled-components"

export const ItemsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 16px;
    padding-top: 48px;
`

export const ItemDiv = styled.div`
    font-family: var(--font-sans);
    width: 31%;
    border-radius: 12px;
    border: 2px solid var(--border-color);
    padding: 34px;
    display: flex;
    flex-direction: column;

    h2 {
        font-size: 2rem;
        padding-bottom: 12px;
        font-weight: 500;
    }
`
export const TitleWrapper = styled.div`
    width: 100%;
    display: 'flex';
    justify-content: 'space-between';
    align-items: 'center';
    border-bottom: 2px solid var(--border-color);
`

export const InfoWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    border-bottom: 2px solid var(--border-color);
    padding: 24px 0px;

    h4 {
        font-weight: 500;
        font-size: 1.2rem;
        padding-bottom: 8px;
        color: black;
    }

    span {
        font-weight: 400;
        color: var(--gray-text);
    }
`

export const ButtonsWrapper = styled.div`
    display: flex;
    gap: 8px;
    align-self: flex-end;
    padding-top: 16px;
`

export const ActionButton = styled.button`
    border-radius: 100%;
    padding: 16px;
    cursor: pointer;

    &:hover {
        background-color: #f1f1f1;
    }
`