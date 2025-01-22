document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search");
    const postsContainer = document.getElementById("posts-container");
  
    // Fetch posts from DummyJSON
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/posts");
        const data = await response.json();
        renderPosts(data.posts);
      } catch (error) {
        console.error("Error fetching posts:", error);
        postsContainer.innerHTML = `<p>Failed to load posts.</p>`;
      }
    };
  
    // Render posts
    const renderPosts = (posts) => {
      postsContainer.innerHTML = posts
        .map(
          (post) => `
          <div class="post-card">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
          </div>
        `
        )
        .join("");
    };
  
    // Filter posts
    searchInput.addEventListener("input", async (e) => {
      const searchTerm = e.target.value.toLowerCase();
      const response = await fetch("https://dummyjson.com/posts");
      const data = await response.json();
      const filteredPosts = data.posts.filter((post) =>
        post.title.toLowerCase().includes(searchTerm)
      );
      renderPosts(filteredPosts);
    });
  
    // Initial fetch
    fetchPosts();
  });
  