import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header.jsx"
import BoardHeader from "./components/BoardHeader.jsx"
import PostForm from "./components/PostForm.jsx"
import PostBody from "./components/PostBody.jsx"
import SubSidebar from "./components/SubSidebar.jsx"

function App() {
  const [currentSubreddit, setCurrentSubreddit] = useState('all')

  const handleSubredditChange = (subreddit) => {
    setCurrentSubreddit(subreddit);
  };

  return (
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
}

export default App
