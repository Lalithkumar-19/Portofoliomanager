
import Allprojects from './Allprojects'
import './App.css'
import Loginpage from './Loginpage'
import Uploadpage from './Uploadpage'
import { BrowserRouter } from 'react-router-dom'
import { Routes,Route } from 'react-router-dom'
import Profilepage from './Profilepage'
import { Provider } from 'react-redux'
import store from './redux/Store'
import VisibleProjects from './Visibleprojects'
import Services from './Services'


function App() {


  return (
    <div className="App">
      <Provider store={store}>
      <BrowserRouter>
      <Routes>
     <Route path='/'element={<Profilepage/>}/>
  <Route path='/uploadnp' element={<Uploadpage/>}/>
  <Route path='/projects' element={<Allprojects/>}/>
  <Route path='/login' element={<Loginpage/>}/>
<Route path='/services' element={ <Services/>}/>
<Route path='/visibleprojects' element={<VisibleProjects/>}/>
<Route path='*' element={
  <div>
  <center><h2>No page found !sorry ...Go back safely! </h2></center>  
  </div>
}/>
      </Routes>
      
      </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App
