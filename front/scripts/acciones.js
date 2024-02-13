
    // navbarA COMPORTAMIENTO & BTN NAV
    
    const navOpenBtn = document.querySelector("[data-menu-open-btn]");
    const navCloseBtn = document.querySelector("[data-menu-close-btn]");
    const navbarA = document.querySelector("[data-navbarA]");
    const overlay = document.querySelector("[data-overlay]");
    
    const navElemArr = [navOpenBtn, navCloseBtn, overlay];
    
    for (let i = 0; i < navElemArr.length; i++) {
    
      navElemArr[i].addEventListener("click", function () {
    
        navbarA.classList.toggle("active");
        overlay.classList.toggle("active");
        document.body.classList.toggle("active");
    
      });
    
    }
    
    // HEADER COMPORTAMIENTO SCROLL
    
    const header = document.querySelector("[data-header]");
    
    window.addEventListener("scroll", function () {
    
      window.scrollY >= 10 ? header.classList.add("active") : header.classList.remove("active");
    
    });
    