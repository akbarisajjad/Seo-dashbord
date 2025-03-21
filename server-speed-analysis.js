document.getElementById("analyzeServerButton").addEventListener("click", () => {
  const url = document.getElementById("serverUrlInput").value;
  if (!url) {
    alert("لطفاً یک URL وارد کنید.");
    return;
  }

  // انجام تحلیل سرعت سرور (مثال)
  fetch(`https://api.example.com/server-speed-analyze?url=${encodeURIComponent(url)}`)
    .then(response => response.json())
    .then(data => {
      const resultsHtml = `
        <h3>نتایج تحلیل سرعت سرور</h3>
        <p><strong>زمان پاسخگویی:</strong> ${data.responseTime} میلی‌ثانیه</p>
        <p><strong>تعداد درخواست‌ها:</strong> ${data.requestCount}</p>
        <p><strong>پیشنهادات:</strong> ${data.suggestions}</p>
      `;
      document.getElementById("serverResults").innerHTML = resultsHtml;
    })
    .catch(error => {
      console.error("خطا در تحلیل سرعت سرور:", error);
      document.getElementById("serverResults").innerHTML = "<p>خطا در تحلیل سرعت سرور. لطفاً دوباره تلاش کنید.</p>";
    });
});
