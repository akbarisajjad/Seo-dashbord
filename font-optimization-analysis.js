document.getElementById("analyzeFontButton").addEventListener("click", () => {
  const url = document.getElementById("fontUrlInput").value;
  if (!url) {
    alert("لطفاً یک URL وارد کنید.");
    return;
  }

  // انجام بررسی بهینه‌سازی فونت‌ها (مثال)
  fetch(`https://api.example.com/font-optimization-analyze?url=${encodeURIComponent(url)}`)
    .then(response => response.json())
    .then(data => {
      const resultsHtml = `
        <h3>نتایج بررسی بهینه‌سازی فونت‌ها</h3>
        <p><strong>تعداد فونت‌ها:</strong> ${data.fontCount}</p>
        <p><strong>حجم کل فونت‌ها:</strong> ${data.totalFontSize} کیلوبایت</p>
        <p><strong>پیشنهادات بهینه‌سازی:</strong> ${data.suggestions}</p>
      `;
      document.getElementById("fontResults").innerHTML = resultsHtml;
    })
    .catch(error => {
      console.error("خطا در بررسی بهینه‌سازی فونت‌ها:", error);
      document.getElementById("fontResults").innerHTML = "<p>خطا در بررسی بهینه‌سازی فونت‌ها. لطفاً دوباره تلاش کنید.</p>";
    });
});
