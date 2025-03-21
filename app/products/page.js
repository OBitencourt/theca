"use client"

import TemplateDefault from "@/src/templates/TemplateDefault"
import {Subtitle, Title, AddButton } from "./style"

import AddModal from '@/src/components/AddModal'
import Item from "@/src/components/Item"
import { useState } from "react"
import Image from "next/image"

const Products = () => {

  const [openModal, setOpenModal] = useState(false)

  const handleModal = () => {
    
    setOpenModal(!openModal)
  }

  return (
    <TemplateDefault>
      <Title>
        Empresa X
      </Title>
      <Subtitle>
        Aqui estão os seus itens e produtos cadastrados:
      </Subtitle>
      <Item />
      <AddButton onClick={() => handleModal()}>
        <Image 
          src="/images/add-icon.svg"
          width={50}
          height={50}
          alt="Add item"
        />
      </AddButton>
      <AddModal isActive={openModal} closeModal={() => handleModal()}/>
    </TemplateDefault>
  )
}


export default Products