//JS code goes here

	/*--- stats init ---
var $ = slider = $("#slider"),
	tlDevice,
	estado,
	timer,
	fps = 12,
	num = 0,
	pressPrev,
	pressNext,
	--- stats end ---*/

	var banner = new Banner({
	type: "expanding",
	expand: true,
	finalExpandSize: [0,0,320,460],
	hotspotClose: ["#generalClose"],
	hotspotExpand: ["#collapse-banner"],
	elementsToRegister: [

	],
	customFunctions: {

	},
	animations: {
		firstFrame : function(){
			var collapsedText = new TimelineMax();
				collapsedText.to("#collapse-banner h1", 0.2, {opacity:1})
							.to("#collapse-banner h2", 0.2, {opacity:1}, "-=0.2")
							.to("#collapse-banner span", 0.5, {opacity: 1});
		},
		secondFrame : function(){
			var tlDevice = new TimelineMax({repeat:0, repeatDelay:0, onUpdate:updateStats, onRepeat:updateReps, onComplete:restart});

				//Frame 1
				tlDevice.to("#logo", 1, {opacity:1}, 0)
						.to(".device_fte_frame", 1, {scale:0.7, top:"-5%", opacity:1, ease:Power2.easeOut}, "-=0.5")
						.to("#f1_txt1", 1, {left:9, opacity:1, ease:Power2.easeOut}, "-=0.2")
						.to("#f1_txt2", 1, {left:9, opacity:1, ease:Power2.easeOut}, "-=1")
						.to("#f1_txt1", 0.7, {delay:2, left:370, opacity:0, ease:Power2.easeInOut})
						.to("#f1_txt2", 0.7, {delay:2, left:370, opacity:0, ease:Power2.easeInOut}, "-=2.7")

						//Frame 2
						.to("#f2_txt1", 1, {left:9, opacity:1, ease:Power2.easeOut})
						.to("#f2_txt2", 1, {left:9, opacity:1, ease:Power2.easeOut}, "-=1")
						.to("#f2_txt1", 0.7, {delay:2, left:370, opacity:0, ease:Power2.easeInOut})
						.to("#f2_txt2", 0.7, {delay:2, left:370, opacity:0, ease:Power2.easeInOut}, "-=2.7")

						//Frame 3
						.to(".device_fte_frame", 1, {rotationY:180, ease:Power2.easeInOut, transformOrigin:"center center"}, "-=0.5")
						.to(".device_fte", 0.1, {opacity: 0}, "-=0.5")
						.to(".device_bck", 0.1, {opacity: 1}, "-=0.5")
						.to(".device_fte_frame", 1, {scale:1, top:"60%", ease:Power2.easeOut}, "-=0.5")

						.to("#f3_txt1", 1, {left:9, opacity:1, ease:Power2.easeOut})
						.to("#f3_txt2", 1, {left:9, opacity:1, ease:Power2.easeOut}, "-=1")
						.to("#f3_txt3", 1, {left:9, opacity:1, ease:Power2.easeOut}, "-=1")
						.to("#f3_txt1", 0.7, {delay:3, left:370, opacity:0, ease:Power2.easeInOut})
						.to("#f3_txt2", 0.7, {delay:3, left:370, opacity:0, ease:Power2.easeInOut}, "-=3.7")
						.to("#f3_txt3", 0.7, {delay:3, left:370, opacity:0, ease:Power2.easeInOut}, "-=3.7")
						.to(".device_fte_frame", 0.7, {delay:3, top:"100%", ease:Power2.easeInOut}, "-=3.7")

						//Frame 4
						.to("#f4_txt1", 1, {left:9, opacity:1, ease:Power2.easeOut}, "-=0.5")
						.to("#f4_txt2", 1, {left:9, opacity:1, ease:Power2.easeOut}, "-=1")						
						.to(".color.blue", 0.7, {opacity:1})
						.to(".color.orange", 0.5, {opacity:1}, "-=0.4")
						.to(".color.violet", 0.3, {opacity:1}, "-=0.2")
						.to("#f4_txt3", 0.4, {opacity:1, top:"80%",ease:Power2.easeOut}, "+=0.5")

						.to("#f4_txt1", 0.7, {delay:3, left:370, opacity:0, ease:Power2.easeInOut})
						.to("#f4_txt2", 0.7, {delay:3, left:370, opacity:0, ease:Power2.easeInOut}, "-=3.7")
						.to(".color.blue", 0.5, {delay:3, opacity:0}, "-=3.5")
						.to(".color.orange", 0.5, {delay:3, opacity:0}, "-=3.5")
						.to(".color.violet", 0.5, {delay:3, opacity:0}, "-=3.5")
						.to("#f4_txt3", 0.4, {delay:3, opacity:0, top:"90%",ease:Power2.easeInOut}, "-=3.3")


						//Frame 5
						.to(".device_fte_frame", 1, {top:"50%", ease:Power2.easeInOut})
						.to("#f5_txt1", 0.7, {top:"25%", opacity:1, ease:Power2.easeInOut})
						.to("#logo_droidturbo", 0.7, {opacity:1, ease:Power2.easeInOut})

		},
		expandStartAnimation : function(){
            var expand = new TimelineMax();
            expand.to("#expanded-banner", 0.3, {opacity:1, display: 'block', onComplete: this.secondFrame});
        },
        collapseStartAnimation: function(){
        	var collapse = new TimelineMax();
            collapse.to("#expanded-banner", 0.3, {opacity:0, display: 'none'});

            motionLibrary.resetWhenCloseOrExit();
        }
	}
});

