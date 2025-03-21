document.getElementById("analyzeCacheButton").addEventListener("click", () => {
  const url = document.getElementById("cacheUrlInput").value;
  if (!url) {
    alert("لطفاً یک URL وارد کنید.");
    return;
  }

  // انجام بررسی بهینه‌سازی کش (مثال)
  fetch(`https://api.example.com/cache-optimization-analyze?url=${encodeURIComponent(url)}`)
    .then(response => response.json())
    .then(data => {
      const resultsHtml = `
        <h3>نتایج بررسی بهینه‌سازی کش</h3>
        <p><strong>تعداد قوانین کش:</strong> ${data.cacheRulesCount}</p>
        <p><strong>حجم کل کش:</strong> ${data.totalCacheSize} کیلوبایت</p>
        <p><strong>پیشنهادات بهینه‌سازی:</strong> ${data.suggestions}</p>
      `;
      document.getElementById("cacheResults").innerHTML = resultsHtml;
    })
    .catch(error => {
      console.error("خطا در بررسی بهینه‌سازی کش:", error);
      document.getElementById("cacheResults").innerHTML = "<p>خطا در بررسی بهینه‌سازی کش. لطفاً دوباره تلاش کنید.</p>";
    });
});
