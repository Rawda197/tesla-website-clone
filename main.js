const openMenu = () => {
    document.querySelector(".backdrop").classList.add('active');
    document.querySelector("aside").classList.add('active');
}

const closeMenu = () => {
    document.querySelector(".backdrop").classList.remove('active');
    document.querySelector("aside").classList.remove('active');
}

document.getElementById("Menubtn").onclick = e => {
    e.preventDefault();
    openMenu();
}

document.querySelector("aside button").onclick = e => {
    closeMenu();
}

// اضافة مستمع حدث للنقر على الوثيقة لتخفي القائمة عند النقر في أي مكان
document.addEventListener('click', function(event) {
    const isClickInsideMenu = document.querySelector("aside").contains(event.target);
    const isClickInsideButton = document.getElementById("Menubtn").contains(event.target);
    const isClickInsideBackdrop = document.querySelector(".backdrop").contains(event.target);
    
    if (!isClickInsideMenu && !isClickInsideButton && !isClickInsideBackdrop) {
        closeMenu();
    }
});
