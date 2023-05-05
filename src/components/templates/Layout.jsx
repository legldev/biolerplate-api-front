import { useState } from "react";
import Header from "../molecules/Header";

const Layout = ({ children }) => {
  const [selectedPost, setSelectedPost] = useState(null);
  const posts = [
    // Your blog posts array, with id, title, and content properties
    { id: 1, title: "Post 1", content: "<p>Content of post 1</p>" },
    { id: 2, title: "Post 2", content: "<p>Content of post 2</p>" },
  ];

  return (
    <div className="App">
      <Header posts={posts} onSelectPost={setSelectedPost} />
      {children}
    </div>
  );
};

export default Layout;
