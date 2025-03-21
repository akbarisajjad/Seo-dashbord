document.getElementById("analyzeKeywordButton").addEventListener("click", () => {
  const keyword = document.getElementById("keywordInput").value;
  if (!keyword) {
    alert("لطفاً یک کلمه کلیدی وارد کنید.");
    return;
  }

  // انجام تحلیل کلمات کلیدی (مثال)
  fetch(`https://api.example.com/keyword-analyze?keyword=${encodeURIComponent(keyword)}`)
    .then(response => response.json())
    .then(data => {
      const resultsHtml = `
        <h3>نتایج تحلیل کلمات کلیدی</h3>
        <p><strong>تعداد جستجوها:</strong> ${data.searchVolume}</p>
        <p><strong>رقابت:</strong> ${data.competition}</p>
        <p><strong>کلیک‌ها:</strong> ${data.clicks}</p>
      `;
      document.getElementById("keywordResults").innerHTML = resultsHtml;
    })
    .catch(error => {
      console.error("خطا در تحلیل کلمات کلیدی:", error);
      document.getElementById("keywordResults").innerHTML = "<p>خطا در تحلیل کلمات کلیدی. لطفاً دوباره تلاش کنید.</p>";
    });
});
