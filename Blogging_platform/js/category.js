// js/category.js

document.addEventListener("DOMContentLoaded", async () => {
  const params = new URLSearchParams(window.location.search);
  const category = params.get("cat");

  document.getElementById("categoryTitle").innerText = `Category: ${category}`;

  try {
    const res = await fetch(`http://localhost:3000/api/blogs?category=${category}`);
    const posts = await res.json();

    const container = document.getElementById("postsContainer");
    if (posts.length === 0) {
      container.innerHTML = `<p>No posts found in this category.</p>`;
      return;
    }

    posts.forEach(post => {
      const card = document.createElement("div");
      card.className = "post-card";
      card.innerHTML = `
        <h3>${post.title}</h3>
        <p><strong>Author:</strong> ${post.author}</p>
        <p>${post.content}</p>
        <small><em>${new Date(post.createdAt).toLocaleString()}</em></small>
      `;
      container.appendChild(card);
    });

  } catch (err) {
    console.error("Error loading posts:", err);
  }
});
