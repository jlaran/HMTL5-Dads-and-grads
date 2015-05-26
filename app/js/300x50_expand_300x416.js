//JS code goes here

var banner = new Banner({
	type: "expand",
	expand: true,
	finalExpandSize: [0,0,320,460],
	hotspotClose: ["#generalClose"],
	hotspotExpand: ["#collapse-banner"],
	elementsToRegister: [
		{eventType: "click", element: ".color", functionToCall: "tapped"},
		{eventType: "click", element: ".orange", functionToCall: "tapped"},
		{eventType: "click", element: ".violet", functionToCall: "tapped"},
		{eventType: "click", element: ".secondBlue", functionToCall: "tapped"},
		{eventType: "click", element: ".secondViolet", functionToCall: "tapped"},
		{eventType: "click", element: ".secondOrange", functionToCall: "tapped"},
		{eventType: "click", element: "#ff-cta", functionToCall: "exitShop"}
	],
	customFunctions: {
		tapped: function(){
			colorArray = ["blue", "orange", "violet"];

			color = this.className.split(" ")[1];

			var indexOfColor = colorArray.indexOf(color);
			colorArray.splice(indexOfColor, 1);

			var colorizeSVG = document.querySelectorAll(".colorizeSVG");
			var outputColor;

			switch(color) {
				case "blue":
					outputColor = "#006699";
					Enabler.counter('Color Blue Selected');
					break;
				case "orange":
					outputColor = "#FF3300";
					Enabler.counter('Color Orange Selected');
					break;
				case "violet":
					outputColor = "#C0208F";
					Enabler.counter('Color Violet Selected');
					break;
				default:
					break;
			}

			for (var i = 0; i < colorizeSVG.length; i++) {
				colorizeSVG[i].setAttribute("fill", outputColor);
			};

			document.querySelectorAll("#finalBullets .color")[0].parentElement.style.display = "none";
			document.querySelectorAll("#finalBullets .color")[1].parentElement.style.display = "none";
			document.querySelectorAll("#finalBullets .color")[2].parentElement.style.display = "none";

			document.querySelectorAll("#finalBullets .color")[0].parentElement.classList.remove("firstChild");
			document.querySelectorAll("#finalBullets .color")[1].parentElement.classList.remove("firstChild");
			document.querySelectorAll("#finalBullets .color")[2].parentElement.classList.remove("firstChild");

			var bulletsLeft = document.getElementById("finalBullets");
			
			document.querySelector("#finalBullets ."+colorArray[0]).parentElement.style.display = "inline-block";
			document.querySelector("#finalBullets ."+colorArray[1]).parentElement.style.display = "inline-block";

			document.querySelector("#finalBullets ."+colorArray[0]).parentElement.classList.add("firstChild");

			if(firstTime == true){
				tlContinue.restart();
				firstTime = false;
			} else {
				tlContinue.seek("frame5");
			}
		},
		exitShop: function(){
			Enabler.requestCollapse();
		    Enabler.exit('ClickTag Shop Button');
		    motionLibrary.resetWhenCloseOrExit();

		    var collapse = new TimelineMax();
            collapse.to("#expanded-banner", 0.3, {opacity:0, display: 'none'});
            motionLibrary.resetWhenCloseOrExit();
		}
	},
	animations: {
		firstFrame : function(){
			var collapsedText = new TimelineMax();
				collapsedText.to("#collapse-banner h1", 0.2, {opacity:1})
							.to("#collapse-banner h2", 0.2, {opacity:1}, "-=0.2")
							.to("#collapse-banner span", 0.5, {opacity: 1});
		},
		secondFrame : function(){
			tlDevice = new TimelineMax();
			tlContinue = new TimelineMax();

			firstTime = true;

				//Frame 1
				tlDevice.to("#logo", 1, {opacity:1}, 0)
						.set("#f1", {display:"block"})
						.set(".device_fte_frame", {scale:0.6})
						.to(".device_fte_frame", 1, {scale:0.6, top:"-9%", opacity:1, ease:Power2.easeOut})
						.to("#f1_txt1", 1, {left:9, opacity:1, ease:Power2.easeOut}, "-=0.2")
						.to("#f1_txt2", 1, {left:9, opacity:1, ease:Power2.easeOut}, "-=1")
						.to("#f1_txt1", 0.7, {delay:2, left:370, opacity:0, ease:Power2.easeInOut})
						.to("#f1_txt2", 0.7, {delay:2, left:370, opacity:0, ease:Power2.easeInOut}, "-=2.7")
						.set("#f1", {display:"none"})

						//Frame 2
						.addLabel("frame2")
						.set("#f2", {display:"block"})
						.to("#f2_txt1", 1, {left:9, opacity:1, ease:Power2.easeOut})
						.to("#f2_txt2", 1, {left:9, opacity:1, ease:Power2.easeOut}, "-=1")
						.to("#f2_txt1", 0.7, {delay:2, left:370, opacity:0, ease:Power2.easeInOut})
						.to("#f2_txt2", 0.7, {delay:2, left:370, opacity:0, ease:Power2.easeInOut}, "-=2.7")
						.set("#f2", {display:"none"})

						//Frame 3
						.addLabel("frame3")
						.set("#f3", {display:"block"})
						.to(".device_fte_frame", 1, {rotationY:180, ease:Power2.easeInOut, transformOrigin:"center center"}, "-=0.5")
						.to(".device_fte", 0.1, {opacity: 0}, "-=0.5")
						.to(".device_bck", 0.1, {opacity: 1}, "-=0.5")
						.to(".device_fte_frame", 1, {scale:1, top:"60%", ease:Power2.easeOut}, "-=0.5")

						.to("#f3_txt1", 1, {left:9, opacity:1, ease:Power2.easeOut})
						.to("#f3_txt2", 1, {left:9, opacity:1, ease:Power2.easeOut}, "-=1")
						.to("#f3_txt3", 1, {left:9, opacity:1, ease:Power2.easeOut}, "-=1")

						.to("#f3_txt1", 0.7, {delay:3, left:370, opacity:0, ease:Power2.easeOut})
						.to("#f3_txt2", 0.7, {delay:3, left:370, opacity:0, ease:Power2.easeOut}, "-=3.7")
						.to("#f3_txt3", 0.7, {delay:3, left:370, opacity:0, ease:Power2.easeOut}, "-=3.7")
						.to(".device_fte_frame", 0.7, {delay:3, top:"100%", ease:Power2.easeOut}, "-=3.7")
						.set("#f3", {display:"none"})

						//Frame 4
						.addLabel("frame4")
						.set("#f4", {display:"block"})
						.to("#f4_txt1", 1, {left:9, opacity:1, ease:Power2.easeOut}, "-=0.5")
						.to("#f4_txt2", 1, {left:9, opacity:1, ease:Power2.easeOut}, "-=1")

						.to(".bullets .blue", 0.7, {opacity:1}, "-=0.5")
						.to(".bullets .orange", 0.5, {opacity:1}, "-=0.3")
						.to(".bullets .violet", 0.3, {opacity:1}, "-=0.1")

						.to("#f4_txt3", 0.4, {opacity:1, top:"80%",ease:Power2.easeOut});

						//-------------------PAUSE-----------------------//

				tlContinue.pause();

				tlContinue.to("#f4_txt1", 0.7, {left:370, opacity:0, ease:Power2.easeInOut})
						.to("#f4_txt2", 0.7, {left:370, opacity:0, ease:Power2.easeInOut}, "-=0.7")
						.to("#f4_txt3", 0.4, {opacity:0, top:"90%",ease:Power2.easeInOut}, "-=0.7")

						.to(".bullets .blue", 0.5, {opacity:0}, "-=0.7")
						.to(".bullets .orange", 0.5, {opacity:0}, "-=0.5")
						.to(".bullets .violet", 0.5, {opacity:0}, "-=0.3")
						.set("#f4", {display:"none"})

						//Frame 5
						.addLabel("frame5")
						.set("#f5", {display:"block"})
						.to(".device_fte_frame", 1, {top:"50%", ease:Power2.easeInOut})
						.to("#Droid_logo", 0.7, {top:"35%", opacity:1, ease:Power2.easeInOut})
						.to("#f5_txt1", 0.7, {top:"28%", opacity:1, ease:Power2.easeInOut}, "-=0.7")
						.to("#f6_txt1", 0.7, {top:"28%", opacity:1, ease:Power2.easeInOut}, "-=0.7")
						.to("#f7_txt1", 0.7, {top:"28%", opacity:1, ease:Power2.easeInOut}, "-=0.7")
						.set("#f5", {display:"none"})

						//Frame 6
						.addLabel("frame6")
						.set("#f6", {display:"block"})
						.to(".device_fte_frame", 1, {delay: 1, rotationY:0, ease:Power2.easeInOut, transformOrigin:"center center"})
						.to(".device_fte", 0.1, {opacity: 1}, "-=0.5")
						.to(".device_bck", 0.1, {opacity: 0}, "-=0.5")
						.to("#lifestyle", 0.1, {opacity: 0}, "-=1")
						.set("#f6", {display:"none"})

						//Frame 7
						.addLabel("frame7")
						.set("#f7", {display:"block"})
						.set(".device_fte_frame", {perspective:370})
						.to(".device_fte", 1, {delay: 0.5, scaleX:0.95, rotationY:-30, scaleY:1, ease:Power2.easeOut, transformOrigin:"center center"})
						.to(".shadow", 1, {scaleX:0.95, rotationY:-30, scaleY:1, ease:Power2.easeOut, transformOrigin:"center center"}, "-=1")
						.to(".device_fte", 0.3, {width:236, ease:Power0.easeOut}, "-=0.7")
						.to("#colorize-fte", 0.3, {width:237, ease:Power0.easeOut}, "-=0.7")

						.to("#f7_txt1", 0.5, {delay:1, top:"23%", opacity:0, ease:Power2.easeInOut}, "-=1.7")
						.to("#Droid_logo", 0.5, {delay:1, top:"30%", opacity:0, ease:Power2.easeOut}, "-=1.5")
						.set("#f7", {display:"none"})

						//Frame 8
						.set("#f8", {display:"block"})
						.to(".device_fte_frame", 1, {top:"-5%", left:"10%", scale:0.45, ease:Power2.easeInOut, transformOrigin:"center right"})
						.to(".shadow", 1, {left:53, top:370, scaleY:3.5, rotationY:-30, ease:Power2.easeOut, transformOrigin:"center center"}, "-=1")
						.to("#f8_txt1", 1, {left:9, opacity:1, ease:Power2.easeOut}, "-=0.5")
						.to("#f8_txt2", 1, {bottom: "2%", opacity:1, ease:Power2.easeOut}, "-=0.5")

						.to("#f8_txt1", 1, {delay:3.5, left:-270, opacity:0, ease:Power2.easeOut})
						.to("#f8_txt2", 1, {delay:3.5, bottom: "-10%", opacity:0, ease:Power2.easeOut}, "-=4.5")
						.set("#f8", {display:"none"})

						//Frame FF
						.set("#ff", {display:"block"})
						.to(".device_fte_frame", 1, {scale:0.6, scaleX:0.55, ease:Power4.easeOut, transformOrigin:"center right"}, "-=1")
						.set("#Droid_logo", {left:"-42%"}, "-=1.7")
						.to("#Droid_logo", 0.7, {delay:1, top: "36%", opacity:1, ease:Power2.easeOut}, "-=1.5")
						.to("#ff-cta", 0.7, {opacity:1}, "-=0.5")
						.to(".bullets .blue", 0.7, {opacity:1}, "-=0.5")
						.to(".bullets .orange", 0.5, {opacity:1}, "-=0.3")
						.to(".bullets .violet", 0.3, {opacity:1}, "-=0.1")
						.to("#ff_txt1", 0.7, {opacity:1}, "-=0.5");

						//stats.setTimeline(tlContinue);
		},
		expandStartAnimation : function(){
            var expand = new TimelineMax();
            expand.to("#expanded-banner", 0.3, {opacity:1, display: 'block', onComplete: this.secondFrame});
        },
        collapseStartAnimation: function(){
        	Enabler.reportManualClose();
        	var collapse = new TimelineMax();
            collapse.to("#expanded-banner", 0.3, {opacity:0, display: 'none'});
            motionLibrary.resetWhenCloseOrExit();
        }
	}
});