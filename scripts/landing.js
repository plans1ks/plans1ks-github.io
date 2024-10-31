// Приветственное сообщение при загрузке страницы
window.onload = function() {
    alert("Ласкаво просимо на сайт PizzaOnline!");
};

// Функция для отображения окна логина
function showLoginPopup() {
    document.getElementById("popupOverlay").style.display = "block";
    document.getElementById("loginPopup").style.display = "block";
}

// Функция для закрытия окна логина
function closeLoginPopup() {
    document.getElementById("popupOverlay").style.display = "none";
    document.getElementById("loginPopup").style.display = "none";
}

// Добавляем обработчики событий для всех кнопок "Замовити"
document.addEventListener("DOMContentLoaded", function() {
    const orderButtons = document.querySelectorAll(".order-button");
    orderButtons.forEach(button => {
        button.addEventListener("click", showLoginPopup);
    });
});
