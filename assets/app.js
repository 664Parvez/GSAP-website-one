var tl = gsap.timeline()


/*gsap.from("#hero h5, #hero h1, #hero p", {
    stagger: 0.6
})*/

tl
    .from("#hero h1", {
        opacity: 0,
        duration: 1,
        scale: 1.5
    })
    .from("#hero h5", {
        opacity: 0,
        duration: .5,
        x: 100
    })
    .from("#hero p", {
        opacity: 0,
        x: -100,
        duraion: .5
    })
    .from("#hero .btn", {
        opacity: 0,
        y: 100,
        duration: 1
    })

gsap.from("#second_section h2", {
    scrollTrigger: {
        trigger: "#second_section",
        scroller: "body",
        markers: false,
        start: "top 60%",
        end: "bottom 90%",
        scrub: 5
    },
    opacity: 0,
    y: 50,
    duration: 1
})


    gsap.from("#second_section img", {
        scrollTrigger: {
            trigger: "#second_section img",
            scroller: "body",
            markers: false,
            start: "top 60%",
            end: "bottom 70%",
            scrub: 5
        },
        stagger: 0.1,
        opacity: 0,
        duration: 0.5
    })

tl
    .from("#third_section h5", {
        scrollTrigger: {
            trigger: "#third_section h5",
            scroller: "body",
            markers: false,
            start: "top 50%",
            end: "bottom 40%",
            scrub: 5
        },  
        opacity: 0,
        duration: 1,
        x: -100
    })
    .from("#third_section h2", {
        scrollTrigger: {
            trigger: "#third_section h2",
            scroller: "body",
            markers: false,
            start: "top 35%",
            end: "bottom 70%",
            scrub: 5
        },
        opacity: 0,
        duration: 1,
        scale: 1.5
    })
    .from("#third_section .third_para", {
        scrollTrigger: {
            trigger: "#third_section p",
            scroller: "body",
            markers: false,
            start: "top 70%",
            end: "bottom 55%",
            scrub: 5
        },
        opacity: 0,
        duration: .5,
        x: -100
    })
    .from("#third_section img", {
        scrollTrigger: {
            trigger: "#third_section img",
            scroller: "body",
            markers: false,
            start: "top 50%",
            end: "bottom 95%",
            scrub: 5
        },
        opacity: 0,
        duration: 1,
        scale: 1.6
    })

gsap.from("#forth_section h5", {
    scrollTrigger: {
        trigger: "#forth_section h5",
        scroller: "body",
        markers: false,
        start: "top 50%",
        end: "bottom 55%",
        scrub: 5
    },
    opacity: 0,
    duration: 1,
    y: -100
})
gsap.from("#forth_section h2", {
    scrollTrigger: {
        trigger: "#forth_section h5",
        scroller: "body",
        markers: false,
        start: "top 50%",
        end: "bottom 55%",
        scrub: 5
    },
    opacity: 0,
    duration: 1,
    scale: 1.5
})

gsap.from(".forth_child_one img", {
    scrollTrigger: {
        trigger: ".forth_child_one img",
        scroller: "body",
        markers: false,
        start: "top 60%",
        end: "bottom 90%",
        scrub: 5
    },
    opacity: 0,
    duration: 1,
    x: -100
})

gsap.from(".forth_child_two img", {
    scrollTrigger: {
        trigger: ".forth_child_two img",
        scroller: "body",
        start: "top 60%",
        end: "bottom 90%",
        scrub: 5
    },
    opacity: 0,
    duration: 1,
    x: 100
})
gsap.from(".forth_child_three img", {
    scrollTrigger: {
        trigger: ".forth_child_three img",
        scroller: "body",
        start: "top 60%",
        end: "bottom 90%",
        scrub: 5
    },
    opacity: 0,
    duration: 1,
    x: -100
})
gsap.from(".forth_child_four img", {
    scrollTrigger: {
        trigger: ".forth_child_four img",
        scroller: "body",
        start: "top 60%",
        end: "bottom 90%",
        scrub: 5
    },
    opacity: 0,
    duration: 1,
    x: 100
})


tl
    .from("#fifth_section h5", {
        scrollTrigger: {
            trigger: "#fifth_section h5",
            scroller: "body",
            markers: false,
            start: "top 40%",
            end: "bottom 30%",
            scrub: 5
        },
        opacity: 0,
        duration: .5,
        y: -20
    })
    .from("#fifth_section h2", {
        scrollTrigger: {
            trigger: "#fifth_section h2",
            scroller: "body",
            markers: false,
            start: "top 70%",
            end: "bottom 60%",
            scrub: 5
        },
        opacity: 0,
        duration: .5,
        scale: 1.2,
        x: 20
    })
    .from("#fifth_section ul li", {
        scrollTrigger: {
            trigger: "#fifth_section ul li",
            scroller: "body",
            markers: false,
            start: "top 80%",
            end: "bottom 60%",
            scrub: 5
        },
        stagger: 0.2,
        opacity: 0,
        duration: 1
    })


    const sixHeading = "Our Company by Number"

    const sixSlit = sixHeading.split(" ")

    const sixId = document.getElementById("six_heading")

    const sixMap = sixSlit.map((item) => {
        return (
            `
                <h2 class="sixBigText">${item}</h2>
            `
        )
    })

    sixId.innerHTML = sixMap.join("")

    gsap.from (".sixBigText", {
        scrollTrigger: {
            trigger: ".sixBigText",
            scroller: "body",
            markers: false,
            start: "top 55%",
            end: "bottom 70%",
            scrub: 5
        },
        opacity: 0,
        duraion: 0.5,
        x: -100,
        stagger: 0.2
    })

tl
    .from([".sixth_content", ".sixth_icon"], {
        scrollTrigger: {
            trigger: "#counter",
            scroller: "body",
            markers: false,
            start: "top 60%",
            end: "bottom 70%",
            scrub: 5
        },
        opacity: 0,
        duration: 1,
        y: 100,
        stagger: .2
    })

tl
    .from(["#seven_section .cotation", "#seven_section h3", "#seven_section p"], {
        scrollTrigger: {
            trigger: "#seven_section",
            scroller: "body",
            markers: false,
            start: "top 50%",
            end: "bottom 90%",
            scrub: 5
        },
        opacity: 0,
        duration: 1,
        y: 100,
        stagger: .2
    })
    .from(["#eight_section h5", "#eight_section h2"], {
        scrollTrigger: {
            trigger: "#eight_section h5",
            scroller: "body",
            markers: false,
            start: "top 75%",
            end: "bottom 65%",
            scrub: 5
        },
        opacity: 0,
        duration: 1,
        y: 100,
        stagger: .2
    })
    .from("#blog_card .card", {
        scrollTrigger: {
            trigger: "#blog_card",
            scroller: "body",
            markers: false,
            start: "top 60%",
            end: "bottom 100%",
            scrub: 5
        },
        opacity: 0,
        duration: 1,
        y: 100,
        stagger: .2
    })
    .from(["#nine_section h2", "#nine_section p"], {
        scrollTrigger: {
            trigger: "#nine_section h2",
            scroller: "body",
            markers: false,
            start: "top 80%",
            end: "bottom 70%",
            scrub: 5
        },
        opacity: 0,
        duration: 1,
        y: 100,
        stagger: .3
    })