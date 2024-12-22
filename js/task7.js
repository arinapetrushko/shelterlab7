let lastScrollTop = 0;
let stickyElement = document.getElementById("stickyElement");
let stickyOffset = stickyElement.offsetTop;
let isFixed = false;

window.onscroll = function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop && !isFixed) {
        // Прокрутка вниз
        stickyElement.classList.add("fixed");
        isFixed = true;
    } else if (currentScroll < lastScrollTop && isFixed) {
        // Прокрутка вверх
        if (currentScroll <= stickyOffset) {
            // Если достигли прежнего места
            stickyElement.classList.remove("fixed");
            isFixed = false;
        }
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Для мобильных устройств
};
