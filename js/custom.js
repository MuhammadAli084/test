var scroll_pos = 0;
$(document).scroll(function() {
    // Header sec js start
    scroll_pos = $(this).scrollTop();
    if (scroll_pos > 750) {
        $('header').addClass('fixed');
    } else {
        $('header').removeClass('fixed');
    }

    // full page scroll js start
    // $('#fullpage').fullpage({
    //     //options here
    //     autoScrolling: true,
    //     scrollHorizontally: true,
    //     scrollingSpeed: 2000
    // });
    // full page scroll js end

});

gsap.registerPlugin(ScrollTrigger)

gsap.timeline({
        scrollTrigger: {
            trigger: ".btf-row1",
            // pinReparent: true,
            start: "top 80%",
            end: "bottom top",
            // markers: true,
            scrub: true,
            toggleActions: "restart pause resume reverse",
            ease: "power20",
            duration: 1,
        }
    })
    .fromTo(".title-row", 1, { yPercent: 300, opacity: 1, }, { yPercent: 0, opacity: 1, rotateZ: 0 })
    .fromTo(".charge-card", 1, { yPercent: -100, opacity: 0 }, { yPercent: 0, opacity: 1, rotateZ: 0 })
gsap.timeline({
        scrollTrigger: {
            trigger: ".charge-detail",
            start: "top 300px",
            end: "6000 50%",
            // markers: true,
            toggleActions: "restart pause resume reverse",
            pin: true,
            scrub: true,
            pinSpacing: false,
            ease: "power20",
            duration: 1,
        }
    })
    // .fromTo(".btf-row2", 1, { yPercent: 0, opacity: 1 }, { yPercent: -180, opacity: 1, rotateZ: 0 })
gsap.timeline({
    scrollTrigger: {
        trigger: ".btf-row2",
        start: "top 0",
        end: "70% 0",
        // markers: true,
        toggleActions: "restart pause resume reverse",
        pin: ".btf-row2",
        ease: "power20",
        duration: 1,
    }
})
gsap.timeline({
        scrollTrigger: {
            trigger: ".btf-row2",
            start: "top 30%",
            end: "70% 0",
            // markers: true,
            scrub: 1,
            toggleActions: "restart pause resume reverse",
            ease: "power20",
            duration: 1,
        }
    })
    .fromTo(".port1", 1, { opacity: 0, stagger: 0 }, { opacity: 1, stagger: 1 })
    .fromTo(".port2", 1, { opacity: 0, stagger: 0 }, { opacity: 1, stagger: 1 })
    .fromTo(".cable1", 1, { xPercent: -10, opacity: 0, }, { xPercent: 0, opacity: 1 })
    .fromTo(".cable2", 1, { xPercent: 10, opacity: 0, }, { xPercent: 0, opacity: 1 })

.fromTo(".port1", 0.5, { opacity: 1, stagger: 1 }, { opacity: 0, stagger: 0 })
    .fromTo(".port2", 0.5, { opacity: 1, stagger: 1 }, { opacity: 0, stagger: 0 })
    .fromTo(".cable1", 0.8, { xPercent: 0, opacity: 1, }, { xPercent: -10, opacity: 0 })
    .fromTo(".cable2", 0.8, { xPercent: 0, opacity: 1, }, { xPercent: 10, opacity: 0 })

gsap.timeline({
        scrollTrigger: {
            trigger: ".btf-row3",
            start: "top 0",
            end: "70% 0",
            markers: true,
            toggleActions: "restart pause resume reverse",
            pin: ".btf-row3",
            scrub: 1,
            ease: "power20",
            duration: 1,
        }
    })
    .fromTo(".front-view", 1, { rotateY: 0, }, { rotateY: 90, })
    .fromTo(".back-view", 1, { rotateY: 90, }, { rotateY: 0, })
    .fromTo(".back-view_inner", 1, { yPercent: -100, opacity: 0, }, { yPercent: 0, opacity: 1 })
    .fromTo(".front-view", 1, { rotateY: 90, }, { rotateY: 0, })
    .fromTo(".back-view", 1, { rotateY: 0, }, { rotateY: 90, })
gsap.timeline({
    scrollTrigger: {
        trigger: ".btf-row4",
        start: "top 0",
        end: "50% 0",
        markers: true,
        toggleActions: "restart pause resume reverse",
        pin: ".btf-row4",
        scrub: 1,
        ease: "power20",
        duration: 1,
    }
})

// const str = " i ma ila"