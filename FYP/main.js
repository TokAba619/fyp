// main.js

document.getElementById('loginForm').addEventListener('submit', async function (e) {
  e.preventDefault(); // Prevent the form from refreshing the page

  const form = e.target;
  const formData = new FormData(form); // Grab the username & password

  try {
    const response = await fetch('https://gcp-bucket-detector-backend-661175673686.us-central1.run.app/login', {
      method: 'POST',
      body: formData
    });

    if (!response.ok) {
      throw new Error('Login failed. Please check your credentials.');
    }

    const data = await response.json();
    const token = data.token;

    // Save token for later use
    localStorage.setItem('access_token', token);

    // Redirect to dashboard
    window.location.href = 'file:///C:/Users/AQILDARWISY/OneDrive/Documents/muhammad%20aqil%20darwisy%20practical%20test%201/FYP/web.html';
  } catch (err) {
    alert(err.message);
  }
});
