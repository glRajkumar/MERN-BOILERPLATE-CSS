import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthContext } from './Components/State/Auth/AuthContextProvider'
import { NotFound, Protected, UnAuthor } from './Components/Common'
import { Home, Signup, Login, NavBar, Profile, ImageUpload } from './Components/User'
import "./SCSS/main.scss"

const App = () => {
  const { auth } = useContext(AuthContext)

  return (
    <>
    <NavBar auth={auth} />

    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/signup' component={Signup} />
      <Route exact path='/login' component={Login} />
      <Protected exact auth={auth} path='/upload' component={ImageUpload} />
      <Protected exact auth={auth} path='/profile' component={Profile} />
      <Route exact path="/unauth" component={UnAuthor} />
      <Route path="*" component={NotFound} />
    </Switch>
    </>
  );
}

export default App