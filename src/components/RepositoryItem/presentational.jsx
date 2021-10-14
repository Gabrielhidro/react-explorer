export function RepositoryItemPresentational(props){

  const { repository } = props

  return (
    <li>
      <strong>{repository.name}</strong>
      <p>{repository.link}</p>
    </li>
  )
}