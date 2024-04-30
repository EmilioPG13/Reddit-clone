import Header from "./components/Header.jsx"
import BoardHeader from "./components/BoardHeader.jsx"
import PostForm from "./components/PostForm.jsx"
import PostBody from "./components/PostBody.jsx"
import SubSidebar from "./components/SubSidebar.jsx"
import { DarkModeProvider } from "./components/DarkModeContext.jsx"

function App() {

  return (
    <DarkModeProvider>
    <div className="bg-reddit_light dark:bg-dark_reddit_light">
      <Header />
      <BoardHeader />
      <PostForm />
      <div className="flex container mx-auto px-24">
        <PostBody />
        <SubSidebar />
      </div>
    </div>
    </DarkModeProvider>
  )
}

export default App
