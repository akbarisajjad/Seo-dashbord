document.getElementById("analyzePageSpeedButton").addEventListener("click", () => {
  const url = document.getElementById("pageSpeedUrlInput").value;
  if (!url) {
    alert("لطفاً یک URL وارد کنید.");
    return;
  }

  // انجام تحلیل سرعت صفحه (مثال)
  fetch(`https://api.example.com/page-speed-analyze?url=${encodeURIComponent(url)}`)
    .then(response => response.json())
    .then(data => {
      const resultsHtml = `
        <h3>نتایج تحلیل سرعت صفحه</h3>
        <p><strong>زمان بارگذاری صفحه:</strong> ${data.loadTime} میلی‌ثانیه</p>
        <p><strong>تعداد درخواست‌ها:</strong> ${data.requestCount}</p>
        <p><strong>پیشنهادات:</strong> ${data.suggestions}</p>
      `;
      document.getElementById("pageSpeedResults").innerHTML = resultsHtml;
    })
    .catch(error => {
      console.error("خطا در تحلیل سرعت صفحه:", error);
      document.getElementById("pageSpeedResults").innerHTML = "<p>خطا در تحلیل سرعت صفحه. لطفاً دوباره تلاش کنید.</p>";
    });
});
