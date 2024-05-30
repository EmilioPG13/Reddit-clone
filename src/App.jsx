import { useState } from 'react';
import Header from "./components/Header.jsx"
import BoardHeader from "./components/BoardHeader.jsx"
import PostBody from "./components/PostBody.jsx"
import SubSidebar from "./components/SubSidebar.jsx"
import { DarkModeProvider } from "./components/DarkModeContext.jsx"

function App() {
  const [subreddit, setSubreddit] = useState('webdev'); // replace 'defaultSubreddit' with your default subreddit

  return (
    <DarkModeProvider>
      <div className="bg-reddit_light dark:bg-dark_reddit_light">
        <Header />
        <BoardHeader subreddit={subreddit}/>
        <div className="flex container mx-auto px-24 md:pr-0 md:pl-10">
          <PostBody subreddit={subreddit} />
          <SubSidebar setSubreddit={setSubreddit}/>
        </div>
      </div>
    </DarkModeProvider>
  )
}

export default App;