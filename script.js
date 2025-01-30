document.addEventListener("DOMContentLoaded", function () {
    const scroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });

    // Refresh Locomotive Scroll after loading
    setTimeout(() => {
        scroll.update();
    }, 500);

    // Ensure smooth scrolling when resizing window
    window.addEventListener("resize", () => {
        scroll.update();
    });
});

// GSAP animations
var tl = gsap.timeline();

tl.to("#page1", {
    y: "100vh",
    duration: 0,
    scale: 0.6
});

tl.to("#page1", {
    y: "30vh",
    duration: 0.5,
    delay: 0.5
});

tl.to("#page1", {
    y: "0vh",
    rotate: 360,
    scale: 1,
    duration: 0.8
});
