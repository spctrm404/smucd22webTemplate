let sections = document.querySelectorAll('.section');

sections.forEach((section) => {
  let marginL = document.createElement('div');
  marginL.className = 'margin margin--left';
  section.prepend(marginL);
  let marginR = document.createElement('div');
  marginR.className = 'margin margin--right';
  section.append(marginR);
});
