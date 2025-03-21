document.getElementById("analyzeStructureButton").addEventListener("click", () => {
  const url = document.getElementById("structureUrlInput").value;
  if (!url) {
    alert("لطفاً یک URL وارد کنید.");
    return;
  }

  // انجام تحلیل ساختار سایت (مثال)
  fetch(`https://api.example.com/structure-analyze?url=${encodeURIComponent(url)}`)
    .then(response => response.json())
    .then(data => {
      const resultsHtml = `
        <h3>نتایج تحلیل ساختار سایت</h3>
        <p><strong>تعداد صفحات:</strong> ${data.pageCount}</p>
        <p><strong>تعداد لینک‌ها:</strong> ${data.linkCount}</p>
        <p><strong>عمق سایت:</strong> ${data.siteDepth}</p>
      `;
      document.getElementById("structureResults").innerHTML = resultsHtml;
    })
    .catch(error => {
      console.error("خطا در تحلیل ساختار سایت:", error);
      document.getElementById("structureResults").innerHTML = "<p>خطا در تحلیل ساختار سایت. لطفاً دوباره تلاش کنید.</p>";
    });
});
