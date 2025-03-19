"use client"

import TemplateDefault from "@/src/templates/TemplateDefault"
import {Subtitle, Title } from "./style"
import Item from "@/src/components/Item"

const Products = () => {

  return (
    <TemplateDefault>
      <Title>
        Empresa X
      </Title>
      <Subtitle>
        Aqui estão os seus itens e produtos cadastrados:
      </Subtitle>
      <Item />
    </TemplateDefault>
  )
}


export default Products