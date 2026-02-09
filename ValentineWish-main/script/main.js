function animationTimeline() {

  const textBoxChars = document.querySelector(".hbd-chatbox");
  const hbd = document.querySelector(".wish-hbd");

  textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML.split("").join("</span><span>")}</span>`;
  hbd.innerHTML = `<span>${hbd.innerHTML.split("").join("</span><span>")}</span>`;

  const tl = new TimelineMax();

  tl.to(".container", 0.5, { visibility: "visible" })
    .from(".one", 1, { opacity: 0, y: 50 })
    .from(".two", 1, { opacity: 0, y: 50 })
    .to(".one", 1, { opacity: 0, y: -50 }, "+=2")
    .to(".two", 1, { opacity: 0, y: -50 }, "-=1")
    .from(".three", 1, { opacity: 0, y: 50 })
    .to(".three", 1, { opacity: 0 }, "+=2")
    .from(".four", 1, { scale: 0.5, opacity: 0 })
    .staggerTo(".hbd-chatbox span", 0.05, { visibility: "visible" }, 0.05)
    .to(".four", 1, { opacity: 0, scale: 0.5 }, "+=1")
    .from(".five p", 1, { opacity: 0, y: 50 })
    .from(".six", 1, { opacity: 0, scale: 0.5 })
    .staggerFrom(".wish-hbd span", 0.1, { opacity: 0, y: -20 }, 0.05)
    .from("#wishText", 1, { opacity: 0 })
    .from(".nine", 1, { opacity: 0 });

}

animationTimeline();
