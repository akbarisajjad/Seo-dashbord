document.addEventListener("DOMContentLoaded", () => {
  console.log("صفحه بارگذاری شد.");

  // افزودن تعاملات و تنظیمات پیشرفته
  const analyzeButtons = document.querySelectorAll("button");

  analyzeButtons.forEach(button => {
    button.addEventListener("click", () => {
      const input = button.previousElementSibling;
      if (input && input.value === "") {
        alert("لطفاً یک URL وارد کنید.");
      } else {
        // انجام عملیات تحلیل (مثال)
        console.log(`تحلیل برای URL: ${input.value}`);
      }
    });
  });
});
