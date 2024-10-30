function showLoginPopup() {
    alert("Щоб зробити замовлення, потрібно увійти в особистий кабінет");
    document.getElementById("popupOverlay").style.display = "block";
    document.getElementById("loginPopup").style.display = "block";
}

// Функція для закриття спливаючого вікна
function closeLoginPopup() {
    document.getElementById("popupOverlay").style.display = "none";
    document.getElementById("loginPopup").style.display = "none";
}