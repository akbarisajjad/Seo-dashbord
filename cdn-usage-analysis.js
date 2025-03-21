document.getElementById("analyzeCdnUsageButton").addEventListener("click", () => {
  const url = document.getElementById("cdnUsageUrlInput").value;
  if (!url) {
    alert("لطفاً یک URL وارد کنید.");
    return;
  }

  // انجام تحلیل استفاده از CDN (مثال)
  fetch(`https://api.example.com/cdn-usage-analyze?url=${encodeURIComponent(url)}`)
    .then(response => response.json())
    .then(data => {
      const resultsHtml = `
        <h3>نتایج تحلیل استفاده از CDN</h3>
        <p><strong>تعداد درخواست‌های CDN:</strong> ${data.cdnRequestCount}</p>
        <p><strong>حجم کل داده‌های CDN:</strong> ${data.totalCdnData} کیلوبایت</p>
        <p><strong>پیشنهادات:</strong> ${data.suggestions}</p>
      `;
      document.getElementById("cdnUsageResults").innerHTML = resultsHtml;
    })
    .catch(error => {
      console.error("خطا در تحلیل استفاده از CDN:", error);
      document.getElementById("cdnUsageResults").innerHTML = "<p>خطا در تحلیل استفاده از CDN. لطفاً دوباره تلاش کنید.</p>";
    });
});
