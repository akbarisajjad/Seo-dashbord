document.getElementById("analyzeSeoButton").addEventListener("click", () => {
  const url = document.getElementById("seoUrlInput").value;
  if (!url) {
    alert("لطفاً یک URL وارد کنید.");
    return;
  }

  // انجام بررسی بهینه‌سازی برای موتورهای جستجو (SEO) (مثال)
  fetch(`https://api.example.com/seo-optimize-check?url=${encodeURIComponent(url)}`)
    .then(response => response.json())
    .then(data => {
      const resultsHtml = `
        <h3>نتایج بررسی بهینه‌سازی برای موتورهای جستجو (SEO)</h3>
        <p><strong>امتیاز SEO:</strong> ${data.seoScore}</p>
        <p><strong>تعداد مشکلات SEO:</strong> ${data.issueCount}</p>
        <p><strong>پیشنهادات:</strong> ${data.suggestions}</p>
      `;
      document.getElementById("seoResults").innerHTML = resultsHtml;
    })
    .catch(error => {
      console.error("خطا در بررسی بهینه‌سازی برای موتورهای جستجو (SEO):", error);
      document.getElementById("seoResults").innerHTML = "<p>خطا در بررسی بهینه‌سازی برای موتورهای جستجو (SEO). لطفاً دوباره تلاش کنید.</p>";
    });
});
