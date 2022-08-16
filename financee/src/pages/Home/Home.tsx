import { CardInfo } from "../../components/CardInfo/CardInfo";
import Form from "../../components/Form/Form";
import { Container, Header, Title } from "./styles";

export function Home(){
  return(
    <Container >
      <Header>
        <Title>Financee</Title>
      </Header>
        <CardInfo />
        <Form />
    </Container>
  )
}