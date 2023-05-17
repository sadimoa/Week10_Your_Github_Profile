import React from "react";

// Import the "useState" and "useEffect" hooks from React
// Soo jiido "useState" iyo "useEffect"
import { useEffect, useState } from "react";
// Import the "MyProfile" component
// Soo jiido "MyProfile" component-ka
import MyProfile from './components/MyProfile'
import Repo from './components/repo/RepoList'
// Import the "axios" library
// Soo jiido "axios" hoos

import axios from "axios";

import "./App.css";

function App() {

  // Create 3 states, "profile", "followers", and "following"
  // Samee 3 state, "profile", "followers", iyo "following"
  
    const [profile,setProfile] = useState([])
    const [followers,setFollowers] = useState([])
    const [following,setFollowing] = useState([])
    const [repo, setRepo] = useState([])   



  // API For Profile = https://api.github.com/users/<your-github-username>
  // API for Followers = https://api.github.com/users/<your-github-username>/followers
  // API for Following = https://api.github.com/users/<your-github-username>/following

  // Use axios to fetch data from the API using the useEffect hook
  // Halkaan isticmaal axios adigoo kasoo jiidanaayo waxaa u baahantahay API, useEffect hook-na isticmaal
    
useEffect(() => {
axios.get('https://api.github.com/users/sadimoa')

.then((res) => {
  setProfile(res.data)
})

.catch(error => {
  console.log(error)
})

}, []);



useEffect(() => {
  axios.get('https://api.github.com/users/sadimoa/followers')
  .then(res => setFollowers(res.data))
  .catch(error => console.log(error))
  },[])


useEffect(() => {
  axios.get('https://api.github.com/users/sadimoa/following')
  .then(res => setFollowing(res.data))
  .catch(error => console.log(error))
  },[])


useEffect(() => {
  axios.get('https://api.github.com/users/sadimoa/repos')
  .then(res => setRepo(res.data))
  .catch(error => console.log(error))
  },[])




  return (
    <div className="bg-white md:mx-auto rounded shadow-xl w-full md:w-1/2 overflow-hidden">
      <div className="h-[140px] bg-gradient-to-r from-cyan-500 to-blue-500"></div>

      {/* Show "MyProfile" component here and give it 3 props, "profile", "followers", and "following" */}
      {/* Halkaan soo gali "MyProfile", 3 props-na sii, "profile", "followers", iyo "following" */}
      {/* <MyProfile profile={profile} followers={followers} following={following}/> */}

      <MyProfile profile={profile} followers={followers} following={following} repo={repo}/>
    </div>
  )
}

export default App
