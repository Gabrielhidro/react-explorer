import RepositoryItem from "../RepositoryItem";
import { Container } from "./styles";

export function RepositoryListPresentational(props){

  const {repository} = props

  return (
    <Container>
      <h1>Lista de Repositórios</h1>

      <ul>
        <RepositoryItem repository={repository} />
      </ul>
    </Container>
  )
}