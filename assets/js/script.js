var img = "https://logosmarcas.net/wp-content/uploads/2020/11/Star-Wars-Logo.png"

var myFullpage = new fullpage('#fullpage', {
    //Navigation
    menu: '#menu',
    lockAnchors: false,
    anchors: ['firstPage', 'secondPage'],
    navigation: true,
    navigationPosition: 'left',
    navigationTooltips: ['<img src="https://www.metalearth.com/Content/Images/licensedlogo/orig-starwars-logo.png" style="width: 80px; height: 35px; background: "#000";>', '<img src="https://www.metalearth.com/Content/Images/licensedlogo/orig-starwars-logo.png" style="width: 80px; height: 35px; background: "#000";>', '<img src="https://www.metalearth.com/Content/Images/licensedlogo/orig-starwars-logo.png" style="width: 80px; height: 35px; background: "#000";>', '<img src="https://www.metalearth.com/Content/Images/licensedlogo/orig-starwars-logo.png" style="width: 80px; height: 35px; background: "#000";>'],
    showActiveTooltip: true,
    slidesNavigation: false,
    slidesNavPosition: 'bottom',

    //Scrolling
    css3: true,
    scrollingSpeed: 700,
    autoScrolling: true,
    fitToSection: true,
    fitToSectionDelay: 1000,
    scrollBar: false,
    easing: 'easeInOutCubic',
    easingcss3: 'ease',
    loopBottom: false,
    loopTop: false,
    loopHorizontal: true,
    continuousVertical: true,
    continuousHorizontal: false,
    scrollHorizontally: false,
    interlockedSlides: false,
    dragAndMove: false,
    offsetSections: false,
    resetSliders: false,
    fadingEffect: false,
    normalScrollElements: '#element1, .element2',
    scrollOverflow: false,
    scrollOverflowReset: false,
    scrollOverflowOptions: null,
    touchSensitivity: 15,
    bigSectionsDestination: null,

    //Accessibility
    keyboardScrolling: true,
    animateAnchor: true,
    recordHistory: true,

    //Design
    controlArrows: true,
    verticalCentered: true,
    sectionsColor: ['#ccc', '#666', '#000', '#2121'],
    paddingTop: '3em',
    paddingBottom: '10px',
    fixedElements: '#header, .footer',
    responsiveWidth: 0,
    responsiveHeight: 0,
    responsiveSlides: false,
    parallax: true,
    parallaxOptions: { type: 'reveal', percentage: 62, property: 'translate' },
    dropEffect: false,
    dropEffectOptions: { speed: 2300, color: '#F82F4D', zIndex: 9999 },
    waterEffect: false,
    waterEffectOptions: { animateContent: true, animateOnMouseMove: true },
    cards: false,
    cardsOptions: { perspective: 100, fadeContent: true, fadeBackground: true },

    //Custom selectors
    sectionSelector: '.section',
    slideSelector: '.slide',

    lazyLoading: true,

    //events
    onLeave: function(origin, destination, direction) {},
    afterLoad: function(origin, destination, direction) {},
    afterRender: function() {},
    afterResize: function(width, height) {},
    afterReBuild: function() {},
    afterResponsive: function(isResponsive) {},
    afterSlideLoad: function(section, origin, destination, direction) {},
    onSlideLeave: function(section, origin, destination, direction) {}
});

// MENU BAR
const menuBtn = document.querySelector('.menu-btn')

let menuOpen = false

menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open')
        menuOpen = true
    } else {
        menuBtn.classList.remove('open')
        menuOpen = false
    }
})