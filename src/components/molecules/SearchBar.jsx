import { useEffect, useState } from "react";

const SearchBar = ({ posts, onSelectPost }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    setFilteredPosts(
      posts.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, posts]);

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search posts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {searchTerm && (
        <ul className="search-results">
          {filteredPosts.map((post) => (
            <li
              key={post.id}
              onClick={() => {
                onSelectPost(post);
                setSearchTerm("");
              }}
            >
              {post.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
