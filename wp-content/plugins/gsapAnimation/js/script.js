gsap.registerPlugin(ScrollTrigger);

const showDemo = () => {
  document.scrollingElement.scrollTo(0, 0);
  gsap.to(document.querySelector(".loader"), { autoAlpha: 0 });

  gsap.utils.toArray(".section").forEach((section, index) => {
    const w = section.querySelector("h2");
    const [x, xEnd] =
      index % 2
        ? ["100%", (w.scrollWidth - section.offsetWidth) * -0.4]
        : [w.scrollWidth * -0.4, 0];
    gsap.fromTo(
      w,
      { x },
      {
        x: xEnd,
        scrollTrigger: {
          trigger: section,
          scrub: 5,
        },
      }
    );
  });
};

showDemo();

const boxes = gsap.utils.toArray(".box");

boxes.forEach((box, i) => {
  gsap.to(box, {
    scrollTrigger: {
      trigger: box,
      start: "top center",
      scrub: 5,
      end: "+=300",
    },
    x: 100,
    duration: 5, // Duration of the animation
    delay: i * 0.5, // Delay based on the index of the box
  });
});

const boxes_up = gsap.utils.toArray(".box-up");

boxes_up.forEach((box_up, i) => {
  gsap.to(box_up, {
    scrollTrigger: {
      trigger: box_up,
      start: "top center",
      scrub: 5,
      end: "+=300",
    },
    y: -50,
    duration: 5, // Duration of the animation
    delay: i * 0.5, // Delay based on the index of the box
  });
});

let revealContainers = document.querySelectorAll(".reveal .elementor-widget-container");

revealContainers.forEach((container) => {
  let image = container.querySelector("img");
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      toggleActions: "restart none none reset",
    },
  });

  tl.set(container, { autoAlpha: 1 });
  tl.from(container, 1.5, {
    xPercent: -100,
    ease: Power2.out,
  });
  tl.from(image, 1.5, {
    xPercent: 100,
    scale: 1.3,
    delay: -1.5,
    ease: Power2.out,
  });
});
