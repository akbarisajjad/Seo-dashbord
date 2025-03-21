document.getElementById("analyzeSslButton").addEventListener("click", () => {
  const url = document.getElementById("sslUrlInput").value;
  if (!url) {
    alert("لطفاً یک URL وارد کنید.");
    return;
  }

  // انجام بررسی استفاده از SSL (مثال)
  fetch(`https://api.example.com/ssl-usage-analyze?url=${encodeURIComponent(url)}`)
    .then(response => response.json())
    .then(data => {
      const resultsHtml = `
        <h3>نتایج بررسی استفاده از SSL</h3>
        <p><strong>وضعیت SSL:</strong> ${data.sslStatus}</p>
        <p><strong>تاریخ انقضا:</strong> ${data.expiryDate}</p>
        <p><strong>پیشنهادات:</strong> ${data.suggestions}</p>
      `;
      document.getElementById("sslResults").innerHTML = resultsHtml;
    })
    .catch(error => {
      console.error("خطا در بررسی استفاده از SSL:", error);
      document.getElementById("sslResults").innerHTML = "<p>خطا در بررسی استفاده از SSL. لطفاً دوباره تلاش کنید.</p>";
    });
});
