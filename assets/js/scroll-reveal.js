// Scroll Reveal: triggers .revealed class when elements enter viewport
// Uses IntersectionObserver with a safety timeout fallback
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

  // Safety fallback: reveal everything after 1.5s if observer hasn't fired
  var fallbackTimer = setTimeout(function () {
    targets.forEach(function (el) {
      el.classList.add("revealed");
    });
  }, 1500);

  // Fallback if IntersectionObserver is not supported
  if (!("IntersectionObserver" in window)) {
    clearTimeout(fallbackTimer);
    targets.forEach(function (el) {
      el.classList.add("revealed");
    });
    return;
  }

  var revealedCount = 0;

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
          revealedCount++;
          if (revealedCount >= targets.length) {
            clearTimeout(fallbackTimer);
          }
        }
      });
    },
    { threshold: 0, rootMargin: "0px 0px 200px 0px" }
  );

  targets.forEach(function (el) {
    observer.observe(el);
  });
});
