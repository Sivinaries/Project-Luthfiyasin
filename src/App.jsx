import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import News from "./pages/News"
import Profil1 from "./pages/Profil1"
import Profil2 from "./pages/Profil2"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profil1" element={<Profil1 />} />
      <Route path="/profil2" element={<Profil2 />} />
      <Route path="/news" element={<News />} />
    </Routes>
  )
}

export default App
