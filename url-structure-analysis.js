document.getElementById("analyzeUrlButton").addEventListener("click", () => {
  const url = document.getElementById("urlInput").value;
  if (!url) {
    alert("لطفاً یک URL وارد کنید.");
    return;
  }

  // انجام بررسی ساختار URL (مثال)
  fetch(`https://api.example.com/url-structure-analyze?url=${encodeURIComponent(url)}`)
    .then(response => response.json())
    .then(data => {
      const resultsHtml = `
        <h3>نتایج بررسی ساختار URL</h3>
        <p><strong>طول URL:</strong> ${data.urlLength}</p>
        <p><strong>تعداد پارامترها:</strong> ${data.parameterCount}</p>
        <p><strong>پیشنهادات:</strong> ${data.suggestions}</p>
      `;
      document.getElementById("urlResults").innerHTML = resultsHtml;
    })
    .catch(error => {
      console.error("خطا در بررسی ساختار URL:", error);
      document.getElementById("urlResults").innerHTML = "<p>خطا در بررسی ساختار URL. لطفاً دوباره تلاش کنید.</p>";
    });
});
