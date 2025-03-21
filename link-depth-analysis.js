document.getElementById("analyzeLinkDepthButton").addEventListener("click", () => {
  const url = document.getElementById("linkDepthUrlInput").value;
  if (!url) {
    alert("لطفاً یک URL وارد کنید.");
    return;
  }

  // انجام تحلیل عمق لینک‌ها (مثال)
  fetch(`https://api.example.com/link-depth-analyze?url=${encodeURIComponent(url)}`)
    .then(response => response.json())
    .then(data => {
      const resultsHtml = `
        <h3>نتایج تحلیل عمق لینک‌ها</h3>
        <p><strong>تعداد لینک‌های داخلی:</strong> ${data.internalLinks}</p>
        <p><strong>تعداد لینک‌های خارجی:</strong> ${data.externalLinks}</p>
        <p><strong>عمق لینک‌ها:</strong> ${data.linkDepth}</p>
      `;
      document.getElementById("linkDepthResults").innerHTML = resultsHtml;
    })
    .catch(error => {
      console.error("خطا در تحلیل عمق لینک‌ها:", error);
      document.getElementById("linkDepthResults").innerHTML = "<p>خطا در تحلیل عمق لینک‌ها. لطفاً دوباره تلاش کنید.</p>";
    });
});
