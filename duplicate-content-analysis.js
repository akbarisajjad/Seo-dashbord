document.getElementById("analyzeDuplicateContentButton").addEventListener("click", () => {
  const url = document.getElementById("duplicateContentUrlInput").value;
  if (!url) {
    alert("لطفاً یک URL وارد کنید.");
    return;
  }

  // انجام تحلیل محتوای تکراری (مثال)
  fetch(`https://api.example.com/duplicate-content-analyze?url=${encodeURIComponent(url)}`)
    .then(response => response.json())
    .then(data => {
      const resultsHtml = `
        <h3>نتایج تحلیل محتوای تکراری</h3>
        <p><strong>تعداد محتوای تکراری:</strong> ${data.duplicateCount}</p>
        <p><strong>تعداد صفحات تکراری:</strong> ${data.duplicatePages}</p>
        <p><strong>پیشنهادات:</strong> ${data.suggestions}</p>
      `;
      document.getElementById("duplicateContentResults").innerHTML = resultsHtml;
    })
    .catch(error => {
      console.error("خطا در تحلیل محتوای تکراری:", error);
      document.getElementById("duplicateContentResults").innerHTML = "<p>خطا در تحلیل محتوای تکراری. لطفاً دوباره تلاش کنید.</p>";
    });
});
