import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'

import './index.css'
import Volunteer from './Volunteer.jsx'
import Dashboard from './Dashboard.jsx'
import Login from './Login.jsx'
import Homepage from './Homepage.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
createRoot(document.getElementById('root')).render(

<StrictMode> 
<BrowserRouter>  
<Routes>
  <Route path='/' element={<Homepage />}/>
<Route path='/login' element={<Login />}/>
<Route path='/dashboard' element={<Dashboard />} />
<Route path='/volunteer' element={<Volunteer />} />

  </Routes>  </BrowserRouter>  </StrictMode>) 