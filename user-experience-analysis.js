document.getElementById("analyzeUxButton").addEventListener("click", () => {
  const url = document.getElementById("uxUrlInput").value;
  if (!url) {
    alert("لطفاً یک URL وارد کنید.");
    return;
  }

  // انجام تحلیل تجربه کاربری (مثال)
  fetch(`https://api.example.com/ux-analyze?url=${encodeURIComponent(url)}`)
    .then(response => response.json())
    .then(data => {
      const resultsHtml = `
        <h3>نتایج تحلیل تجربه کاربری</h3>
        <p><strong>امتیاز تجربه کاربری:</strong> ${data.uxScore}</p>
        <p><strong>تعداد مشکلات UX:</strong> ${data.issueCount}</p>
        <p><strong>پیشنهادات:</strong> ${data.suggestions}</p>
      `;
      document.getElementById("uxResults").innerHTML = resultsHtml;
    })
    .catch(error => {
      console.error("خطا در تحلیل تجربه کاربری:", error);
      document.getElementById("uxResults").innerHTML = "<p>خطا در تحلیل تجربه کاربری. لطفاً دوباره تلاش کنید.</p>";
    });
});
