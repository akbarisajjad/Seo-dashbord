// لودر اولیه
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").classList.remove("active");
  }, 800);
});

// دارک مود
const themeToggle = document.getElementById("themeToggle");
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
  document.body.classList.add("theme-dark");
} else {
  document.body.classList.remove("theme-dark");
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("theme-dark");
  const theme = document.body.classList.contains("theme-dark") ? "dark" : "light";
  localStorage.setItem("theme", theme);
});

// سایدبار واکنش‌گرا
const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");

menuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("visible");
  sidebar.classList.toggle("hidden");
});

// تب‌های SPA-Style
const tabs = document.querySelectorAll(".tab");
const links = document.querySelectorAll("[data-tab]");

links.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    tabs.forEach(tab => tab.classList.remove("active"));
    document.getElementById(targetId).classList.add("active");
    if (window.innerWidth <= 768) {
      sidebar.classList.remove("visible");
      sidebar.classList.add("hidden");
    }
  });
});

// نوتیفیکیشن
const notifBtn = document.getElementById("notificationsBtn");
const notifPanel = document.getElementById("notifications");

notifBtn.addEventListener("click", () => {
  notifPanel.classList.toggle("active");
});

// جستجو در منو
const menuSearch = document.getElementById("menuSearch");
const menuItems = document.querySelectorAll("#menuList li");

menuSearch.addEventListener("input", () => {
  const value = menuSearch.value.toLowerCase();
  menuItems.forEach(item => {
    const text = item.textContent.toLowerCase();
    item.style.display = text.includes(value) ? "block" : "none";
  });
});

// افزودن وظیفه
const addTaskButton = document.getElementById("addTaskButton");
const tasksContainer = document.getElementById("tasks");

if (addTaskButton) {
  addTaskButton.addEventListener("click", () => {
    const task = document.createElement("div");
    task.className = "task";
    task.innerHTML = `
      <input type="text" placeholder="عنوان وظیفه..." />
      <select>
        <option value="low">کم</option>
        <option value="medium">متوسط</option>
        <option value="high">زیاد</option>
      </select>
      <input type="date" />
      <button class="btn">ذخیره</button>
    `;
    tasksContainer.appendChild(task);
  });
}
