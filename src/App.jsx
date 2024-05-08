import { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Header from "./components/Header.jsx"
import BoardHeader from "./components/BoardHeader.jsx"
import PostBody from "./components/PostBody.jsx"
import SubSidebar from "./components/SubSidebar.jsx"
import { DarkModeProvider } from "./components/DarkModeContext.jsx"

function App() {
  const [subreddit, setSubreddit] = useState('webdev'); // replace 'defaultSubreddit' with your default subreddit

  return (
    <Provider store={store}>
      <DarkModeProvider>
        <div className="bg-reddit_light dark:bg-dark_reddit_light">
          <Header />
          <BoardHeader subreddit={subreddit} />
          <div className="flex container mx-auto px-24">
            <PostBody subreddit={subreddit} />
            <SubSidebar setSubreddit={setSubreddit} />
          </div>
        </div>
      </DarkModeProvider>
    </Provider>
  )
}

export default App;