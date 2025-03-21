document.getElementById("analyzeContentOptimizationButton").addEventListener("click", () => {
  const url = document.getElementById("contentOptimizationUrlInput").value;
  if (!url) {
    alert("لطفاً یک URL وارد کنید.");
    return;
  }

  // انجام تحلیل بهینه‌سازی محتوا (مثال)
  fetch(`https://api.example.com/content-optimization-analyze?url=${encodeURIComponent(url)}`)
    .then(response => response.json())
    .then(data => {
      const resultsHtml = `
        <h3>نتایج تحلیل بهینه‌سازی محتوا</h3>
        <p><strong>تعداد کلمات کلیدی:</strong> ${data.keywordCount}</p>
        <p><strong>تعداد تصاویر بهینه نشده:</strong> ${data.unoptimizedImages}</p>
        <p><strong>پیشنهادات:</strong> ${data.suggestions}</p>
      `;
      document.getElementById("contentOptimizationResults").innerHTML = resultsHtml;
    })
    .catch(error => {
      console.error("خطا در تحلیل بهینه‌سازی محتوا:", error);
      document.getElementById("contentOptimizationResults").innerHTML = "<p>خطا در تحلیل بهینه‌سازی محتوا. لطفاً دوباره تلاش کنید.</p>";
    });
});
