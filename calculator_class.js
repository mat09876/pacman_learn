var InputBox = function() {
	this.value = '';
	this.dom = document.createElement('div');
	this.dom.className = 'matt-cool-cal__display';
	// this.dom.innerHTML = 'display';
}

InputBox.prototype.addText = function(text) {
	this.value += text;
	this.dom.innerHTML = this.value;
};

function input() {
	document.getElementByClass('input').innerHTML = this.text;
}

// Calculator Class
var Cal = function() {
	this.buttonConf = {
		rad: {
			text: 'Rad',
			bg: 'dark',
			value: 'rad',
			isOperater: !0,
			operator: 'rad'
		},
		lots_of_dots: {
			text: 'dots',
			bg: 'light',
			value: 'dots',
			isOperater: !1,
			operator: 'lots_of_dots'
		},
		xl: {
			text: 'x!',
			bg: 'dark',
			value: 'xl',
			isOperater: !0,
			operator: 'xl'
		},
		bracket_open: {
			text: '(',
			bg: 'dark',
			value: '(',
			isOperater: !1,
			operator: 'bracket_open'
		},
		bracket_close: {
			text: ')',
			bg: 'dark',
			value: ')',
			isOperater: !1,
			operator: 'bracket_close'
		},
		percentage: {
			text: '%',
			bg: 'dark',
			value: '%',
			isOperater: !0,
			operator: 'percentage'
		},
		clear: {
			text: 'AC',
			bg: 'dark',
			value: 'AC',
			isOperater: !0,
			operator: 'clear'

		},
		Inv: {
			text: 'Inv',
			bg: 'dark',
			value: 'Inv',
			isOperater: !0,
			operator: 'Inv'
		},
		sin: {
			text: 'sin',
			bg: 'dark',
			value: 'sin',
			isOperater: !0,
			operator: 'sin'
		},
		ln: {
			text: 'ln',
			bg: 'dark',
			value: 'ln',
			isOperater: !0,
			operator: 'ln'
		},
		seven: {
			text: '7',
			bg: 'light',
			value: '7',
			isOperater: !1,
			operator: 'seven'
		},
		eight: {
			text: '8',
			bg: 'light',
			value: '8',
			isOperater: !1,
			operator: 'eight'

		},
		nine: {
			text: '9',
			bg: 'light',
			value: '9',
			isOperater: !1,
			operator: 'nine'
		},
		divide: {
			text: '&#xF7',
			bg: 'dark',
			value: '/',
			isOperater: !0,
			operator: 'divide'
		},
		Pi: {
			text: '&#960',
			bg: 'dark',
			value: 'pi',
			isOperater: !0,
			operator: 'pi'
		},
		cos: {
			text: 'cos',
			bg: 'dark',
			value: 'cos',
			isOperater: !0,
			operator: 'cos'
		},
		log: {
			text: 'log',
			bg: 'dark',
			value: 'log',
			isOperater: !0,
			operator: 'log'

		},
		four: {
			text: '4',
			bg: 'light',
			value: '4',
			isOperater: !1,
			operator: 'four'
		},
		five: {
			text: '5',
			bg: 'light',
			value: '5',
			isOperater: !1,
			operator: 'five'
		},
		six: {
			text: '6',
			bg: 'light',
			value: '6',
			isOperater: !1,
			operator: 'six'
		},
		multiply: {
			text: 'x',
			bg: 'dark',
			value: 'x',
			isOperater: !0,
			operator: 'multiply'
		},
		Irrational_Number: {
			text: 'e',
			bg: 'dark',
			value: 'e',
			isOperater: !0,
			operator: 'Irrational_Number'
		},
		tan: {
			text: 'tan',
			bg: 'dark',
			value: 'tan',
			isOperater: !0,
			operator: 'tan'
		},
		Square_Root: {
			text: '&#8730;',
			bg: 'dark',
			value: 'Square_Root',
			isOperater: !0,
			operator: 'Square_Root'
		},
		one: {
			text: '1',
			bg: 'light',
			value: '1',
			isOperater: !1,
			operator: 'one'
		},
		two: {
			text: '2',
			bg: 'light',
			value: '2',
			isOperater: !1,
			operator: 'two'
		},
		three: {
			text: '3',
			bg: 'light',
			value: '3',
			isOperater: !1,
			operator: 'three'
		},
		minus: {
			text: '-',
			bg: 'dark',
			value: '-',
			isOperater: !0,
			operator: 'minus'
		},
		rad: {
			text: 'Rad',
			bg: 'light',
			value: 'rad',
			isOperater: !0,
			operator: 'rad'
		},
		Ans: {
			text: 'Ans',
			bg: 'dark',
			value: 'Ans',
			isOperater: !0,
			operator: 'Ans'
		},


		EXP: {
			text: 'EXP',
			bg: 'dark',
			value: 'EXP',
			isOperater: !0,
			operator: 'EXP'
		},



		xy: {
			text: 'xy',
			bg: 'dark',
			value: 'xy',
			isOperater: !0,
			operator: 'xy'
		},
		zero: {
			text: '0',
			bg: 'light',
			value: '0',
			isOperater: !1,
			operator: 'zero'
		},


		dot: {
			text: '.',
			bg: 'light',
			value: 'dot',
			isOperater: !1,
			operator: '.'
		},
		equals: {
			text: '=',
			bg: 'blue',
			value: 'equals',
			isOperater: !0,
			operator: 'equals'
		},
		addition: {
			text: '+',
			bg: 'dark',
			value: 'addition',
			isOperater: !0,
			operator: 'add'
		}

	}
	this.parent = document.querySelector('.matt-cool-cal');
	this.display = null;
	this.buttons = [];
	this.values = [];
	this.operator = '';
	this.toClear = false;

	this.init();
};
Cal.prototype.reset = function() {
	this.values = [];
	this.operator = '';
};

