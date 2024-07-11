
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


// horizental scrolltriger animation 
const maxDeviation = 0,
  maxSkew = 30,
  random = gsap.utils.random(-maxDeviation, maxDeviation, 1, true),
  clamp = gsap.utils.clamp(-maxSkew, maxSkew),
  setSkew = gsap.quickSetter(".hr-scroll", "skewX", "deg"),
  proxy = { skew: 0 };

gsap.utils
  .toArray(".hr-scroll .hr-scroll-container .hr-item")
  .forEach((img) => gsap.set(img, { y: random() }));

const skew = () => {
  gsap.to(proxy, {
    skew: 0,
    overwrite: true,
    onUpdate: () => setSkew(proxy.skew),
  });
};

const hrScroll = (section) => {
  const direction = (section.dataset.direction || "left") === "left" ? -1 : 1;
  const title = section.querySelector(".section-title");
  let finalX = direction === -1 ? -75 : 0;

  if (direction === 1) {
    gsap.set(title, { x: -section.getBoundingClientRect().x });
  }

  gsap.to(section, {
    x: `${finalX}%`,
    ease: "none",
    scrollTrigger: {
      trigger: section,
      pin: true,
      start: "top top",
      end: `+=${section.getBoundingClientRect().width / 3}`,
      scrub: 1.5,
      onScrubComplete: () => {
        gsap.to(title, {
          x: -section.getBoundingClientRect().x,
          duration: 5,
          ease: "power3.out",
        });
      },
      onUpdate: (self) => {
        let skewAmount = clamp(self.getVelocity() / 300);
        if (Math.abs(skewAmount) > Math.abs(proxy.skew)) {
          proxy.skew = direction * skewAmount;
          skew();
        }
      },
    },
  });

  // Animate .hr-item-2 elements separately to move slower
  gsap.utils
    .toArray(section.querySelectorAll(".hr-item-content"))
    .forEach((item2) => {
      gsap.to(item2, {
        x: `${finalX * 1}%`, // Move at half the speed of the main section
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${section.getBoundingClientRect().width / 2}`,
          scrub: 2.3, // Move slower
        },
      });
    });
};

gsap.utils.toArray(".hr-scroll").forEach((section) => hrScroll(section));

let portfolioSection = document.querySelector('.portfolio-container')
// Animate .hr-item-2 elements separately to move slower
gsap.utils
.toArray(document.querySelectorAll(".portfolio-item"))
.forEach((item2) => {
  gsap.to(item2, {
    x: -200, // Move at half the speed of the main section
    ease: "none",
    scrollTrigger: {
      trigger:  portfolioSection,
      start: "top center",
      scrub: 2.3, // Move slower
      end: "+=300",
    },
  });
});

gsap.utils
.toArray(document.querySelectorAll(".portfolio-item-bottom"))
.forEach((item2) => {
  gsap.to(item2, {
    x: -20, // Move at half the speed of the main section
    ease: "none",
    scrollTrigger: {
      trigger:  portfolioSection,
      start: "top center",
      scrub: 2.3, // Move slower
      end: "+=1000",
    },
  });
});

// our process 
let progressBar = document.querySelector('progress');
let endNumber = '1000';

if(window.innerWidth < 1367){
    endNumber = '800';
    console.log(endNumber)
}

  ScrollTrigger.create({
    start:  "top center",
    trigger: '.our-process-container',
    end: `+=${endNumber}`,
    scrub: 3.5,
    onUpdate: self => {
      progressBar.value = self.progress * 100;
    }
  });
