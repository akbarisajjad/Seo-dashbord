document.getElementById("analyzeSitemapButton").addEventListener("click", () => {
  const url = document.getElementById("sitemapUrlInput").value;
  if (!url) {
    alert("لطفاً یک URL وارد کنید.");
    return;
  }

  // انجام بررسی نقشه سایت (مثال)
  fetch(`https://api.example.com/sitemap-analyze?url=${encodeURIComponent(url)}`)
    .then(response => response.json())
    .then(data => {
      const resultsHtml = `
        <h3>نتایج بررسی نقشه سایت</h3>
        <p><strong>تعداد صفحات:</strong> ${data.pageCount}</p>
        <p><strong>تعداد خطاها:</strong> ${data.errorCount}</p>
        <p><strong>پیشنهادات:</strong> ${data.suggestions}</p>
      `;
      document.getElementById("sitemapResults").innerHTML = resultsHtml;
    })
    .catch(error => {
      console.error("خطا در بررسی نقشه سایت:", error);
      document.getElementById("sitemapResults").innerHTML = "<p>خطا در بررسی نقشه سایت. لطفاً دوباره تلاش کنید.</p>";
    });
});
