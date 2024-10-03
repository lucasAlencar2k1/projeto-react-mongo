import styled from "styled-components"
import successImg from "../../Img/checked.png"

const SuccessContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
    height: 100vh;
`
const SuccessCard = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   color:  #ffffff44;
   gap: 28px;
   background-color: #a7a7a726;
   padding: 28px;
   border-radius: 8px;
`

const SuccessImage = styled.img`
    width: 100px;
`

const SuccessMessage = styled.p`
    color: #FFFFFF;
`

function Success() {
    return (
        <SuccessContainer>
            <SuccessCard>
                <SuccessImage src={successImg} />
                <SuccessMessage>Cadastro finalizado com sucesso!</SuccessMessage>
            </SuccessCard>
        </SuccessContainer>
    )
}

export default Success;