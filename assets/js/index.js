document.addEventListener("DOMContentLoaded", function(){
  document.querySelector(".mo-menu .menu-open").addEventListener("click", function(){
    document.querySelector(".mo-menu").classList.add('open');
    document.querySelector(".lnb-container").style.left = "0";
  });
  document.querySelector(".mo-menu .menu-close").addEventListener("click", function(){
    document.querySelector(".mo-menu").classList.remove('open');
    document.querySelector(".lnb-container").style.left = "-100%";
  });

  window.addEventListener("resize", function(){
    if (window.innerWidth < 1000) {
      document.querySelector(".mo-menu").classList.remove('open');
      document.querySelector(".lnb-container").style.left = "-100%";
    } else {
      document.querySelector(".lnb-container").style.left = "0";
    }
  });
});