document.getElementById("analyzeJsCodeButton").addEventListener("click", () => {
  const url = document.getElementById("jsCodeUrlInput").value;
  if (!url) {
    alert("لطفاً یک URL وارد کنید.");
    return;
  }

  // انجام تحلیل کدهای جاوا اسکریپت (مثال)
  fetch(`https://api.example.com/js-code-analyze?url=${encodeURIComponent(url)}`)
    .then(response => response.json())
    .then(data => {
      const resultsHtml = `
        <h3>نتایج تحلیل کدهای جاوا اسکریپت</h3>
        <p><strong>تعداد کدهای ناامن:</strong> ${data.unsafeCodeCount}</p>
        <p><strong>تعداد کدهای غیر بهینه:</strong> ${data.unoptimizedCodeCount}</p>
        <p><strong>پیشنهادات:</strong> ${data.suggestions}</p>
      `;
      document.getElementById("jsCodeResults").innerHTML = resultsHtml;
    })
    .catch(error => {
      console.error("خطا در تحلیل کدهای جاوا اسکریپت:", error);
      document.getElementById("jsCodeResults").innerHTML = "<p>خطا در تحلیل کدهای جاوا اسکریپت. لطفاً دوباره تلاش کنید.</p>";
    });
});
