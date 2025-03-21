
import { useEffect } from 'react'
import { Backdrop, ButtonsWrapper, CancelButton, ConfirmButton, FormBox, ModalBox, StyledInput } from './style'
const AddModal = ({ isActive, closeModal }) => {

    useEffect(() => {
        console.log(isActive)
    }, [isActive])

    return (

        <>
            <Backdrop onClick={closeModal} $isActive={isActive}>
                <ModalBox onClick={e => e.stopPropagation()}>
                    <h2>
                        Adicionar Item
                    </h2>
                    <FormBox>
                        <h5>
                            Nome:
                        </h5>
                        <StyledInput />

                        <h5>
                            Preço:
                        </h5>
                        <StyledInput />

                        <h5>
                            Quantidade atual:
                        </h5>
                        <StyledInput />

                        <h5>
                            Fornecedores:
                        </h5>
                        <StyledInput />

                        <h5>
                            Validade:
                        </h5>
                        <StyledInput />


                    </FormBox>
                    <ButtonsWrapper>
                        <CancelButton onClick={closeModal}>
                            Cancelar
                        </CancelButton>
                        <ConfirmButton onClick={closeModal}>
                            Adicionar
                        </ConfirmButton>
                    </ButtonsWrapper>
                </ModalBox>
            </Backdrop>
        </>
    )
}


export default AddModal