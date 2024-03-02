import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import CreatePostForm from "./components/CreatePostForm";
import PostsList from "./components/PostsList";
import PostListContextProvider from "./store/post-list-store";
import { useState } from "react";

function App() {
  const [activeTab, setActiveTab] = useState("Home");

  const updateActiveTab = (tabName) => {
    console.log(`Changing active tab to ${tabName}`);
    setActiveTab(tabName);
  };

  return (
    <PostListContextProvider>
      <div className="appContainer">
        <Sidebar updateActiveTab={updateActiveTab} selectedTab={activeTab} />
        <div className="content">
          <Header />
          {activeTab === "Home" ? <PostsList /> : <CreatePostForm updateActiveTab={setActiveTab}/>}
          <Footer />
        </div>
      </div>
    </PostListContextProvider>
  );
}

export default App;
