document.getElementById("analyzeCookieButton").addEventListener("click", () => {
  const url = document.getElementById("cookieUrlInput").value;
  if (!url) {
    alert("لطفاً یک URL وارد کنید.");
    return;
  }

  // انجام بررسی استفاده از کوکی‌ها (مثال)
  fetch(`https://api.example.com/cookie-usage-analyze?url=${encodeURIComponent(url)}`)
    .then(response => response.json())
    .then(data => {
      const resultsHtml = `
        <h3>نتایج بررسی استفاده از کوکی‌ها</h3>
        <p><strong>تعداد کوکی‌ها:</strong> ${data.cookieCount}</p>
        <p><strong>حجم کل کوکی‌ها:</strong> ${data.totalCookieSize} کیلوبایت</p>
        <p><strong>پیشنهادات بهینه‌سازی:</strong> ${data.suggestions}</p>
      `;
      document.getElementById("cookieResults").innerHTML = resultsHtml;
    })
    .catch(error => {
      console.error("خطا در بررسی استفاده از کوکی‌ها:", error);
      document.getElementById("cookieResults").innerHTML = "<p>خطا در بررسی استفاده از کوکی‌ها. لطفاً دوباره تلاش کنید.</p>";
    });
});
