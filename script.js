const menuShow = 'nav .menu';
const menuPopup = document.querySelector(menuShow);
const menuTrigger = document.querySelector('.m-trigger');


menuTrigger.addEventListener('click', () => {
   console.log(menuTrigger)
   setTimeout(() => {
      if(!menuPopup.classList.contains('show')){
         menuPopup.classList.add('show');
         document.body.classList.add('menu-visible')
      }
   }, 250);
})

//automatically close by click outside menu

document.addEventListener('click', (e) => {
   const isClosest = e.target.closest(menuShow);

   if(!isClosest && menuPopup.classList.contains('show')){
      menuPopup.classList.remove('show');
         document.body.classList.remove('menu-visible')

   }

})

//----------SEARCH--------

const sTrigger = document.querySelector('.s-trigger');
const addClass = document.querySelector('.site');
sTrigger.addEventListener('click', () => {
   addClass.classList.toggle('show-search')
})


//-----------------SWIPER---------

const sliderThumb = new Swiper('.thumb-nav', {
   spaceBetween: 10,
   slidesPerView: 3,
   slidesPerGroup: false,
   breakpoints:{
      992:{
         direction: 'vertical'
      }
   }

 });

 const theSlider = new Swiper('.thumb-big', {
   slidePerView: 1,
   pagination:{
      el: '.swiper-pagination',
   },
   thumbs:{
      swiper: sliderThumb
   }

 });

 //-----------------TABBED PRODUCT SWIPER---------

 const tabbeNav = new Swiper('.tnav', {
   spaceBetween: 20,
   slidesPerView: 6,
   centeredSlides: true,
   slidesPerGroup: false,
 });

 const theTab = new Swiper('.tabbed-item', {
   loop: true,
   slidesPerView: 1, 
   autoHeight: true,
   thumbs:{
      swiper: tabbeNav,
   }
 });

//  --------------- On SROLL TRANSITION

const io = new IntersectionObserver(entries => {
   entries.forEach(entry =>{
      if(entry.intersectionRatio > 0){
         entry.target.classList.add('this')
      }
   })
})

const box = document.querySelectorAll('.animate');
box.forEach((el) => {
   io.observe(el)
})

