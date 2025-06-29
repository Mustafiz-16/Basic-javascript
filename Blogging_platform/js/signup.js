document.querySelector("#signupForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const name = document.querySelector("#username").value;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  const response = await fetch("http://localhost:3000/api/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name,
      email,
      password
    })
  });

  const data = await response.json();

  if (response.ok) {
    alert("✅ Signup successful!");
    localStorage.setItem("token", data.token);
    // redirect korte paro
  } else {
    alert("❌ " + (data.message || "Signup failed"));
  }
});
