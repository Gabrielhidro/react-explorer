import { createElement, useEffect, useState } from "react";
import { RepositoryListPresentational } from "./presentational";

function RepositoryList(){
  
  const [ repositories, setRepositories ] = useState([])

  const repository = {
    name: 'unform',
    link: 'google'
  }

  useEffect(() => {
    fetch('https://api.github.com/users/gabrielhidro/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
    }, [])
    
    return (
    createElement(RepositoryListPresentational, {
      repository,
      repositories
    })
  )
}

export default RepositoryList;