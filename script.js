const imgs = document.querySelectorAll('.card-img');
let switchDirection = '0';

function load() {
  imgs.forEach(img => {
    img.addEventListener('click', e => {
      const card_index = e.currentTarget.dataset.id;
      if (card_index === '0') {
        const background = 'url(./images/bg01.jpg) 0% 0% / cover';
        switchDirection = '0';
        windowEffect(background, e);
      } else if (card_index === '1') {
        const background = 'url(./images/bg02.jpg) 0% 0% / cover';
        switchDirection = '-100';
        windowEffect(background, e, switchDirection);
      } else {
        const background = 'url(./images/bg03.jpg) 0% 0% / cover';
        switchDirection = '0';
        windowEffect(background, e);
      }
    });
  });
}

function windowEffect(background, e) {
  const toggle = e.currentTarget.querySelector('.toggle');
  const img_title = e.currentTarget.querySelector('.img-title');
  const card = e.currentTarget.parentElement;
  toggle.style.left = switchDirection;
  img_title.style.left = switchDirection;
  toggle.style.background = background;
  if (window.innerWidth > 1200) {
    img_title.style.background = 'none';
    card.style.overflow = 'hidden';
    toggle.style.width = '1080px';
    img_title.style.width = '1080px';
    console.log(window.innerWidth);
    setTimeout(() => {
      img_title.style.transform = 'scale(3)';
      setTimeout(() => {
        img_title.style.width = '100%';
        img_title.style.transform = 'scale(1)';
        toggle.style.width = '100%';
        setTimeout(() => {
          card.style.overflow = '';
          img_title.style.background = 'rgba(255, 69, 0, 0.1)';
        }, 600);
      }, 1700);
    }, 800);
  }
}

load();
