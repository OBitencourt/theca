
import styled from "styled-components"


export const SidebarStyled = styled.div`
    border-right: 3px solid var(--cp);
    width: 18%;
    height: 100vh;
    position: fixed;
    background-color: transparent;
    margin-right: 22%;
`

export const LogoSpace = styled.div`
    padding: 52px 12px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 3px solid var(--cp);
    font-size: 1.5rem;
    font-family: var(--font-sans);
    font-weight: 600;
    color: var(--cs);
`

export const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
    gap: 10px;
`

export const StyledButton = styled.button<{ $isActive: boolean }>`
    width: 100%;
    color: ${(props) => (props.$isActive ? "var(--cs)" : "var(--gray-text)")};
    background-color: ${(props) => (props.$isActive ? "var(--cp)" : "transparent")};
    font-size: 1.3rem;
    font-family: var(--font-sans);
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 24px;
    padding: 26px 26px 26px 34px;
    border-radius: 50px;
    transition: all 200ms ease-in-out;
    cursor: pointer;

    &:hover {
        background-color: ${(props) => (props.$isActive ? "" : "var(--cp)")};

    }
`