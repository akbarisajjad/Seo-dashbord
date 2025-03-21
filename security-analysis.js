document.getElementById("analyzeSecurityButton").addEventListener("click", () => {
  const url = document.getElementById("securityUrlInput").value;
  if (!url) {
    alert("لطفاً یک URL وارد کنید.");
    return;
  }

  // انجام تحلیل امنیت (مثال)
  fetch(`https://api.example.com/security-analyze?url=${encodeURIComponent(url)}`)
    .then(response => response.json())
    .then(data => {
      const resultsHtml = `
        <h3>نتایج تحلیل امنیت</h3>
        <p><strong>تعداد آسیب‌پذیری‌ها:</strong> ${data.vulnerabilityCount}</p>
        <p><strong>سطح امنیت:</strong> ${data.securityLevel}</p>
        <p><strong>پیشنهادات:</strong> ${data.suggestions}</p>
      `;
      document.getElementById("securityResults").innerHTML = resultsHtml;
    })
    .catch(error => {
      console.error("خطا در تحلیل امنیت:", error);
      document.getElementById("securityResults").innerHTML = "<p>خطا در تحلیل امنیت. لطفاً دوباره تلاش کنید.</p>";
    });
});
