const cookieBtn = document.querySelector('#cookie-btn');

const notificationPanel = document.querySelector('.notification-panel');
const bodyContainer = document.querySelector('.body-container');
const newsletter = document.querySelector('.newsletter-panel');
const close = document.querySelector('.close');

cookieBtn.addEventListener('click', () => {
  notificationPanel.style.top = '-100%';
  bodyContainer.style.top = '0';
});

const bodyHeight = document.body.clientHeight;

close.addEventListener('click', () => {
  newsletter.style.bottom = '-100%';
  window.removeEventListener('scroll', showNewsLetter);
});

function setDateToStorage() {
  const now = new Date().getTime();
  if (!localStorage.getItem('end-time')) {
    localStorage.setItem('end-time', now + 600000);
    window.addEventListener('scroll', showNewsLetter);
  }
}

setDateToStorage();

setInterval(() => {
  const now = new Date().getTime();
  if (
    localStorage.getItem('end-time') &&
    localStorage.getItem('end-time') > now
  ) {
    return;
  }

  if (
    localStorage.getItem('end-time') &&
    now > localStorage.getItem('end-time')
  ) {
    localStorage.setItem('end-time', now + 600000);
    window.addEventListener('scroll', showNewsLetter);
  }
}, 1000);

function showNewsLetter() {
  if (window.scrollY >= bodyHeight / 3) {
    newsletter.style.bottom = '0';
  }
}
