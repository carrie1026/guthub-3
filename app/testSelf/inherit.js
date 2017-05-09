function Animal (name) {
	this.name = name || 'Animal'

	this.sleep = function () {
		console.log(this.name + '正在睡觉')
	}
}
Animal.prototype.eat = function (food) {
	console.log(this.name + '正在吃' + food)
}

//原型继承
function Cat (){}
Cat.prototype = new Animal()
Cat.prototype.name = 'Billy';

var cat = new Cat()

//构造继承
function Cat(name) {
	Animal.call(this)
	this.name = name || 'Billy';
}

var cat = new Cat()

//组合继承
function Cat(name) {
	Animal.call(this);
	this.name = name || 'Billy';
}
Cat.prototype = new Animal()

var cat = new Cat()

//实例继承
function Cat(name) {
	var instance = new Animal();
	instance.name = name || 'Billy';
	return instance;
}

var cat = new Cat()

//拷贝继承
function Cat (name) {
	var animal = new Animal();
	for (var s in animal){
		Cat.prototype[p] = animal[p]
	}
	Cat.prototype.name = name || 'Billy';
}
var cat = new Cat()


//寄生组合继承
function Cat (name) {
	Animal.call(this);
	this.name = name || 'Billy';
}

(function () {
	var Super = function(){};
	Super.prototype = Animal.prototype

	Cat.prototype = new Super()
})()

var cat = new Cat()

//ES6类继承
class Animal {
     constructor () {
          this.name = 'Animal'
     }
     sleep() {
          console.log(this.name + '正在睡觉')
     }
}

class Cat extends Animal {
     constructor () {
         super()
         this.name = 'Tom'
     }
     eat (food) {
         console.log(this.name + '正在吃' + food)
     }
}

let cat = new Cat()
