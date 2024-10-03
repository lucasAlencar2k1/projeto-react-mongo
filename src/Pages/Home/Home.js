import styled from "styled-components"
import Title from "../../Components/Title";
import Form from "../../Components/Form";

const HomeContainer = styled.div`

`

function Home() {
  return (
    <HomeContainer>
      <Title />
      <Form />
    </HomeContainer>
  );
}

export default Home;
