document.getElementById("analyzeMetaButton").addEventListener("click", () => {
  const url = document.getElementById("metaUrlInput").value;
  if (!url) {
    alert("لطفاً یک URL وارد کنید.");
    return;
  }

  // انجام تحلیل متا تگ‌ها (مثال)
  fetch(`https://api.example.com/meta-analyze?url=${encodeURIComponent(url)}`)
    .then(response => response.json())
    .then(data => {
      const resultsHtml = `
        <h3>نتایج تحلیل متا تگ‌ها</h3>
        <p><strong>عنوان صفحه:</strong> ${data.title}</p>
        <p><strong>توضیحات متا:</strong> ${data.metaDescription}</p>
        <p><strong>کلمات کلیدی:</strong> ${data.keywords}</p>
      `;
      document.getElementById("metaResults").innerHTML = resultsHtml;
    })
    .catch(error => {
      console.error("خطا در تحلیل متا تگ‌ها:", error);
      document.getElementById("metaResults").innerHTML = "<p>خطا در تحلیل متا تگ‌ها. لطفاً دوباره تلاش کنید.</p>";
    });
});
