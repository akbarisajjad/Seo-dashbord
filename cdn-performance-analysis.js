document.getElementById("analyzeCdnButton").addEventListener("click", () => {
  const url = document.getElementById("cdnUrlInput").value;
  if (!url) {
    alert("لطفاً یک URL وارد کنید.");
    return;
  }

  // انجام بررسی عملکرد CDN (مثال)
  fetch(`https://api.example.com/cdn-performance-analyze?url=${encodeURIComponent(url)}`)
    .then(response => response.json())
    .then(data => {
      const resultsHtml = `
        <h3>نتایج بررسی عملکرد CDN</h3>
        <p><strong>زمان پاسخگویی CDN:</strong> ${data.responseTime} میلی‌ثانیه</p>
        <p><strong>تعداد درخواست‌های CDN:</strong> ${data.requestCount}</p>
        <p><strong>پیشنهادات:</strong> ${data.suggestions}</p>
      `;
      document.getElementById("cdnResults").innerHTML = resultsHtml;
    })
    .catch(error => {
      console.error("خطا در بررسی عملکرد CDN:", error);
      document.getElementById("cdnResults").innerHTML = "<p>خطا در بررسی عملکرد CDN. لطفاً دوباره تلاش کنید.</p>";
    });
});
