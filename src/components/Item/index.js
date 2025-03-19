"use client"

import { ActionButton, ButtonsWrapper, InfoWrapper, ItemDiv, ItemsWrapper, TitleWrapper } from "./style"
import Image from "next/image"
const Item = () => {

    return (
        <>
            <ItemsWrapper>
                <ItemDiv>
                    <TitleWrapper>
                        <h2>
                        Café
                        </h2>
                    </TitleWrapper>
                    <InfoWrapper>
                        <h4>
                            Quantidade atual: <span>5 unidades</span>
                        </h4>
                        <h4>
                            Validade: <span>31/03/2025</span>
                        </h4>
                        <h4>
                            Fornecedor: <span>Cof&Fee</span>
                        </h4>
                    </InfoWrapper>
                    <ButtonsWrapper>
                        <ActionButton>
                            <Image 
                                src="/images/edit-icon.svg"
                                alt="Edit"
                                width={35}
                                height={35}
                            />
                        </ActionButton>
                        <ActionButton>
                            <Image 
                                src="/images/trash-icon.svg"
                                alt="Edit"
                                width={35}
                                height={35}
                            />
                        </ActionButton>
                        
                    </ButtonsWrapper>
                </ItemDiv>
            </ItemsWrapper>
        </>
    )
}

export default Item