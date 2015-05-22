//JS code goes here

var banner = new Banner({
	type: "expanding",
	expand: true,
	finalExpandSize: [0,0,320,460],
	hotspotClose: ["#generalClose"],
	hotspotExpand: ["#collapse-banner"],
	elementsToRegister: [
		{eventType: "click", element: ".blue", functionToCall: "tapBlue"},
		{eventType: "click", element: ".orange", functionToCall: "tapOrange"},
		{eventType: "click", element: ".violet", functionToCall: "tapViolet"},
	],
	customFunctions: {
		tapBlue: function(){
			console.log("Blue Tapped");
		},
		tapOrange: function(){
			console.log("Orange Tapped");
		},
		tapViolet: function(){
			console.log("Violet Tapped");
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
			var tlDevice = new TimelineMax();

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

						.to("#f3_txt1", 0.7, {delay:3, left:370, opacity:0, ease:Power2.easeOut})
						.to("#f3_txt2", 0.7, {delay:3, left:370, opacity:0, ease:Power2.easeOut}, "-=3.7")
						.to("#f3_txt3", 0.7, {delay:3, left:370, opacity:0, ease:Power2.easeOut}, "-=3.7")
						.to(".device_fte_frame", 0.7, {delay:3, top:"100%", ease:Power2.easeOut}, "-=3.7")

						//Frame 4
						.to("#f4_txt1", 1, {left:9, opacity:1, ease:Power2.easeOut}, "-=0.5")
						.to("#f4_txt2", 1, {left:9, opacity:1, ease:Power2.easeOut}, "-=1")

						.to(".blue", 0.7, {opacity:1}, "-=0.5")
						.to(".orange", 0.5, {opacity:1}, "-=0.3")
						.to(".violet", 0.3, {opacity:1}, "-=0.1")

						.to("#f4_txt3", 0.4, {opacity:1, top:"80%",ease:Power2.easeOut})

						.to("#f4_txt1", 0.7, {delay:3, left:370, opacity:0, ease:Power2.easeInOut})
						.to("#f4_txt2", 0.7, {delay:3, left:370, opacity:0, ease:Power2.easeInOut}, "-=3.7")
						.to("#f4_txt3", 0.4, {delay:3, opacity:0, top:"90%",ease:Power2.easeInOut}, "-=3.3")
						
						.to(".blue", 0.5, {delay:3, opacity:0}, "-=3.5")
						.to(".orange", 0.5, {delay:3, opacity:0}, "-=3.5")
						.to(".violet", 0.5, {delay:3, opacity:0}, "-=3.5")

						//Frame 5
						.to(".device_fte_frame", 1, {top:"50%", ease:Power2.easeInOut})
						.to("#Droid_logo", 0.7, {top:"35%", opacity:1, ease:Power2.easeInOut})
						.to("#f5_txt1", 0.7, {top:"28%", opacity:1, ease:Power2.easeInOut}, "-=0.7")

						//Frame 6
						.to(".device_fte_frame", 1, {rotationY:0, ease:Power2.easeInOut, transformOrigin:"center center"})
						.to(".device_fte", 0.1, {opacity: 1}, "-=0.5")
						.to(".device_bck", 0.1, {opacity: 0}, "-=0.5")
						.to("#lifestyle", 0.1, {opacity: 0}, "-=1")

						//Frame 7
						.set(".device_fte_frame", {perspective:370})
						.to(".device_fte", 1, {scaleX:0.95, rotationY:-30, scaleY:1, ease:Power2.easeOut, transformOrigin:"center center"})
						.to(".shadow", 1, {scaleX:0.95, rotationY:-30, scaleY:1, ease:Power2.easeOut, transformOrigin:"center center"}, "-=1")
						.to(".device_fte", 0.3, {width:237, ease:Power0.easeOut}, "-=0.8")

						

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
