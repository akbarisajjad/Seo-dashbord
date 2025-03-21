document.getElementById("analyzeMediaButton").addEventListener("click", () => {
  const url = document.getElementById("mediaUrlInput").value;
  if (!url) {
    alert("لطفاً یک URL وارد کنید.");
    return;
  }

  // انجام بررسی محتوای رسانه‌ای (مثال)
  fetch(`https://api.example.com/media-content-analyze?url=${encodeURIComponent(url)}`)
    .then(response => response.json())
    .then(data => {
      const resultsHtml = `
        <h3>نتایج بررسی محتوای رسانه‌ای</h3>
        <p><strong>تعداد تصاویر:</strong> ${data.imageCount}</p>
        <p><strong>تعداد ویدئوها:</strong> ${data.videoCount}</p>
        <p><strong>حجم کل رسانه‌ها:</strong> ${data.totalSize} کیلوبایت</p>
      `;
      document.getElementById("mediaResults").innerHTML = resultsHtml;
    })
    .catch(error => {
      console.error("خطا در بررسی محتوای رسانه‌ای:", error);
      document.getElementById("mediaResults").innerHTML = "<p>خطا در بررسی محتوای رسانه‌ای. لطفاً دوباره تلاش کنید.</p>";
    });
});
