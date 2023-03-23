import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import {UserAuthContextProvider} from "./context/UserAuthContext";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <BrowserRouter>
          <UserAuthContextProvider>
            <App />
          </UserAuthContextProvider>
      </BrowserRouter>
  </React.StrictMode>,
)