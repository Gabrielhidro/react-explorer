import RepositoryItem from "../RepositoryItem";
import { Container } from "./styles";

const repository = {
  name: 'unform',
  link: 'google'
}

export function RepositoryListPresentational(){
  return (
    <Container>
      <h1>Lista de Repositórios</h1>

      <ul>
        <RepositoryItem repository={repository} />
      </ul>
    </Container>
  )
}