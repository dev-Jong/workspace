document.addEventListener("DOMContentLoaded", function(){
  // top btn event
  $("#top a").click(function(){
    gsap.to(window, {
      scrollTo: {
        y: 0,
        ease:"power2.inOut",
      },
    });
  });

  if ($(window).scrollTop() > $("#about").offset().top) {
    gsap.to($("#top"), {
      opacity: 1,
      zIndex: 5
    });
  } else {
    gsap.to($("#top"), {
      opacity: 0,
    }).then({
      zIndex: -1
    });
  }

  $(window).on("scroll", function(){
    if ($(window).scrollTop() > $("#about").offset().top) {
      gsap.to($("#top"), {
        opacity: 1,
        zIndex: 5
      });
    } else {
      gsap.to($("#top"), {
        opacity: 0,
      }).then({
        zIndex: -1
      });
    }
  })

  // mobile depth
  $(".mo-menu").on("click", function(){
    $("html, body").css({
      overflow: "hidden",
    });
    $(".mo-gnb .depth-inner").css({
      right: 0,
    });
  });
  $(".mo-close").on("click", function(){
    $("html, body").css({
      overflow: "auto",
    });
    $(".mo-gnb .depth-inner").css({
      right: "-100%",
    });
  });
  $(".mo-gnb .depth-list a").on("click", function(){
    $("html, body").css({
      overflow: "auto",
    });
    $(".mo-gnb .depth-inner").css({
      right: "-100%",
    });
  });

  // gnb event  
  const pcGnb = document.querySelectorAll(".pc-gnb .depth-list a");
  const moGnb = document.querySelectorAll(".mo-gnb .depth-list a");
  const divList = document.querySelectorAll("#content > div");
  pcGnb.forEach((el, i) => {
    el.addEventListener("click", function() {
      gsap.to(window, {
        scrollTo: {
          y: $(divList).eq(i),
          ease:"power2.inOut",
        },
      });
    });
  });

  // resize event
  $(window).on("resize", function(){
    if (window.innerWidth > 1000) {
      $("html, body").css({
        overflow: "auto",
      });
      $(".mo-gnb .depth-inner").css({
        right: "-100%",
      });
    }
  });


  // scroll event  
  gsap.to("#header", {
    top: 0,
    opacity: 1,
    duration: 1.5,
  });
  gsap.to($(pcGnb).eq(0), {
    scrollTrigger: {
      trigger: "#play",
      start: "top 50%",
      end: "bottom 50%",
      onEnter() {
        $(pcGnb).eq(0).addClass('active');
        $(moGnb).eq(0).addClass('active');
      },
      onLeave() {
        $(pcGnb).eq(0).removeClass('active');
        $(moGnb).eq(0).removeClass('active');
      },
      onEnterBack() {
        $(pcGnb).eq(0).addClass('active');
        $(moGnb).eq(0).addClass('active');
      },
      onLeaveBack() {
        $(pcGnb).eq(0).removeClass('active');
        $(moGnb).eq(0).removeClass('active');
      }
    }
  });
  gsap.to($(pcGnb).eq(1), {
    scrollTrigger: {
      trigger: "#about",
      start: "top 50%",
      end: "bottom 50%",
      onEnter() {
        $(pcGnb).eq(1).addClass('active');
        $(moGnb).eq(1).addClass('active');
      },
      onLeave() {
        $(pcGnb).eq(1).removeClass('active');
        $(moGnb).eq(1).removeClass('active');
      },
      onEnterBack() {
        $(pcGnb).eq(1).addClass('active');
        $(moGnb).eq(1).addClass('active');
      },
      onLeaveBack() {
        $(pcGnb).eq(1).removeClass('active');
        $(moGnb).eq(1).removeClass('active');
      }
    }
  });
  gsap.to($(pcGnb).eq(2), {
    scrollTrigger: {
      trigger: "#experience",
      start: "top 50%",
      end: "bottom 50%",
      onEnter() {
        $(pcGnb).eq(2).addClass('active');
        $(moGnb).eq(2).addClass('active');
      },
      onLeave() {
        $(pcGnb).eq(2).removeClass('active');
        $(moGnb).eq(2).removeClass('active');
      },
      onEnterBack() {
        $(pcGnb).eq(2).addClass('active');
        $(moGnb).eq(2).addClass('active');
      },
      onLeaveBack() {
        $(pcGnb).eq(2).removeClass('active');
        $(moGnb).eq(2).removeClass('active');
      }
    }
  });
  gsap.to($(pcGnb).eq(3), {
    scrollTrigger: {
      trigger: "#work",
      start: "top 50%",
      end: "bottom 50%",
      onEnter() {
        $(pcGnb).eq(3).addClass('active');
        $(moGnb).eq(3).addClass('active');
      },
      onLeave() {
        $(pcGnb).eq(3).removeClass('active');
        $(moGnb).eq(3).removeClass('active');
      },
      onEnterBack() {
        $(pcGnb).eq(3).addClass('active');
        $(moGnb).eq(3).addClass('active');
      },
      onLeaveBack() {
        $(pcGnb).eq(3).removeClass('active');
        $(moGnb).eq(3).removeClass('active');
      }
    }
  });

  gsap.to("#play dotlottie-player", {
    opacity: 1,
    duration: 1,
  });
  gsap.to("#play .play-text", {
    transform: "translateX(0)",
    opacity: 1,
    duration: 1,
    delay: 0.5,
  });
  gsap.to("#play .play-desc", {
    transform: "translateX(0)",
    opacity: 1,
    duration: 1,
    delay: 0.8,
  });
  gsap.to(".about-title", {
    scrollTrigger: {
      trigger: ".about-title",
      start: "20% 70%",
      end: "20% 70%",
    },
    opacity: 1,
    transform: "translateY(0)"
  });
  gsap.to(".about-img", {
    scrollTrigger: {
      trigger: ".about-cont",
      start: "30% 70%",
      end: "30% 70%",
    },
    opacity: 1,
    transform: "translateX(0)"
  });
  gsap.to(".work-title", {
    scrollTrigger: {
      trigger: ".work-title",
      start: "bottom 80%",
      end: "bottom 80%",
    },
    opacity: 1,
    transform: "translateX(0)"
  });

  const aboutTexts = document.querySelectorAll(".about-text > p");
  const experienceTitles = document.querySelectorAll(".experience-title");
  const experienceList = document.querySelectorAll(".experience-list");
  const workList = document.querySelectorAll(".work-list");
  const workItems = document.querySelectorAll(".lists-items");
  aboutTexts.forEach(el => {
    gsap.to(el, {
      scrollTrigger: {
        trigger: el,
        start: "20% 80%",
        end: "20% 80%",
      },
      opacity: 1,
      transform: "translateY(0)"
    })
  });
  experienceTitles.forEach((el, i) => {
    gsap.to(el, {
      scrollTrigger: {
        trigger: el,
        start: "bottom bottom",
        end: "bottom bottom",
      },
      opacity: 1,
      delay: "0."+(i*3),
      transform: "translateX(0)"
    })
  });
  experienceList.forEach((el, i) => {
    gsap.to(el, {
      scrollTrigger: {
        trigger: el,
        start: "bottom bottom",
        end: "bottom bottom",

      },
      opacity: 1,
      delay: "0."+(i*3),
      transform: "translateY(0)"
    })
  });
  workList.forEach(el => {
    gsap.to(el, {
      scrollTrigger: {
        trigger: el,
        start: "bottom 90%",
        end: "bottom 90%",

      },
      opacity: 1,
      transform: "translateY(0)"
    })
  });
  workItems.forEach(el => {
    gsap.to(el, {
      scrollTrigger: {
        trigger: el,
        start: "bottom bottom",
        end: "bottom bottom"
      },
      opacity: 1,
      transform: "translateY(0)"
    })
  })
});                           