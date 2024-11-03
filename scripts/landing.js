window.onload = function() {
    alert("Ласкаво просимо на сайт PizzaOnline!");
};

function showLoginPopup() {
    document.getElementById("popupOverlay").style.display = "block";
    document.getElementById("loginPopup").style.display = "block";
}

function closeLoginPopup() {
    document.getElementById("popupOverlay").style.display = "none";
    document.getElementById("loginPopup").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function() {
    const orderButtons = document.querySelectorAll(".order-button");
    orderButtons.forEach(button => {
        button.addEventListener("click", showLoginPopup);
    });
});
