import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header.jsx"
import BoardHeader from "./components/BoardHeader.jsx"
import PostForm from "./components/PostForm.jsx"
import PostBody from "./components/PostBody.jsx"
import SubSidebar from "./components/SubSidebar.jsx"
import { DarkModeProvider } from "./components/DarkModeContext.jsx"

function App() {
  const [currentSubreddit, setCurrentSubreddit] = useState('all')

  const handleSubredditChange = (subreddit) => {
    setCurrentSubreddit(subreddit);
  };

  return (
<<<<<<< HEAD
    <Router>
      <div className="bg-reddit_dark">
        <Header />
        <Routes>
          <Route path="/r/:subreddit" element={<BoardHeader />} />
          <Route path="/" element={
            <div>
              <BoardHeader subreddit={currentSubreddit} />
              <PostForm subreddit={currentSubreddit} />
              <div className="flex container mx-auto px-24">
                <PostBody subreddit={currentSubreddit} />
                <SubSidebar onSubredditChange={handleSubredditChange} />
              </div>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
=======
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
>>>>>>> sidebar-fetch
}

export default App
