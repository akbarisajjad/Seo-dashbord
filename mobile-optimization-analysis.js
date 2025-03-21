document.getElementById("analyzeMobileButton").addEventListener("click", () => {
  const url = document.getElementById("mobileUrlInput").value;
  if (!url) {
    alert("لطفاً یک URL وارد کنید.");
    return;
  }

  // انجام بررسی بهینه‌سازی برای موبایل (مثال)
  fetch(`https://api.example.com/mobile-optimize-analyze?url=${encodeURIComponent(url)}`)
    .then(response => response.json())
    .then(data => {
      const resultsHtml = `
        <h3>نتایج بررسی بهینه‌سازی برای موبایل</h3>
        <p><strong>امتیاز بهینه‌سازی:</strong> ${data.optimizationScore}</p>
        <p><strong>تعداد مشکلات:</strong> ${data.issueCount}</p>
        <p><strong>پیشنهادات:</strong> ${data.suggestions}</p>
      `;
      document.getElementById("mobileResults").innerHTML = resultsHtml;
    })
    .catch(error => {
      console.error("خطا در بررسی بهینه‌سازی برای موبایل:", error);
      document.getElementById("mobileResults").innerHTML = "<p>خطا در بررسی بهینه‌سازی برای موبایل. لطفاً دوباره تلاش کنید.</p>";
    });
});
