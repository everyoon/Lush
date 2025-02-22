import gsap from 'gsap';
import TextPlugin from 'gsap/TextPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);

// 타이핑 효과
const textContent = `
  Welcome to the home of new at Lush.<br>
  Here you'll find our freshest products – from limited edition exclusives to innovative creations and your next new favourites.<br>
  Find everything to start your cosmetic revolution and shake up your bath time routine.
`;

gsap.to('.text', {
  duration: 10,
  text: textContent,
  ease: 'back.out',
  scrollTrigger: {
    trigger: '.desc',
    start: 'top 80%',
    toggleActions: 'play none none none',
  },
});

// product 슬라이드
const slider = document.querySelector('.product_slide');
const item = document.querySelector('.product_slide ul');
const slide = document.querySelectorAll('.slide_item');

const slideWidth = calculateSlideWidth();
const totalWidth = slideWidth * 10;

function calculateSlideWidth() {
  if (window.innerWidth < 425) {
    return slide[0].offsetWidth + 16;
  } else {
    return slide[0].offsetWidth + 30;
  }
}
function duplicateItems() {
  const itemClone = item.cloneNode(true); // 아이템 복제
  item.parentNode.appendChild(itemClone); // 복제된 아이템을 뒤에 추가
}

function leftSlide() {
  duplicateItems();

  gsap.to(slider, {
    x: `-${totalWidth}px`,
    duration: 20,
    ease: 'linear',
    repeat: -1,
  });
}
leftSlide();
