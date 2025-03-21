document.getElementById("analyzeFrameButton").addEventListener("click", () => {
  const url = document.getElementById("frameUrlInput").value;
  if (!url) {
    alert("لطفاً یک URL وارد کنید.");
    return;
  }

  // انجام بررسی استفاده از فریم‌ها (مثال)
  fetch(`https://api.example.com/frame-usage-analyze?url=${encodeURIComponent(url)}`)
    .then(response => response.json())
    .then(data => {
      const resultsHtml = `
        <h3>نتایج بررسی استفاده از فریم‌ها</h3>
        <p><strong>تعداد فریم‌ها:</strong> ${data.frameCount}</p>
        <p><strong>تعداد فریم‌های ناامن:</strong> ${data.unsafeFrameCount}</p>
        <p><strong>پیشنهادات:</strong> ${data.suggestions}</p>
      `;
      document.getElementById("frameResults").innerHTML = resultsHtml;
    })
    .catch(error => {
      console.error("خطا در بررسی استفاده از فریم‌ها:", error);
      document.getElementById("frameResults").innerHTML = "<p>خطا در بررسی استفاده از فریم‌ها. لطفاً دوباره تلاش کنید.</p>";
    });
});
