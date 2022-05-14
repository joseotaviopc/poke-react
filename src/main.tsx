import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import App from './App'
import { List } from './pages/List';
import { Detail } from './pages/Detail';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// import { Home } from './pages/Home';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<React.StrictMode><App /></React.StrictMode>}>
        {/* <Route index element={<Home />} /> */}
        <Route index element={<Navigate replace to="/list" />} />
        <Route path="list" element={<List />} />
        <Route path="detail/:id" element={<Detail />} />
      </Route>
    </Routes>
  </BrowserRouter>
  
)
