// Scroll Reveal: triggers .revealed class when elements enter viewport
document.addEventListener("DOMContentLoaded", function () {
  var targets = document.querySelectorAll(".scroll-reveal");
  if (!targets.length) return;

  // Respect reduced motion preference
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    targets.forEach(function (el) {
      el.classList.add("revealed");
    });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.01, rootMargin: "0px 0px 100px 0px" }
  );

  targets.forEach(function (el) {
    observer.observe(el);
  });
});
