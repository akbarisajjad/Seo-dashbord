document.getElementById("analyzeJsButton").addEventListener("click", () => {
  const url = document.getElementById("jsUrlInput").value;
  if (!url) {
    alert("لطفاً یک URL وارد کنید.");
    return;
  }

  // انجام تحلیل سرعت لود جاوا اسکریپت (مثال)
  fetch(`https://api.example.com/js-load-speed-analyze?url=${encodeURIComponent(url)}`)
    .then(response => response.json())
    .then(data => {
      const resultsHtml = `
        <h3>نتایج تحلیل سرعت لود جاوا اسکریپت</h3>
        <p><strong>زمان بارگذاری جاوا اسکریپت:</strong> ${data.loadTime} میلی‌ثانیه</p>
        <p><strong>حجم جاوا اسکریپت:</strong> ${data.size} کیلوبایت</p>
        <p><strong>تعداد فایل‌های جاوا اسکریپت:</strong> ${data.fileCount}</p>
      `;
      document.getElementById("jsResults").innerHTML = resultsHtml;
    })
    .catch(error => {
      console.error("خطا در تحلیل سرعت لود جاوا اسکریپت:", error);
      document.getElementById("jsResults").innerHTML = "<p>خطا در تحلیل سرعت لود جاوا اسکریپت. لطفاً دوباره تلاش کنید.</p>";
    });
});
