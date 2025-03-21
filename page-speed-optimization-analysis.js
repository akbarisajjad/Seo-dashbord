document.getElementById("analyzePageSpeedButton").addEventListener("click", () => {
  const url = document.getElementById("pageSpeedUrlInput").value;
  if (!url) {
    alert("لطفاً یک URL وارد کنید.");
    return;
  }

  // انجام بررسی بهینه‌سازی برای سرعت صفحه (مثال)
  fetch(`https://api.example.com/page-speed-optimization-analyze?url=${encodeURIComponent(url)}`)
    .then(response => response.json())
    .then(data => {
      const resultsHtml = `
        <h3>نتایج بررسی بهینه‌سازی برای سرعت صفحه</h3>
        <p><strong>امتیاز سرعت صفحه:</strong> ${data.pageSpeedScore}</p>
        <p><strong>تعداد مشکلات سرعت صفحه:</strong> ${data.issueCount}</p>
        <p><strong>پیشنهادات:</strong> ${data.suggestions}</p>
      `;
      document.getElementById("pageSpeedResults").innerHTML = resultsHtml;
    })
    .catch(error => {
      console.error("خطا در بررسی بهینه‌سازی برای سرعت صفحه:", error);
      document.getElementById("pageSpeedResults").innerHTML = "<p>خطا در بررسی بهینه‌سازی برای سرعت صفحه. لطفاً دوباره تلاش کنید.</p>";
    });
});
