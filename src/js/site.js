(function () {
  var b = document.querySelector('.burger'), n = document.getElementById('nav');
  if (!b || !n) return;
  b.addEventListener('click', function () {
    var o = n.classList.toggle('open');
    b.setAttribute('aria-expanded', o);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && n.classList.contains('open')) { n.classList.remove('open'); b.setAttribute('aria-expanded', 'false'); b.focus(); }
  });
  var m = document.querySelector('.menu');
  document.addEventListener('click', function (e) { if (m && !m.contains(e.target)) m.removeAttribute('open'); });
})();
