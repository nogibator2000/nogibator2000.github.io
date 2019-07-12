console.clear();

var colorArray = ["#4D52AC", "#6F7BBD", "#939BCE", "#FF6B4A", "#FF836F", "#36648B"];
var slides = document.querySelectorAll("section");
var container = document.querySelector("#panelWrap");
var dots = document.querySelector(".dots");
var toolTips = document.querySelectorAll(".toolTip");
var oldSlide = 0;
var activeSlide = 0;
var navDots = [];
var dur = 0.6;
var offsets = [];
var toolTipAnims = [];
var ih = window.innerHeight;
var mouseAnim = new TimelineMax({repeat:-1, repeatDelay:1});
var handAnim = new TimelineMax({repeat:-1, repeatDelay:1});
var cursorAnim = new TimelineMax({repeat:-1, repeatDelay:1});
var arrowAnim = new TimelineMax({repeat:-1, repeatDelay:1});
document.querySelector("#upArrow").addEventListener("click", slideAnim);
document.querySelector("#downArrow").addEventListener("click", slideAnim);



for (let i = 0; i < slides.length; i++) {
var tl = new TimelineMax({paused:true, reversed:true});
  TweenMax.set(slides[i], { backgroundColor: colorArray[i] });
  var newDot = document.createElement("div");
  newDot.className = "dot";
  newDot.index = i;
  navDots.push(newDot);
  newDot.addEventListener("click", slideAnim);
  
  newDot.addEventListener("mouseenter", dotHover);
  newDot.addEventListener("mouseleave", dotHover);
  dots.appendChild(newDot);
  offsets.push(-slides[i].offsetTop);
  tl.to(toolTips[i], 0.25, {opacity:1, ease:Linear.easeNone});
  toolTipAnims.push(tl);
}

// get elements positioned
TweenMax.set(".dots", {yPercent:-50});
TweenMax.set(".toolTips", {yPercent:-50});
  
// side screen animation with nav dots
var dotAnim = new TimelineMax({paused:true});
dotAnim.staggerTo(".dot", 1, {scale:1.8,  rotation:0.1, yoyo:true, repeat:1, ease:Linear.easeNone}, 1);
dotAnim.time(1);


// tooltips hovers
function dotHover() {
  toolTipAnims[this.index].reversed() ? toolTipAnims[this.index].play() : toolTipAnims[this.index].reverse();
}

// figure out which of the 4 nav controls called the function
  function slideAnim(e) {

  oldSlide = activeSlide;
  // dragging the panels
  if (this.id === "dragger") {$(".text").addClass("anim").delay(3000).queue(function(next){
         $(".text").removeClass('anim');
         next();
    });
    activeSlide = offsets.indexOf(this.endY); 
  } else {
    if (TweenMax.isTweening(container)) {$(".text").addClass("anim").delay(3000).queue(function(next){
         $(".text").removeClass('anim');
         next();
    });
      return;
    }
    // up/down arrow clicks
    if (this.id === "downArrow" || this.id === "upArrow") {$(".text").addClass("anim").delay(3000).queue(function(next){
         $(".text").removeClass('anim');
         next();
    });
      activeSlide = this.id === "downArrow" ? (activeSlide += 1) : (activeSlide -= 1);
      // click on a dot
    } else if (this.className === "dot") {$(".text").addClass("anim").delay(3000).queue(function(next){
         $(".text").removeClass('anim');
         next();
    });
      activeSlide = this.index;
      // scrollwheel
    } else {  $(".text").addClass("anim").delay(3000).queue(function(next){
         $(".text").removeClass('anim');
         next();
    });
    
      activeSlide = e.deltaY > 0 ? (activeSlide +=1) : (activeSlide -= 1);
    }
  }
  // make sure we're not past the end or beginning slide
  activeSlide = activeSlide < 0 ? 0 : activeSlide;
  activeSlide = activeSlide > slides.length - 1 ? slides.length - 1 : activeSlide;
  if (oldSlide === activeSlide) {
    return;
  }
  // if we're dragging we don't animate the container
  if (this.id != "dragger") {
     TweenMax.to(container, dur, { y: offsets[activeSlide], ease:Power2.easeInOut, onUpdate:tweenDot });
  }
}

TweenMax.set(".hideMe", {opacity:1});
window.addEventListener("wheel", slideAnim);
window.addEventListener("resize", newSize);

// make the container a draggable element
  var dragMe = Draggable.create(container, {
  type: "y",
  edgeResistance: 1,
  onDragEnd: slideAnim,
  onDrag: tweenDot,
  onThrowUpdate: tweenDot,
  snap: offsets,
  throwProps:true,
  zIndexBoost: false,
  allowNativeTouchScrolling: false,
  bounds: "#masterWrap"
});

dragMe[0].id = "dragger";
newSize();

