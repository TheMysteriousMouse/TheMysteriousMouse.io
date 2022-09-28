const cards = document.querySelector('.projectSlide').children;
const next = document.querySelector('.navigation__next');
const prev = document.querySelector('.navigation__prev');

const totalImages = cards.length;
let index = 0;
prev.addEventListener('click', () => {
  nextCard('next');
});

next.addEventListener('click', () => {
  nextCard('prev');
});

function nextCard(direction) {
  if (direction == 'next') {
    index++;
    // If index reaches the end restart it at the first card
    if (index == totalImages) {
      index = 0;
    }
  } else {
    // If index reaches the beginnning go to the last card
    if (index == 0) {
      index = totalImages - 1;
    } else {
      index--;
    }
  }
  //
  for (let i = 0; i < cards.length; i++) {
    cards[i].classList.remove('active');
  }
  cards[index].classList.add('active');
}
