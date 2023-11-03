import { createContext, useState } from "react";
import { useContext } from "react";
import postData from "./Data/postData";
import userData from "./Data/userData";
const DataContext = createContext(null);
export const DataProvider = ({ children }) => {
  const [logName, setlogName] = useState(null);

  const login = (logName) => {
    setlogName(logName);
  };

  const logout = () => {
    setlogName(null);
  };

  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };
  const [posts, setPosts] = useState(postData);
  const [users, setUsers] = useState(userData);
  const [friendList, setFriendList] = useState([]);

  const handleLike = (postId) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        if (post.liked) {
          return { ...post, liked: false, likes: post.likes - 1 };
        } else {
          return { ...post, liked: true, likes: post.likes + 1 };
        }
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  const handleDelete = (postId) => {
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);
  };

  const handleShare = (postId) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        console.log(`post ${postId} is shared.`);
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  const handleBookmark = (postId) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        return { ...post, bookmarked: !post.bookmarked };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  const addNewPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <DataContext.Provider
      value={{
        users,
        logName,
        login,
        logout,
        posts,
        setUsers,
        setPosts,
        friendList,
        setFriendList,
        handleBookmark,
        handleDelete,
        handleLike,
        handleShare,
        tabValue,
        setTabValue,
        handleTabChange,
        addNewPost,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
export const useData = () => {
  return useContext(DataContext);
};
