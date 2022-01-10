const counters = document.querySelectorAll(".num");
const speed = 111;

let section = document.querySelector(".icon_counter");
let started = false; // Function Started ? No
window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 100) {
    if (!started) {
      counters.forEach((counter) => {
        const updateCount = () => {
          const target = parseInt(+counter.getAttribute("data-goal"));
          const count = parseInt(+counter.innerText);
          const increment = Math.trunc(target / speed);
          console.log(increment);
          if (count < target) {
            counter.innerText = count + increment;
            setTimeout(updateCount, 1);
          } else {
            count.innerText = target;
          }
        };
        updateCount();
      });
    }
    started = true;
  }
};
