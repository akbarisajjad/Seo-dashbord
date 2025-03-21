document.getElementById("analyzeHtmlButton").addEventListener("click", () => {
  const url = document.getElementById("htmlUrlInput").value;
  if (!url) {
    alert("لطفاً یک URL وارد کنید.");
    return;
  }

  // انجام بررسی اعتبارسنجی HTML (مثال)
  fetch(`https://api.example.com/html-validation-analyze?url=${encodeURIComponent(url)}`)
    .then(response => response.json())
    .then(data => {
      const resultsHtml = `
        <h3>نتایج بررسی اعتبارسنجی HTML</h3>
        <p><strong>تعداد خطاها:</strong> ${data.errorCount}</p>
        <p><strong>تعداد هشدارها:</strong> ${data.warningCount}</p>
        <p><strong>پیشنهادات:</strong> ${data.suggestions}</p>
      `;
      document.getElementById("htmlResults").innerHTML = resultsHtml;
    })
    .catch(error => {
      console.error("خطا در بررسی اعتبارسنجی HTML:", error);
      document.getElementById("htmlResults").innerHTML = "<p>خطا در بررسی اعتبارسنجی HTML. لطفاً دوباره تلاش کنید.</p>";
    });
});
