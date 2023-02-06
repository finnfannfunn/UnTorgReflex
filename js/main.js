const classes = {
   opened: 'opened',
   active: 'active',
   hidden: 'hidden',
}
//-----------burger

const burger = document.querySelector('.burger')
const menu = document.querySelector('.nav-menu').cloneNode(1)
const popup = document.querySelector('.popup')
const social = document.querySelector('.social__item').cloneNode(1)


const burgerOpened = () => {
   burger.classList.toggle(classes.opened)
   popup.classList.toggle(classes.opened)



   const popupOpened = () => {
      popup.appendChild(menu)
      popup.appendChild(social)

   }
   popupOpened()
 
}



burger.addEventListener('click', burgerOpened)


//-----------ACCORDION
const btnAccordion = document.querySelectorAll('.accordion-trigger')


btnAccordion.forEach((item) => item.addEventListener('click', () => {
   
   
   const content = item.nextElementSibling

  if(content.style.maxHeight){
      document.querySelectorAll('.accordion-text').forEach((item) => item.style.maxHeight = null)
    
  } else {
   document.querySelectorAll('.accordion-text').forEach((item) => item.style.maxHeight = null)
   content.style.maxHeight = content.scrollHeight + 'px'
   item.parentNode.classList.remove(classes.opened)
  }
}))

//-----------SWIPER

const swiper = new Swiper('.swiper',{
   // spaceBetween: 20,
   loop: true, 
   slidesPerView: 3,
   initialSlide: 2,
   autoplay: {
      delay: 3000,
      disableOnInteraction: false,
   },
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
}

)

//-----------------SCROLL TO SECTION
const menuLink = document.querySelectorAll('.nav-link')

const scrollToSection = (e) => {
e.preventDefault()
const href = e.currentTarget.getAttribute('href')

if(!href && !href.startsWith('#')) return

const section = href.slice(1)
const top = document.getElementById(section)?.offsetTop || 0
window.scrollTo({ top, behavior: 'smooth' })

}

menuLink.forEach((link) => link.addEventListener('click', scrollToSection))



//---------------SCROLL ANIMATION IN SECTION
const sections = document.querySelectorAll('.section')

const handleScroll = () => {
   const { scrollY: y, innerHeight: h} = window
   sections.forEach((section) => {
      if( y > section.offsetTop - h / 1.7 )section.classList.remove(classes.hidden)
   })
}

window.addEventListener('scroll', handleScroll)