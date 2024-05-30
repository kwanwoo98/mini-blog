import logo from './logo.svg';
import './App.css';

import {BrowserRouter, Routes, Route} from "react-router-dom";
import styled from 'styled-components';
import PostWritePage from './page/PostWritePage';
import PostViewPage from './page/PostViewPage';
import MainPage from './page/MainPage';


const MainTitleText=styled.p`
  font-size : 24px;
  fonst-weight : bold;
  text-align : center;
`;

function App() {
  return (
    <BrowserRouter>
      <MainTitleText>소플의 미니 블로그</MainTitleText>
        <Routes>
          <Route index element={<MainPage />}/> 
          <Route path="post-write" element={<PostWritePage />}/>
          <Route path="post/:postId" element={<PostViewPage />}/>
        </Routes>   
    </BrowserRouter> 
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
