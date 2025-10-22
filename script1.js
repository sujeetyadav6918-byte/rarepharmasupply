const showMenu = (toggleId, navId) =>{
   const toggle = document.getElementById(toggleId),
         nav = document.getElementById(navId)

   toggle.addEventListener('click', () =>{
       // Add show-menu class to nav menu
       nav.classList.toggle('show-menu')
       // Add show-icon to show and hide menu icon
       toggle.classList.toggle('show-icon')
   })
}

showMenu('nav-toggle','nav-menu')

/*=============== SHOW DROPDOWN MENU ===============*/
const dropdownItems = document.querySelectorAll('.dropdown__item')

// 1. Select each dropdown item
dropdownItems.forEach((item) =>{
    const dropdownButton = item.querySelector('.dropdown__button') 

    // 2. Select each button click
    dropdownButton.addEventListener('click', () =>{
        // 7. Select the current show-dropdown class
        const showDropdown = document.querySelector('.show-dropdown')
        
        // 5. Call the toggleItem function
        toggleItem(item)

        // 8. Remove the show-dropdown class from other items
        if(showDropdown && showDropdown!== item){
            toggleItem(showDropdown)
        }
    })
})

// 3. Create a function to display the dropdown
const toggleItem = (item) =>{
    // 3.1. Select each dropdown content
    const dropdownContainer = item.querySelector('.dropdown__container')

    // 6. If the same item contains the show-dropdown class, remove
    if(item.classList.contains('show-dropdown')){
        dropdownContainer.removeAttribute('style')
        item.classList.remove('show-dropdown')
    } else{
        // 4. Add the maximum height to the dropdown content and add the show-dropdown class
        dropdownContainer.style.height = dropdownContainer.scrollHeight + 'px'
        item.classList.add('show-dropdown')
    }
}

/*=============== DELETE DROPDOWN STYLES ===============*/
const mediaQuery = matchMedia('(min-width: 1118px)'),
      dropdownContainer = document.querySelectorAll('.dropdown__container')

// Function to remove dropdown styles in mobile mode when browser resizes
const removeStyle = () =>{
    // Validate if the media query reaches 1118px
    if(mediaQuery.matches){
        // Remove the dropdown container height style
        dropdownContainer.forEach((e) =>{
            e.removeAttribute('style')
        })

        // Remove the show-dropdown class from dropdown item
        dropdownItems.forEach((e) =>{
            e.classList.remove('show-dropdown')
        })
    }
}

addEventListener('resize', removeStyle)





// Image  slide

let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 3000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000);

    
}


dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};


// about section 
function hoverEffect(card) {
card.style.transition = 'all 0.3s ease';
card.style.border = '2px solid #4f46e5';
}


function removeEffect(card) {
card.style.border = 'none';
}




// navigation code
// Select all elements you want the hover effect on. Example: all elements with class 'hover-text'
const hoverTextElements = document.querySelectorAll('#home1');
// const hoverTextElements = document.querySelectorAll('.hover-text');

hoverTextElements.forEach(function(element) {
  element.addEventListener('mouseenter', function() {
    // Font effects
    element.style.fontWeight = 'bold';
    element.style.fontStyle = 'italic';
    // Add color on hover
    // element.style.color = 'orange'; // Orange color (use any hex/rgb/color name)
  });

  element.addEventListener('mouseleave', function() {
    // Reset font effects
    element.style.fontWeight = '';
    element.style.fontStyle = '';
    // Revert color
    element.style.color = '';
  });
});




// slide medicine product 10



// Auto-slide feature for .scroller
    const scroller = document.getElementById('scroller');
    let scrollAmount = 320; // adjust to your card width
    let autoSlide;
    function slideNext() {
      // If at right end, reset to start, else slide right
      if (scroller.scrollLeft + scroller.offsetWidth >= scroller.scrollWidth - 2) {
        scroller.scrollTo({left: 0, behavior: 'smooth'});
      } else {
        scroller.scrollBy({left: scrollAmount, behavior: 'smooth'});
      }
    }
    function startAutoSlide() {
      if(autoSlide) clearInterval(autoSlide);
      autoSlide = setInterval(slideNext, 2800); // every 2.8s
    }
    scroller.addEventListener('mouseenter', ()=>clearInterval(autoSlide));
    scroller.addEventListener('mouseleave', startAutoSlide);
    startAutoSlide();
    // Swipe support for phone
    let startX = null;
    scroller.addEventListener('touchstart', e=>{startX=e.touches[0].clientX;}, {passive:true});
    scroller.addEventListener('touchend', e=>{
      if(startX!==null) {
        let endX = e.changedTouches[0].clientX;
        if(endX - startX > 42) scroller.scrollBy({left: -scrollAmount, behavior: 'smooth'});
        else if(startX - endX > 42) scroller.scrollBy({left: scrollAmount, behavior: 'smooth'});
        startX=null;
        startAutoSlide();
      }
    }, {passive:true});
    // Update scroll amount on resize for best effect
    window.addEventListener('resize', function(){
      let card = document.querySelector('.scroller a');
      if(card) scrollAmount = card.offsetWidth + 48;
    });









// slide product end here












