const cdns = require('../cdn-commonjs.js');

jest.mock('../cdn-commonjs.INJECTOR');

test(`tests INJECTOR switch statement for insertion THREEJS into body of DOM`, () => {
	//set up a document
	document.innerHTML = 
	`
		<html>
			<head>
			</head>
			<body>
			</body>
		</html>	
	`;
	const $ = require('jquery');
	const cdns = require('../cdn-commonjs.js');

	// tell cdn-commonjs.js INJECTOR method to invoke 
	// switch case = THREEJS
	cdns.mockImplementation(INJECTOR => {
		INJECTOR(THREEJS => {
			

		})
	}
});
