import { createElement } from "react";
import { RepositoryListPresentational } from "./presentational";

function RepositoryList(){
  
  const repository = {
    name: 'unform',
    link: 'google'
  }
  
  return (
    createElement(RepositoryListPresentational, {
      repository
    })
  )
}

export default RepositoryList;