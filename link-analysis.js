document.getElementById("analyzeLinkButton").addEventListener("click", () => {
  const url = document.getElementById("linkUrlInput").value;
  if (!url) {
    alert("لطفاً یک URL وارد کنید.");
    return;
  }

  // انجام تحلیل لینک‌ها (مثال)
  fetch(`https://api.example.com/link-analyze?url=${encodeURIComponent(url)}`)
    .then(response => response.json())
    .then(data => {
      const resultsHtml = `
        <h3>نتایج تحلیل لینک‌ها</h3>
        <p><strong>تعداد لینک‌های داخلی:</strong> ${data.internalLinks}</p>
        <p><strong>تعداد لینک‌های خارجی:</strong> ${data.externalLinks}</p>
        <p><strong>تعداد لینک‌های خراب:</strong> ${data.brokenLinks}</p>
      `;
      document.getElementById("linkResults").innerHTML = resultsHtml;
    })
    .catch(error => {
      console.error("خطا در تحلیل لینک‌ها:", error);
      document.getElementById("linkResults").innerHTML = "<p>خطا در تحلیل لینک‌ها. لطفاً دوباره تلاش کنید.</p>";
    });
});
