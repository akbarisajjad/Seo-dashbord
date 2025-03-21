document.getElementById("analyzeBrowserButton").addEventListener("click", () => {
  const url = document.getElementById("browserUrlInput").value;
  if (!url) {
    alert("لطفاً یک URL وارد کنید.");
    return;
  }

  // انجام بررسی بهینه‌سازی برای مرورگرها (مثال)
  fetch(`https://api.example.com/browser-optimization-analyze?url=${encodeURIComponent(url)}`)
    .then(response => response.json())
    .then(data => {
      const resultsHtml = `
        <h3>نتایج بررسی بهینه‌سازی برای مرورگرها</h3>
        <p><strong>امتیاز بهینه‌سازی مرورگر:</strong> ${data.browserOptimizationScore}</p>
        <p><strong>تعداد مشکلات مرورگر:</strong> ${data.issueCount}</p>
        <p><strong>پیشنهادات:</strong> ${data.suggestions}</p>
      `;
      document.getElementById("browserResults").innerHTML = resultsHtml;
    })
    .catch(error => {
      console.error("خطا در بررسی بهینه‌سازی برای مرورگرها:", error);
      document.getElementById("browserResults").innerHTML = "<p>خطا در بررسی بهینه‌سازی برای مرورگرها. لطفاً دوباره تلاش کنید.</p>";
    });
});
