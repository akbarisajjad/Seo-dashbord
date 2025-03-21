document.getElementById("analyzeSocialButton").addEventListener("click", () => {
  const url = document.getElementById("socialUrlInput").value;
  if (!url) {
    alert("لطفاً یک URL وارد کنید.");
    return;
  }

  // انجام تحلیل شبکه‌های اجتماعی (مثال)
  fetch(`https://api.example.com/social-media-analyze?url=${encodeURIComponent(url)}`)
    .then(response => response.json())
    .then(data => {
      const resultsHtml = `
        <h3>نتایج تحلیل شبکه‌های اجتماعی</h3>
        <p><strong>تعداد بازدیدها:</strong> ${data.views}</p>
        <p><strong>تعداد لایک‌ها:</strong> ${data.likes}</p>
        <p><strong>تعداد اشتراک‌ها:</strong> ${data.shares}</p>
      `;
      document.getElementById("socialResults").innerHTML = resultsHtml;
    })
    .catch(error => {
      console.error("خطا در تحلیل شبکه‌های اجتماعی:", error);
      document.getElementById("socialResults").innerHTML = "<p>خطا در تحلیل شبکه‌های اجتماعی. لطفاً دوباره تلاش کنید.</p>";
    });
});
