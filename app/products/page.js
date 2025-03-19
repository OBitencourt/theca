"use client"

import TemplateDefault from "@/src/templates/TemplateDefault"
import { ActionButton, ButtonsWrapper, InfoWrapper, Item, ItemsWrapper, Subtitle, Title, TitleWrapper } from "./style"
import Image from "next/image"

const Products = () => {

  return (
    <TemplateDefault>
      <Title>
        Empresa X
      </Title>
      <Subtitle>
        Aqui estão os seus itens e produtos cadastrados:
      </Subtitle>

      <ItemsWrapper>
        <Item>
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
        </Item>
      </ItemsWrapper>
    </TemplateDefault>
  )
}


export default Products