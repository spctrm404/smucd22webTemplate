let sections = document.querySelectorAll('.section');

sections.forEach((section) => {
  let bgL = document.createElement('div');
  bgL.className = 'section__bg section__bg--left';
  section.prepend(bgL);
  let bgR = document.createElement('div');
  bgR.className = 'section__bg section__bg--right';
  section.append(bgR);
});
