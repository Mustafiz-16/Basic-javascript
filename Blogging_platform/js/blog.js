console.log("📢 blogs.js loaded");

const container = document.getElementById('blog-list');
const API_URL = 'http://localhost:3000/api/blogs';

function loadBlogs(category = '') {
  const url = category ? `${API_URL}?category=${category}` : API_URL;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      container.innerHTML = '';
      if (data.length === 0) {
        container.innerHTML = '<p>No blogs found.</p>';
        return;
      }

      data.forEach(blog => {
        const card = document.createElement('div');
        card.className = 'blog-card';
        card.innerHTML = `
          <h2>${blog.title}</h2>
          <p>${blog.content.substring(0, 100)}...</p>
          <p><em>By ${blog.author} on ${blog.date}</em></p>
        `;
        container.append(card);
      });
    })
    .catch(err => console.error('Fetch error:', err));
}

loadBlogs();
