import Image from "next/image"
import { ButtonDiv } from "./style"



const AddButton = () => {

    return ( 
        <>
            <ButtonDiv>
                <Image 
                    src="/images/add-icon.svg"
                    alt="Add"
                    width={50}
                    height={50}
                />
            </ButtonDiv>
        </>
    )
}


export default AddButton