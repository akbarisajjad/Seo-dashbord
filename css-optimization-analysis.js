document.getElementById("analyzeCssButton").addEventListener("click", () => {
  const url = document.getElementById("cssUrlInput").value;
  if (!url) {
    alert("لطفاً یک URL وارد کنید.");
    return;
  }

  // انجام بررسی بهینه‌سازی فایل‌های CSS (مثال)
  fetch(`https://api.example.com/css-optimization-analyze?url=${encodeURIComponent(url)}`)
    .then(response => response.json())
    .then(data => {
      const resultsHtml = `
        <h3>نتایج بررسی بهینه‌سازی فایل‌های CSS</h3>
        <p><strong>تعداد قوانین بهینه نشده:</strong> ${data.unoptimizedRuleCount}</p>
        <p><strong>حجم فایل‌های بهینه نشده:</strong> ${data.unoptimizedSize} کیلوبایت</p>
        <p><strong>پیشنهادات بهینه‌سازی:</strong> ${data.suggestions}</p>
      `;
      document.getElementById("cssResults").innerHTML = resultsHtml;
    })
    .catch(error => {
      console.error("خطا در بررسی بهینه‌سازی فایل‌های CSS:", error);
      document.getElementById("cssResults").innerHTML = "<p>خطا در بررسی بهینه‌سازی فایل‌های CSS. لطفاً دوباره تلاش کنید.</p>";
    });
});