// resize all panels and refigure draggable snap array
function newSize() {
  offsets = [];
  ih = window.innerHeight;
  TweenMax.set("#panelWrap", { height: slides.length * ih });
  TweenMax.set(slides, { height: ih });
  for (let i = 0; i < slides.length; i++) {
    offsets.push(-slides[i].offsetTop);
  }
  TweenMax.set(container, { y: offsets[activeSlide] });
  dragMe[0].vars.snap = offsets;
}

// tween the dot animation as the draggable moves
  function tweenDot() {
  TweenMax.set(dotAnim, {time:Math.abs(container._gsTransform.y/ih) + 1});
}
















$( "a" ).click(function() {

$(this).css('opacity', '0.2')
  })
        

$( "#menuhome" ).click(function() {
 if ($("nav").hasClass("open")) {
    $("nav").removeClass("open");
      $(".superlay").toggleClass("open");
    $(".overlay").toggleClass("open");
   ;
  } else {
    $("nav").addClass("open");  $(".superlay").toggleClass("open"); $(".overlay").toggleClass("open");
  }
  
});


$("#menuproject" ).click(function() {
 if ($("nav").hasClass("open")) {
    $("nav").removeClass("open");
      $(".superlay").toggleClass("open");
    $(".overlay").toggleClass("open");
   ;
  } else {
    $("nav").addClass("open");  $(".superlay").toggleClass("open"); $(".overlay").toggleClass("open");
  }
  
});

$( "#menuworks" ).click(function() {
 if ($("nav").hasClass("open")) {
    $("nav").removeClass("open");
      $(".superlay").toggleClass("open");
    $(".overlay").toggleClass("open");
   ;
  } else {
    $("nav").addClass("open");  $(".superlay").toggleClass("open"); $(".overlay").toggleClass("open");
  }
  
});

$( "#menucontacts" ).click(function() {
 if ($("nav").hasClass("open")) {
    $("nav").removeClass("open");
      $(".superlay").toggleClass("open");
    $(".overlay").toggleClass("open");
   ;
  } else {
    $("nav").addClass("open");  $(".superlay").toggleClass("open"); $(".overlay").toggleClass("open");
  }
  
});




               
$( "#2" ).click(function() {
  
  if ($("#slideshow").hasClass("slideshow1") || ("slideshow3") || ("slideshow4")) {$("#slideshow").removeClass('slideshow1'), 
    $("#slideshow").removeClass("slideshow3"),$("#slideshow").removeClass("slideshow4"),
       document.getElementById('slideshow').innerHTML='<h2>7 Mission</h2>';
      document.getElementById('slideshowtext').innerHTML='<p>Each job is composed of 7 missions, which can be completed a night at a time. </p>',
    $("#slideshow").addClass('slideshow2')}
  
});

$( "#1" ).click(function() {
  
  if ($("#slideshow").hasClass("slideshow2") || ("slideshow3") || ("slideshow4")) {$("#slideshow").removeClass("slideshow2"), $("#slideshow").removeClass("slideshow3"),$("#slideshow").removeClass("slideshow4"),
    document.getElementById('slideshow').innerHTML=' <h2>4 jobs</h2>',
           document.getElementById('slideshowtext').innerHTML='<p>Children can choose from 4 different what they want to be during the night. Will they be an astronaut, a pirate, an explorer or a diver?</p>',
    
    $("#slideshow").addClass('slideshow1')}
  
});

$( "#3" ).click(function() {
  
  if ($("#slideshow").hasClass("slideshow2") || ("slideshow1") || ("slideshow4")) {$("#slideshow").removeClass("slideshow2"), $("#slideshow").removeClass("slideshow1"),$("#slideshow").removeClass("slideshow4"),
       document.getElementById('slideshow').innerHTML='<h2>28 Stickers</h2>'
                                                                                          document.getElementById('slideshowtext').innerHTML='<p>Every mission corresponds to a sticker; a token for each of their night time adventures.</p>',
    $("#slideshow").addClass('slideshow3')}
  
});

$( "#4" ).click(function() {
  
  if ($("#slideshow").hasClass("slideshow2") || ("slideshow3") || ("slideshow1")) {$("#slideshow").removeClass("slideshow2"), $("#slideshow").removeClass("slideshow3"),$("#slideshow").removeClass("slideshow1"),
       document.getElementById('slideshow').innerHTML='<h2>1 Board</h2>'
                                                                                          document.getElementById('slideshowtext').innerHTML='<p>The board represents the child’s progress through the jobs. Each job corresponds to a panorama which children can complete with the stickers they receive in the morning.</p>',
    $("#slideshow").addClass('slideshow4')}
  
});

$(".hamburger").on("click", function() {
  if ($("nav").hasClass("open")) {
    $("nav").removeClass("open");
      $(".superlay").toggleClass("open");
    $(".overlay").toggleClass("open");
   ;
  } else {
    $("nav").addClass("open");  $(".superlay").toggleClass("open"); $(".overlay").toggleClass("open");
  }
  
});