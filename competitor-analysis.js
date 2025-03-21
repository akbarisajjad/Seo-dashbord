document.getElementById("analyzeCompetitorButton").addEventListener("click", () => {
  const url = document.getElementById("competitorUrlInput").value;
  if (!url) {
    alert("لطفاً یک URL وارد کنید.");
    return;
  }

  // انجام تحلیل رقبا (مثال)
  fetch(`https://api.example.com/competitor-analyze?url=${encodeURIComponent(url)}`)
    .then(response => response.json())
    .then(data => {
      const resultsHtml = `
        <h3>نتایج تحلیل رقبا</h3>
        <p><strong>تعداد بک‌لینک‌ها:</strong> ${data.backlinks}</p>
        <p><strong>تعداد کلمات کلیدی:</strong> ${data.keywords}</p>
        <p><strong>تعداد بازدیدها:</strong> ${data.visits}</p>
      `;
      document.getElementById("competitorResults").innerHTML = resultsHtml;
    })
    .catch(error => {
      console.error("خطا در تحلیل رقبا:", error);
      document.getElementById("competitorResults").innerHTML = "<p>خطا در تحلیل رقبا. لطفاً دوباره تلاش کنید.</p>";
    });
});
