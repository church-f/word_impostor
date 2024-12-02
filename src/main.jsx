import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import store from './app/store.js'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from './component/aboutUs_page/AboutUs.jsx'

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<App />}/>
          <Route path='/about-us' element={<AboutUs />}/>
        </Routes>
      </Router>
    </Provider>
)
