// Submit a new blog post
async function submitPost() {
  const title = document.getElementById("postTitle").value.trim();
  const content = document.getElementById("postContent").value.trim();
  const category = document.getElementById("category").value;

  if (!title || !content || !category) {
    alert("Please fill in the title, content, and category.");
    return;
  }

  const token = localStorage.getItem("token");

  if (!token) {
    alert("❌ You must be logged in to publish a post.");
    return;
  }

  try {
    const response = await fetch("http://localhost:3000/api/posts/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({ title, content, category })
    });

    const data = await response.json();

    if (response.ok) {
      alert("✅ Post published!");
      // ✅ Redirect to category page
      //window.location.href = `category.html?cat=${category}`;

        // Clear form inputs
        document.getElementById("postTitle").value = "";
        document.getElementById("postContent").value = "";
        document.getElementById("category").value = "";

        //loadPosts();
    } else {
      alert("❌ Failed: " + data.message);
    }
  } catch (error) {
    alert("❌ Network error: " + error.message);
  }
}









