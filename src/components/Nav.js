
import {useState, useEffect, useContext} from "react"
import { DataContext} from '../data/DataContext';
import Login from "./Login"
// import '../App.css';
//need to create a user log in somewhere (should it be here or a separate page?)
//either way, create a user login component and register component

function Nav() {

  const [user, setUser] = useContext(DataContext);

  const backEndURL = ""

  const getUser = async () => {
      try {
          const response = await fetch(backEndURL)
          //console.log(response)
          const thisUser = await response.json()
          //dataContext.setCurrentUser(thisUser)
      } catch (err) {
          //console.log(err)
      }
  }

useEffect(() => {getUser()}, [])


  const noUser = () => {
      return (
          <p className="welcome">Welcome</p>
      )
  }

  const yesUser = () => {
          return (
            <div className="loginField">
              <p className="currentUser-display"> Welcome {user}</p>
            </div>
      )
      //console.log(dataContext[0])
    }
    
    
    return (
      <div className="currentUser-greeting">
      <Login  />
      {user ? yesUser() : noUser()}
    </div>
  );
}

export default Nav;
  