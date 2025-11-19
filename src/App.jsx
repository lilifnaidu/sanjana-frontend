import React from 'react'
import AuthForm from './Components/Cobine/Auth'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ResourceFeed from "./Components/Dashboard/Dashboard"
import { AuthProvider } from './Context/Authcontext'
const App = () => {
  return (
    <>
 <AuthProvider>

     <BrowserRouter>
    <Routes>
      <Route path="/*" element={<AuthForm />} />
      <Route path='/dashboard' element={<ResourceFeed />} />
    </Routes>
    </BrowserRouter>
 </AuthProvider>

    </>
  )
}

export default App