// Показать первую секцию по умолчанию
const sections = document.querySelectorAll("section");
sections[0].style.display = "block";

// Обработчик нажатия на ссылку в навигации
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // отменяем действие по умолчанию для ссылки
    const sectionId = link.getAttribute("href"); // получаем id секции из атрибута href ссылки
    const section = document.querySelector(sectionId); // получаем нужную секцию по id
    sections.forEach((s) => (s.style.display = "none")); // скрываем все секции
    section.style.display = "block"; // показываем нужную секцию
  });
});
