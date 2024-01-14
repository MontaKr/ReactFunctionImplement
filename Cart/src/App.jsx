import React from 'react'
import RootRoute from "./route/route"
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './GlobalStyle'
import NavigationBar from './components/navigationBar/NavigationBar'

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <NavigationBar/>
      <RootRoute/>
    </BrowserRouter>
  )
}

export default App