document.addEventListener("DOMContentLoaded", () => {
  const settingsForm = document.getElementById("settingsForm");

  settingsForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const theme = document.getElementById("theme").value;
    const language = document.getElementById("language").value;
    const dateFormat = document.getElementById("dateFormat").value;

    // ذخیره تنظیمات در localStorage
    localStorage.setItem("theme", theme);
    localStorage.setItem("language", language);
    localStorage.setItem("dateFormat", dateFormat);

    alert("تنظیمات با موفقیت ذخیره شد.");
  });

  // بارگذاری تنظیمات از localStorage
  const savedTheme = localStorage.getItem("theme");
  const savedLanguage = localStorage.getItem("language");
  const savedDateFormat = localStorage.getItem("dateFormat");

  if (savedTheme) document.getElementById("theme").value = savedTheme;
  if (savedLanguage) document.getElementById("language").value = savedLanguage;
  if (savedDateFormat) document.getElementById("dateFormat").value = savedDateFormat;
});
