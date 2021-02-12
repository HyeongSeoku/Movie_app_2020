import React from "react";
import {HashRouter , Route} from "react-router-dom"
import About from "./routes/About"
import Home from "./routes/Home"
import Navigation from "./components/Navigation"
import Detail from "./routes/Detail"
import "./App.css"

//네비게이터가 두개의 컴포넌트를 렌더링하는 현상 (/일때) 을 막기위해 exact ={true} 설정 
function App(){
  return (
  <HashRouter>
    <Navigation/>
    <Route path="/" exact={true} component={Home}/>   
    <Route path="/about" component={About}/>
    <Route path="/movie-detail" component={Detail}/>

  </HashRouter>
  );
}

export default App;