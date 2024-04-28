import BoardHeader from "./components/BoardHeader.jsx"
import Header from "./components/Header.jsx"
import PostForm from "./components/PostForm.jsx"
import PostBody from "./components/PostBody.jsx"
import SubSidebar from "./components/SubSidebar.jsx"

function App() {
  return (
    <div className="bg-reddit_light">
      <Header />
      <BoardHeader />
      <PostForm />
      <div className="flex container mx-auto px-24">
        <PostBody />
        <SubSidebar />
      </div>
    </div>
  )
}

export default App
