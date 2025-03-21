document.getElementById("analyzeImageButton").addEventListener("click", () => {
  const url = document.getElementById("imageUrlInput").value;
  if (!url) {
    alert("لطفاً یک URL وارد کنید.");
    return;
  }

  // انجام تحلیل تصاویر (مثال)
  fetch(`https://api.example.com/image-analyze?url=${encodeURIComponent(url)}`)
    .then(response => response.json())
    .then(data => {
      const resultsHtml = `
        <h3>نتایج تحلیل تصاویر</h3>
        <p><strong>تعداد تصاویر:</strong> ${data.imageCount}</p>
        <p><strong>تصاویر بدون alt:</strong> ${data.imagesWithoutAlt}</p>
        <p><strong>اندازه متوسط تصاویر:</strong> ${data.averageImageSize} کیلوبایت</p>
      `;
      document.getElementById("imageResults").innerHTML = resultsHtml;
    })
    .catch(error => {
      console.error("خطا در تحلیل تصاویر:", error);
      document.getElementById("imageResults").innerHTML = "<p>خطا در تحلیل تصاویر. لطفاً دوباره تلاش کنید.</p>";
    });
});
