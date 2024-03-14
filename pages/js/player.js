const icon1 = document.getElementById('icon1');
const icon2 = document.getElementById('icon2');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    spinIcon();
  } else {
    console.log('not scrolling');
  }
});

function spinIcon() {
  icon1.style.transform = `rotate(${window.scrollY}deg)`;
  icon2.style.transform = `rotate(${window.scrollY}deg)`;
}
