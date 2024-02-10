const progressBar = document.createElement('div');
progressBar.id = 'readingProgressIndicator';
progressBar.classList.add('progress-bar'); 
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = (window.scrollY / scrollHeight) * 100;
  progressBar.style.width = scrolled + '%';
});
