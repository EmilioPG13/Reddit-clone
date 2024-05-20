import { useState } from 'react';
import { Provider, useSelector } from 'react-redux';
import store from './store';
import Header from "./components/Header.jsx"
import BoardHeader from "./components/BoardHeader.jsx"
import PostBody from "./components/PostBody.jsx"
import SubSidebar from "./components/SubSidebar.jsx"

function AppContent() {
  const [subreddit, setSubreddit] = useState('webdev');
  const darkMode = useSelector(state => state.darkMode);

  return (
    <div className={`bg-reddit_light ${darkMode ? 'dark:bg-dark_reddit_light' : ''}`}>
      <Header />
      <BoardHeader subreddit={subreddit} />
      <div className="flex container mx-auto px-24">
        <PostBody subreddit={subreddit} />
        <SubSidebar setSubreddit={setSubreddit} />
      </div>
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  )
}

export default App;