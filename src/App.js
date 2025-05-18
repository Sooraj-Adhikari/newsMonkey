import React,{useState} from 'react'
import './App.css';
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";


const App =()=> {
  const pageSize=10;
  const apiKey=process.env.REACT_APP_NEWS_API;
  const [progress,setProgress]=useState(0)


 
  
 
    return (
      <div>
          <BrowserRouter>

          <LoadingBar 
        color='#f11946'
        progress={ progress}
       
      />

    <NavBar/>
    
    <Routes>
    <Route path="/"  element={<News setProgress={ setProgress} apiKey={ apiKey} key="/" pageSize={ pageSize} category="general"/>}/>
          <Route exact path="/home"  element={<News  setProgress={ setProgress} apiKey={ apiKey} key="home"  pageSize={ pageSize} category="general"/>}/>
          <Route exact path="/business"  element={<News setProgress={ setProgress} apiKey={ apiKey} key="business" pageSize={ pageSize} category="business"/>}/>
          <Route exact path="/entertainment"  element={<News setProgress={ setProgress} apiKey={ apiKey} key="entertainment" pageSize={ pageSize} category="entertainment"/>}/>
          <Route exact path="/general"  element={<News setProgress={ setProgress} apiKey={ apiKey} key="general" pageSize={ pageSize} category="general"/>}/>
          <Route exact path="/health"  element={<News setProgress={ setProgress} apiKey={ apiKey} key="health" pageSize={ pageSize} category="health"/>}/>
          <Route exact path="/science"  element={<News setProgress={ setProgress} apiKey={ apiKey} key="science" pageSize={ pageSize} category="science"/>}/>
          <Route exact path="/sports"  element={<News  setProgress={ setProgress} apiKey={ apiKey} key="sports" pageSize={ pageSize} category="sports"/>}/>
          <Route exact path="/technology"  element={<News setProgress={ setProgress} apiKey={ apiKey} key="technology" pageSize={ pageSize} category="technology"/>}/>
          
          </Routes>
    </BrowserRouter>
      </div>
    )
  }


export default App

