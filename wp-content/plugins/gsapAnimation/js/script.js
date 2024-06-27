gsap.registerPlugin(ScrollTrigger);


const showDemo = () => {
 
  document.scrollingElement.scrollTo(0, 0);
  gsap.to(document.querySelector('.loader'), { autoAlpha: 0 });

  gsap.utils.toArray('.section').forEach((section, index) => {
    const w = section.querySelector('h2');
    const [x, xEnd] = index % 2 ? ['100%', (w.scrollWidth - section.offsetWidth) * -1] : [w.scrollWidth * -1, 0];
    gsap.fromTo(w, { x }, {
      x: xEnd,
      scrollTrigger: {
        trigger: section,
        scrub: 0.5 } });


  });
};

showDemo();

const boxes = gsap.utils.toArray(".box");

        boxes.forEach((box, i) => {
            gsap.to(box, {
                scrollTrigger: {
                    trigger: box,
                    scrub: true,
                    end: "+=300"
                },
                x: 100,
                duration: 5, // Duration of the animation
                delay: i * 5 // Delay based on the index of the box
            });
        });