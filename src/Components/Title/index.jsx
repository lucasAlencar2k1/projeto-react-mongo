import styled from "styled-components"

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 12rem;
`
const TitleStyle = styled.h1`
    font-size: 42px;
    color: #FFFFFF;
`

function Title() {
  return (
    <TitleContainer>
        <TitleStyle>LOGIN</TitleStyle>
    </TitleContainer>
  )
}

export default Title;