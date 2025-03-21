document.getElementById("analyzeSpeedButton").addEventListener("click", () => {
  const url = document.getElementById("speedUrlInput").value;
  if (!url) {
    alert("لطفاً یک URL وارد کنید.");
    return;
  }

  // انجام تحلیل سرعت بارگذاری (مثال)
  fetch(`https://api.example.com/speed-analyze?url=${encodeURIComponent(url)}`)
    .then(response => response.json())
    .then(data => {
      const resultsHtml = `
        <h3>نتایج تحلیل سرعت بارگذاری</h3>
        <p><strong>زمان بارگذاری:</strong> ${data.loadTime} ثانیه</p>
        <p><strong>اندازه صفحه:</strong> ${data.pageSize} کیلوبایت</p>
        <p><strong>تعداد درخواست‌ها:</strong> ${data.requestCount}</p>
      `;
      document.getElementById("speedResults").innerHTML = resultsHtml;
    })
    .catch(error => {
      console.error("خطا در تحلیل سرعت بارگذاری:", error);
      document.getElementById("speedResults").innerHTML = "<p>خطا در تحلیل سرعت بارگذاری. لطفاً دوباره تلاش کنید.</p>";
    });
});