Cal.prototype.clearDisplay = function() {
	this.display.dom.innerHTML = '';
};

Cal.prototype.init = function() {
	this.initDisplayArea();
	this.initButtons();
	this.values = [];
	this.operator;
	this.settings();
};

Cal.prototype.initDisplayArea = function() {
	var display = new InputBox();
	this.display = display;
	this.parent.appendChild(display.dom);
};

Cal.prototype.initButtons = function() {
	var frag = document.createDocumentFragment();
	var temp;
	var btn;
	var c = 0;
	var btnsWrap;
	var btnWrap;
	for (var i in this.buttonConf) {
		if (c % 7 === 0) {
			btnsWrap = document.createElement('div');
			btnsWrap.className = 'btns-wrap';
			this.parent.appendChild(btnsWrap);
		}

		if (this.buttonConf.hasOwnProperty(i)) {
			btnWrap = document.createElement('div');
			btnWrap.className = 'btn-wrap';
			temp = this.buttonConf[i];
			//console.log(temp);
			btn = new CalBtn(temp);
			btn.cal = this;
			btnWrap.appendChild(btn.dom);
			btnsWrap.appendChild(btnWrap);
		}
		c++;

	}
	// this.parent.appendChild(frag);
	//console.log(this.parent);
};

Cal.prototype.settings = function() {};

Cal.prototype.rad = function(x, y) {
	var sum = x + y;
	this.display.dom.innerHTML = sum;
	return sum;
};

Cal.prototype.xl = function(x) {
	//var value = % * ;
	// console.log(x);
	var r = x,
		i = x - 1;
	for (; i > 0; i--) {
		r *= i;
	}

	this.display.dom.innerHTML = r;
	return r;
};

Cal.prototype.percentage = function(x, y) {
	var sum = x % y;
	this.display.dom.innerHTML = sum;
	return sum;
};

Cal.prototype.clear = function(x, y) {
	window.location.reload();
};

Cal.prototype.Inv = function(x, y) {
	var sum = x + y;
	this.display.dom.innerHTML = sum;
	return sum;
};

Cal.prototype.sin = function(x, y) {
	var sum = x + y;
	this.display.dom.innerHTML = sum;
	return sum;
};

Cal.prototype.ln = function(x, y) {
	var sum = x + y;
	this.display.dom.innerHTML = sum;
	return sum;
};

Cal.prototype.divide = function(x, y) {
	var sum = x / y;
	this.display.dom.innerHTML = sum;
	return sum;
};

Cal.prototype.pi = function(x, y) {
	var sum = x + y;
	this.display.dom.innerHTML = sum;
	return sum;
};

Cal.prototype.cos = function(x, y) {
	var sum = x % y;
	this.display.dom.innerHTML = sum;
	return sum;
};

Cal.prototype.log = function(x, y) {
	var sum = x % y;
	this.display.dom.innerHTML = sum;
	return sum;
};

Cal.prototype.multiply = function(x, y) {
	var sum = x * y;
	this.display.dom.innerHTML = sum;
	return sum;
};

Cal.prototype.Irrational_Number = function(x, y) {
	var sum = x + y;
	this.display.dom.innerHTML = sum;
	return sum;
};

Cal.prototype.tan = function(x, y) {
	var sum = x + y;
	this.display.dom.innerHTML = sum;
	return sum;
};

Cal.prototype.Square_Root = function(x, y) {
	var sum = x + y;
	this.display.dom.innerHTML = sum;
	return sum;
};


Cal.prototype.minus = function(x, y) {
	var sum = x - y;
	this.display.dom.innerHTML = sum;
	return sum;
};

Cal.prototype.Ans = function(x, y) {
	var sum = x / y;
	this.display.dom.innerHTML = sum;
	return sum;
};


Cal.prototype.EXP = function(x, y) {
	var sum = x / y;
	this.display.dom.innerHTML = sum;
	return sum;
};



Cal.prototype.xy = function(x, y) {
	var r = x * y;
	this.display.dom.innerHTML = r;
	return r;
};

Cal.prototype.add = function(x, y) {
	var sum = x + y;
	this.display.dom.innerHTML = sum;
	return sum;
};

Cal.prototype.doMath = function() {
	this[this.operator].apply(this, this.values);
};

// Calculator Button Class
var CalBtn = function(conf) {
	this.text = conf.text || 'n/a';
	this.color = null;
	this.bg = conf.bg || '#ccc';
	this.dom = null;
	this.value = conf.value || 'n/a',
		this.cal = null;
	this.isOperater = conf.isOperater;
	this.operator = this.isOperater ? conf.operator : null;
	this.init();
};

CalBtn.prototype.init = function() {
	//console.log(this.conf);
	var baseCls = 'matt-cool-cal__cal__btn';
	this.dom = document.createElement('a');
	this.dom.onclick = this._onClickMe.bind(this);
	this.dom.innerHTML = this.text;
	this.dom.className = baseCls + ' ' + baseCls + '--' + this.bg;
};

CalBtn.prototype._onClickMe = function() {
	if (this.cal.toClear) {
		this.cal.clearDisplay();
		this.cal.toClear = false;
	}
	if (this.text === '=') {
		this.cal.doMath();
		this.cal.reset();
		this.cal.toClear = true;
		return;
	}

	this.cal.display.addText(this.text + ' ');
 	if (this.isOperater) {
		this.cal.operator = this.operator;
	} else {
		this.cal.values.push(parseFloat(this.text));
	}

};

var myCal = new Cal();