/*--- stats functions init --*/

var duration = document.getElementById("duration"),
    totalDuration = document.getElementById("totalDuration"),
    repeatCount = document.getElementById("repeatCount"),
    totalRepeatCount = document.getElementById("totalRepeatCount"),
    time = document.getElementById("time"),
    totalTime = document.getElementById("totalTime"),
    progress = document.getElementById("progress"),
    totalProgress = document.getElementById("totalProgress"),
    restart = document.getElementById("restart"),
    pause = document.getElementById("pause"),
    play = document.getElementById("play"),
    reps = 0;

function updateReps() {
  reps++;
  repeatCount.innerHTML = reps;
}

function updateStats() {
  time.innerHTML = tl.time().toFixed(2);
  totalTime.innerHTML = tl.totalTime().toFixed(2);
  progress.innerHTML = tl.progress().toFixed(2);
  totalProgress.innerHTML = tl.totalProgress().toFixed(2);
  slider.value = tl.totalProgress().toFixed(2);
}

function reset() {
  reps = 0;
  duration.innerHTML = tl.duration().toFixed(2);
  totalDuration.innerHTML = tl.totalDuration().toFixed(2);
  repeatCount.innerHTML = reps;
  totalRepeatCount.innerHTML = tl.repeat();
}

function restart() {
  TweenLite.to(restart, 0.4, {autoAlpha:1})
}
function onEnterFrame(){
  if (estado=="ff") {
    console.log("ff")
  tl.seek(tl.totalTime()+0.01, false);
	} else if(estado=="fb"){
    console.log("fb")
      tl.seek(tl.totalTime()-0.01, false);
  } else {
    console.log("off")
    clearInterval(timer);
  }
}
restart.onclick = function() {
  reset();
  TweenLite.set(restart, {autoAlpha:0})
  tl.restart();
}
//
pause.onclick = function() {
  //TweenLite.set(pause, {autoAlpha:0})
  tl.pause();
}
play.onclick = function() {
  tl.play();
}
prev.onmousedown = function()  {
  console.log("prev.onmousedown")
  estado = "fb";
	timer = setInterval('onEnterFrame()',(100/fps));
}
prev.onmouseup = function() {
  console.log("prev.onmouseup")
  estado = "off";
  onEnterFrame()
}
next.onmousedown = function() {
  console.log("next.onmousedown")
  estado = "ff";
	timer = setInterval('onEnterFrame()',(100/fps));
}
next.onmouseup = function() {   
  console.log("next.onmouseup")
  estado = "off";
  onEnterFrame()
}
goto.onclick = function() {
  reset();
  tl.seek(input.value, false);
}
    input.max = tl.duration().toFixed(2);
 		//slider.value = tl.duration().toFixed(2);	
function showVal(newVal){
	tl.seek(newVal, false);
  console.log(newVal)
}
reset();
/*--- stats functions end --*/
