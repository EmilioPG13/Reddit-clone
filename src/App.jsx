import BoardHeader from "./components/BoardHeader.jsx"
import Header from "./components/Header.jsx"
import PostForm from "./components/PostForm.jsx"
import PostBody from "./components/PostBody.jsx"
import SubSidebar from "./components/SubSidebar.jsx"
import { DarkModeProvider } from "./components/DarkModeContext.jsx"
import { useState } from "react";

function App() {
  const [subreddit, setSubreddit] = useState("r/webdev");

  
  return (
    <DarkModeProvider>
    <div className="bg-reddit_light dark:bg-dark_reddit_light">
      <Header />
      <BoardHeader subreddit={subreddit} />
      <PostForm />
      <div className="flex container mx-auto px-24">
        <PostBody subreddit={subreddit}/>
        <SubSidebar setSubreddit={setSubreddit} />
      </div>
    </div>
    </DarkModeProvider>
  )
}

export default App
