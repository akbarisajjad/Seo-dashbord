document.getElementById("analyzeSecurityButton").addEventListener("click", () => {
  const url = document.getElementById("securityUrlInput").value;
  if (!url) {
    alert("لطفاً یک URL وارد کنید.");
    return;
  }

  // انجام بررسی امنیت سایت (مثال)
  fetch(`https://api.example.com/security-analyze?url=${encodeURIComponent(url)}`)
    .then(response => response.json())
    .then(data => {
      const resultsHtml = `
        <h3>نتایج بررسی امنیت سایت</h3>
        <p><strong>تعداد آسیب‌پذیری‌ها:</strong> ${data.vulnerabilityCount}</p>
        <p><strong>سطح امنیت:</strong> ${data.securityLevel}</p>
        <p><strong>پیشنهادات:</strong> ${data.suggestions}</p>
      `;
      document.getElementById("securityResults").innerHTML = resultsHtml;
    })
    .catch(error => {
      console.error("خطا در بررسی امنیت سایت:", error);
      document.getElementById("securityResults").innerHTML = "<p>خطا در بررسی امنیت سایت. لطفاً دوباره تلاش کنید.</p>";
    });
});
