import RepositoryItem from "../RepositoryItem";
import { Container } from "./styles";

export function RepositoryListPresentational(props){

  const {
    repository,
    repositories,
  } = props

  const repos = repositories.map(items => {
    return (
      <p>{items.name}</p>
    )
  })

  return (
    <Container>
      <h1>Lista de Repositórios</h1>
      {repos}
      <ul>
        <RepositoryItem repository={repository} />
      </ul>
    </Container>
  )
}