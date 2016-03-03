// Calculator Class
	var Cal = function() {
		this.buttonConf = {
			rad: {
				text: 'Rad'
			},
			lots_of_dots: {
				text: 'nothing'
			},
			xl: {
				text: 'xl'
			},
			bracket_open: {
				text: '('
			},
			bracket_close: {
				text: ')'
			},
			percentage: {
				text: '%'
			},
			clear: {
				text: 'AC'
			},
			Inv: {
				text: 'Inv'
			},
			sin: {
				text: 'sin'
			},
			ln: {
				text: 'ln'
			},
			seven: {
				text: '7'
			},
			eight: {
				text: '8'
			},
			nine: {
				text: '9'
			},
			divide: {
				text: '&#xF7'
			},
			Pi: {
				text: '&#960'
			},
			cos: {
				text: 'cos'
			},
			log: {
				text: 'log'
			},
			four: {
				text: '4'
			},
			five: {
				text: '5'
			},
			six: {
				text: '6'
			},
			multiply: {
				text: 'x'
			},
			Irrational_Number: {
				text: 'e'
			},
			tan: {
				text: 'tan'
			},
			Square_Root: {
				text: '√'
			},
			one: {
				text: '1'
			},
			two: {
				text: '2'
			},
			three: {
				text: '3'
			},
			minus: {
				text: '-'
			},
			rad: {
				text: 'Rad'
			},
			Ans: {
				text: 'Ans'
			},
			
			
			EXP: {
				text: 'EXP'
			},
			
			rad: {
				text: 'Rad'
			},
			
			xy: {
				text: 'xy'
			},
			zero: {
				text: '0'
			},
			
			
			dot: {
				text: '.'
			},	
			equals: {
				text: '='
			},
			addition : {
				text: '+'
			}


		}	
		this.parent = document.querySelector('.matt-cool-cal');
		this.display = null;
		this.buttons = [];
		
		this.init();
	};

	function input() {
		document.getElementByClass('input').innerHTML = this.text;
	}

	Cal.prototype.init = function() {
		this.initDisplayArea();
		this.initButtons();
		this.settings();
	};

	Cal.prototype.initDisplayArea = function() {};

	Cal.prototype.initButtons = function() {
		var frag = document.createDocumentFragment();
		var temp;
		var btn;
		var c = 0;
		var btnsWrap;
		var btnWrap;
		for(var i in this.buttonConf) {
			if(c % 7 === 0) {
				btnsWrap = document.createElement('div');
				btnsWrap.className = 'btns-wrap';
				this.parent.appendChild(btnsWrap);
			}

			if(this.buttonConf.hasOwnProperty(i)) {
				btnWrap = document.createElement('div');
				btnWrap.className = 'btn-wrap';
				temp = this.buttonConf[i];
				btn = new CalBtn(temp);
				btnWrap.appendChild(btn.dom);
				btnsWrap.appendChild(btnWrap);
			}
			c++;

		}
		// this.parent.appendChild(frag);
		console.log(this.parent);
	};

	Cal.prototype.settings = function() {};


	// Calculator Button Class
	var CalBtn = function(conf) {
		this.text = conf.text || 'n/a';
		this.color = null;
		this.dom = null;
		this.init();
	};

	CalBtn.prototype.init = function() {
		this.dom = document.createElement('a');
		this.dom.onclick = this._onClickMe.bind(this);
		this.dom.innerHTML = this.text;
		this.dom.className = 'matt-cool-cal__cal__btn';
	};

	CalBtn.prototype._onClickMe = function() {
		console.log(this.text);
	};

	var myCal = new Cal();
