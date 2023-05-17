import React from 'react'
import RepoCard from './RepoCard' 

 function Repo(props) {
 

  
  return (
    <div>
      {props.repo.map(repo => <RepoCard repo={repo}/>)}
    </div>
  ) 
}


export default Repo