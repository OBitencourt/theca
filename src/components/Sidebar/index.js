"use client"

import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'

import { ButtonsWrapper, LogoSpace, SidebarStyled, StyledButton } from './style'

const Sidebar = () => {

    const pathname = usePathname()
    const router = useRouter()


    const handleLinks = (link) => {
        router.push(link)
    }


    return (

        <>
            <SidebarStyled>
                <LogoSpace>
                    Theca
                </LogoSpace>
                <ButtonsWrapper>
                    <StyledButton
                        $isActive={pathname === '/'}
                        onClick={() => handleLinks('/')}
                    >
                        <Image 
                            src="/images/home-gray-theca.svg"
                            alt="Home"
                            width={35}
                            height={35}
                        />
                        Início
                    </StyledButton>

                    <StyledButton
                        $isActive={pathname === '/movements'}
                        onClick={() => handleLinks('/movements')}
                    >
                        <Image 
                            src="/images/movements-gray.svg"
                            alt="Home"
                            width={35}
                            height={35}
                        />
                        Movimentos
                    </StyledButton>

                    <StyledButton
                        $isActive={pathname === '/products'}
                        onClick={() => handleLinks('/products')}
                    
                    >
                        <Image 
                            src={pathname === '/products' ? "/images/product-blue.svg" : "/images/product-gray.svg"}
                            alt="Home"
                            width={35}
                            height={35}
                        />
                        Produtos
                    </StyledButton>
                </ButtonsWrapper>
            </SidebarStyled>
        </>
    )
}


export default Sidebar