import TextEditor from "./TextEditor"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import { v4 as uuidV4 } from "uuid"

function App() {
  return (
    <Router>
       <Routes>
        <Route path="/" element={<TextEditor />}/>
       </Routes>
    </Router>
  )
}

export default App
