document.querySelector("#loginForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  const response = await fetch("http://localhost:3000/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email,
      password
    })
  });

  const data = await response.json();

  if (response.ok) {
    alert("✅ Login successful!");
    localStorage.setItem("token", data.token);
    // redirect korte paro
  } else {
    alert("❌ " + (data.message || "Login failed"));
  }
});



