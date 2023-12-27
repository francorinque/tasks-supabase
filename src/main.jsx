import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import { HashRouter } from "react-router-dom"

import "./App.css"
import TasksProvider from "./context/TasksContext.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TasksProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </TasksProvider>
  </React.StrictMode>
)
