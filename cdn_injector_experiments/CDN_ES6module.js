/**
 * @WHAT Easily add CDN links to your dev docs and snippets
 * @HOW
 * 			@STEP_1 Import this module into your module
 * 			@STEP_2 Call module with:
 *					@param Path to HTML file you want links in
 *					@param JS library you want to link
 *								@CDN will be auto-appended --
 *											<link> to <head>
 *											<script> end of <body>
 */

module.exports = {
	SELECTIFY: function (package) {
		let selection;
		switch (package) {
			case 'THREEJS':
				selection = this.THREEJS();
				break;
			case 'THREEJS_SUITE':
				selection = this.THREEJS_SUITE();
				break;
			case 'BOOTSTRAP':
				selection = this.BOOTSTRAP();
				break;
			default:
				return `Not found, did you capitalize the package name?
            Current INJECTOR options:
              THREEJS
              THREEJS_MODULAR
              BOOTSTRAP
              JQUERY
              GSAP_MIN
              GSAP_DRAGGABLE
              GSAP_SUITE
              PIXIJS
            `;
				break;
		}
	},
	CDN_LOADER: function (package, injectify) {
		this.linkname = linkname;
		this.injectify = injectify;
		`${this.linkname}(${this.injectify})`;
	},
	BOOTSTRAP: function (injectify) {
		let pin = `
      <!-- Bootstrap CSS -->
		<link
			rel="stylesheet"
			href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
			integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
			crossorigin="anonymous"
		/> 
		`;
		if (injectify) {
			$('head').append(pin);
		} else {
			return pin;
		}
	},
	JQUERY: function (injectify) {
		let pin = `
<!-- jQuery -->
<script
	src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
	integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
	crossorigin="anonymous"
></script>
 `;
		if (injectify) {
			$('head').append(pin);
		} else {
			return pin;
		}
	},
	POPPERJS: function (injectify) {
		let pin = `
<!-- popper.js -->
<script
	src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
	integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
	crossorigin="anonymous"
></script>
 `;
		if (injectify) {
			$('head').append(pin);
		} else {
			return pin;
		}
	},
	BOOTSTRAPJS: function (injectify) {
		let pin = `
<!-- bootstrap.js -->
<script
	src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
	integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
	crossorigin="anonymous"
></script>
 `;
		if (injectify) {
			$('head').append(pin);
		} else {
			return pin;
		}
	},
	GREENSOCKS: function (injectify) {
		let pin = `
<!-- gsap3.1 -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.1.1/gsap.min.js"></script>
 `;
		if (injectify) {
			$('head').append(pin);
		} else {
			return pin;
		}
	},
	GREENSOCKS_CSS_PLUGIN: function (injectify) {
		let pin = `
<!-- gsap CSSRulePlugin -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.1.1/CSSRulePlugin.min.js"></script>
 `;
		if (injectify) {
			$('head').append(pin);
		} else {
			return pin;
		}
	},
	GREENSOCKS_DRAGGABLE: function (injectify) {
		let pin = `
<!-- gsap draggable.js -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.1.1/Draggable.min.js"></script>
 `;
		if (injectify) {
			$('head').append(pin);
		} else {
			return pin;
		}
	},
	GREENSOCKS_THE_REST: function (injectify) {
		let pin = `
<!-- gsap easelplugin -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.1.1/EaselPlugin.min.js"></script>
<!-- gsap motionpath -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.1.1/MotionPathPlugin.min.js"></script>
<!-- pixiplugin -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.1.1/PixiPlugin.min.js"></script>
<!-- gsap textplugin -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.1.1/TextPlugin.min.js"></script>
<!-- gsap  scrollToPlugin-->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.1.1/ScrollToPlugin.min.js"></script>
<!-- gsap EaselPack -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.1.1/EasePack.min.js"></script>
<!--  -->
 `;
		if (injectify) {
			$('head').append(pin);
		} else {
			return pin;
		}
	},
	THREEJS: function (injectify) {
		`
	<!-- three.js version 110  -->
<script
	src="https://cdnjs.cloudflare.com/ajax/libs/three.js/110/three.module.js"
	type="module"
></script>
    `;
	},
	THREEJS_MODULAR: function (injectify) {
		return `
      <!-- three.js version 110  -->
      <script
	      src="https://cdnjs.cloudflare.com/ajax/libs/three.js/110/three.module.js"
	      type="module"
></script>

    `;
	},
};
