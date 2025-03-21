document.getElementById("analyzeOnPageButton").addEventListener("click", () => {
  const url = document.getElementById("urlInput").value;
  if (!url) {
    alert("لطفاً یک URL وارد کنید.");
    return;
  }

  // انجام تحلیل سئو داخلی (مثال)
  fetch(`https://api.example.com/analyze?url=${encodeURIComponent(url)}`)
    .then(response => response.json())
    .then(data => {
      const resultsHtml = `
        <h3>نتایج تحلیل سئو داخلی</h3>
        <p><strong>عنوان:</strong> ${data.title}</p>
        <p><strong>توضیحات:</strong> ${data.description}</p>
        <p><strong>کلمات کلیدی:</strong> ${data.keywords.join(, )}</p>
        <p><strong>سرعت بارگذاری:</strong> ${data.loadTime} ثانیه</p>
      `;
      document.getElementById("onPageResults").innerHTML = resultsHtml;
    })
    .catch(error => {
      console.error("خطا در تحلیل سئو داخلی:", error);
      document.getElementById("onPageResults").innerHTML = "<p>خطا در تحلیل سئو داخلی. لطفاً دوباره تلاش کنید.</p>";
    });
});
