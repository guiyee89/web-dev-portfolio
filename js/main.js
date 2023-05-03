const projectImg = document.querySelector('.blur-img');
projectImg.addEventListener('mouseover', function() {
  this.style.backgroundColor = 'hsla(0, 0%, 0%, 0.75)';
});

projectImg.addEventListener('mouseout', function() {
  this.style.backgroundColor = 'transparent';
});