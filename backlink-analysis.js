document.getElementById("analyzeBacklinkButton").addEventListener("click", () => {
  const url = document.getElementById("backlinkUrlInput").value;
  if (!url) {
    alert("لطفاً یک URL وارد کنید.");
    return;
  }

  // انجام تحلیل بک‌لینک‌ها (مثال)
  fetch(`https://api.example.com/backlink-analyze?url=${encodeURIComponent(url)}`)
    .then(response => response.json())
    .then(data => {
      const resultsHtml = `
        <h3>نتایج تحلیل بک‌لینک‌ها</h3>
        <p><strong>تعداد بک‌لینک‌ها:</strong> ${data.backlinkCount}</p>
        <p><strong>تعداد بک‌لینک‌های با کیفیت:</strong> ${data.qualityBacklinks}</p>
        <p><strong>تعداد بک‌لینک‌های خراب:</strong> ${data.brokenBacklinks}</p>
      `;
      document.getElementById("backlinkResults").innerHTML = resultsHtml;
    })
    .catch(error => {
      console.error("خطا در تحلیل بک‌لینک‌ها:", error);
      document.getElementById("backlinkResults").innerHTML = "<p>خطا در تحلیل بک‌لینک‌ها. لطفاً دوباره تلاش کنید.</p>";
    });
});
