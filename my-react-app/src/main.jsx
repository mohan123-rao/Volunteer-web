import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'

import './index.css'
import Login from './Login.jsx'

import Signup from './Signup.jsx'
import Aboutus from './Aboutus.jsx'
import Homepage from './Homepage.jsx'
import ResDetails from './ResDetails.jsx'
import Searchbar from './Searchbar.jsx'
import Items from './Items.jsx'
import LoginChoice from './LoginChoice.jsx'
import LoginRes from './LoginRes.jsx'
import Menu from './Menu.jsx'
import Profile from './Profile.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import VoiceController from './VoiceController.jsx'
createRoot(document.getElementById('root')).render(

<StrictMode> 
<BrowserRouter>  
<VoiceController />
<Routes>
  <Route path='/' element={<Homepage />}/>
<Route path='/loginchoice' element={<LoginChoice />} />
<Route path='/login' element={<Login />}/>
<Route path='/signup' element={<Signup />}/>
<Route path='/resdetails' element={<ResDetails />} />
<Route path='/search' element={<Searchbar/>} />
<Route path='/items' element={<Items />} />
<Route path='/loginRes' element={<LoginRes />} />
<Route path='/menu/:restaurantId' element={<Menu />} />
<Route path='/profile' element={<Profile />} />
<Route path='/aboutus' element={<Aboutus />} />

  </Routes>  </BrowserRouter>  </StrictMode>) 