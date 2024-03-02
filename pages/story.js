const icon = document.getElementById('iconST');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    spinIcon();
  } else {
    console.log('not scrolling');
  }
});

function spinIcon() {
  icon.style.transform = `rotate(${window.scrollY}deg)`;
}
