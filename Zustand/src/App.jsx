import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import RootRoute from "./route/routes"
import { GlobalStyle } from './GlobalCss'
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