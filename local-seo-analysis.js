document.getElementById("analyzeLocalSeoButton").addEventListener("click", () => {
  const url = document.getElementById("localSeoUrlInput").value;
  if (!url) {
    alert("لطفاً یک URL وارد کنید.");
    return;
  }

  // انجام بررسی بهینه‌سازی برای موتورهای جستجوی محلی (مثال)
  fetch(`https://api.example.com/local-seo-analyze?url=${encodeURIComponent(url)}`)
    .then(response => response.json())
    .then(data => {
      const resultsHtml = `
        <h3>نتایج بررسی بهینه‌سازی برای موتورهای جستجوی محلی</h3>
        <p><strong>امتیاز جستجوی محلی:</strong> ${data.localSeoScore}</p>
        <p><strong>تعداد مشکلات جستجوی محلی:</strong> ${data.issueCount}</p>
        <p><strong>پیشنهادات:</strong> ${data.suggestions}</p>
      `;
      document.getElementById("localSeoResults").innerHTML = resultsHtml;
    })
    .catch(error => {
      console.error("خطا در بررسی بهینه‌سازی برای موتورهای جستجوی محلی:", error);
      document.getElementById("localSeoResults").innerHTML = "<p>خطا در بررسی بهینه‌سازی برای موتورهای جستجوی محلی. لطفاً دوباره تلاش کنید.</p>";
    });
});
