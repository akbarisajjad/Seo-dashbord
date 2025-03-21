document.getElementById("analyzeImageOptimizationButton").addEventListener("click", () => {
  const url = document.getElementById("imageOptimizationUrlInput").value;
  if (!url) {
    alert("لطفاً یک URL وارد کنید.");
    return;
  }

  // انجام بررسی بهینه‌سازی تصاویر (مثال)
  fetch(`https://api.example.com/image-optimization-analyze?url=${encodeURIComponent(url)}`)
    .then(response => response.json())
    .then(data => {
      const resultsHtml = `
        <h3>نتایج بررسی بهینه‌سازی تصاویر</h3>
        <p><strong>تعداد تصاویر بهینه نشده:</strong> ${data.unoptimizedImageCount}</p>
        <p><strong>حجم تصاویر بهینه نشده:</strong> ${data.unoptimizedImageSize} کیلوبایت</p>
        <p><strong>پیشنهادات بهینه‌سازی:</strong> ${data.suggestions}</p>
      `;
      document.getElementById("imageOptimizationResults").innerHTML = resultsHtml;
    })
    .catch(error => {
      console.error("خطا در بررسی بهینه‌سازی تصاویر:", error);
      document.getElementById("imageOptimizationResults").innerHTML = "<p>خطا در بررسی بهینه‌سازی تصاویر. لطفاً دوباره تلاش کنید.</p>";
    });
});
