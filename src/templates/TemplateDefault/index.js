"use client"


import Sidebar from '@/src/components/Sidebar'
import styled from 'styled-components'

const MainContent = styled.div`
    padding: 30px 0 0 20%;
    width: 100%;
    box-sizing: border-box;
`
const TemplateDefault = ({children}) => {

    return (
        <>
            <Sidebar />
            <MainContent>
                {children}
            </MainContent>
        </>
    )
}

export default TemplateDefault