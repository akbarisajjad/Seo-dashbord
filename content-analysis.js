document.getElementById("analyzeContentButton").addEventListener("click", () => {
  const url = document.getElementById("contentUrlInput").value;
  if (!url) {
    alert("لطفاً یک URL وارد کنید.");
    return;
  }

  // انجام تحلیل محتوا (مثال)
  fetch(`https://api.example.com/content-analyze?url=${encodeURIComponent(url)}`)
    .then(response => response.json())
    .then(data => {
      const resultsHtml = `
        <h3>نتایج تحلیل محتوا</h3>
        <p><strong>تعداد کلمات:</strong> ${data.wordCount}</p>
        <p><strong>تعداد تصاویر:</strong> ${data.imageCount}</p>
        <p><strong>تعداد لینک‌ها:</strong> ${data.linkCount}</p>
      `;
      document.getElementById("contentResults").innerHTML = resultsHtml;
    })
    .catch(error => {
      console.error("خطا در تحلیل محتوا:", error);
      document.getElementById("contentResults").innerHTML = "<p>خطا در تحلیل محتوا. لطفاً دوباره تلاش کنید.</p>";
    });
});
