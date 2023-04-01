console.log('Project Initialized');

const tl = gsap.timeline();

function revealSite() {
  tl.to('.pre-loader', 1, {
    opacity: 0,
    display: 'none',
    ease: 'power2.inOut',
  })
    .to(
      '.header-row',
      0.8,
      {
        top: '0',
        ease: 'power4.inOut',
        stagger: {
          amount: 0.2,
        },
      },
      '-=1.2'
    )
    .from(
      '.navbar > *, .footer',
      2,
      {
        y: 40,
        opacity: 0,
        ease: 'power4.inOut',
        stagger: {
          amount: 0.2,
        },
      },
      '-=1'
    );
}

tl.to(".header > h1", 2, {
    top: 0,
    ease: "power3.inOut",
    stagger: {
        amount: 0.2
    }
}).from(".pre-loader-btn .btn", 0.3, {
    y: 40,
    opacity: 0,
    delay: 2,
})
