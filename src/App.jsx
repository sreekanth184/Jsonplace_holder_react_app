import Home_page from "./pages/Home_page"
import { Route, Routes } from "react-router-dom"
import User_page from "./pages/User_page"
import Album_details from "./pages/Album_details"
import Posts_details from "./pages/Posts_details"
// import './App.css'

function App() {


  return (
    <Routes>
      <Route path="/" element={<Home_page/>} />
      <Route path="/users/:userId" element={<User_page/>}/>
      <Route path="/posts/:postId/comments" element={<Posts_details/>}/>
      <Route path="/albums/:albumsId/photos" element={<Album_details/>}/>
    </Routes>
  )
}

export default App
