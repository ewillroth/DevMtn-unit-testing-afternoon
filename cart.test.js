const cart = require('./cart')
const cars = require('./data/cars')

describe('Cart Properties', ()=>{
	it('cart should be an array', ()=>{
		const expectedResult = 'object'
		const actualResult = typeof cart.cart 
		expect(actualResult).toBe(expectedResult)
	})
	it('cart should be empty', ()=>{
		const expectedResult = 0
		const actualResult = cart.cart.length;
		expect(actualResult).toBe(expectedResult);
	})
	it('total should be 0', ()=>{
		const expectedResult = 0
		const actualResult = cart.total
		expect(actualResult).toBe(expectedResult);
	})
	it('total should be a number', ()=>{
		const expectedResult = 'number'
		const actualResult = typeof cart.total
		expect(actualResult).toBe(expectedResult);
	})
})

describe('Cart Methods', ()=>{
	afterEach(function () {
		cart.total = 0
		cart.cart = []
	});

	it('addToCart should increase cart length by 1', ()=>{
		cart.addToCart(cars[0])
		const expectedResult = 1
		const actualResult = cart.cart.length
		expect(actualResult).toBe(expectedResult);
	})

	it('addToCart should add a car to cart', ()=>{
		cart.addToCart(cars[0])
		const expectedResult = cars[0]
		const actualResult = cart.cart[0]
		expect(actualResult).toBe(expectedResult);
	})
	it('addToCart should increase total by the price of the car', ()=>{
		cart.addToCart(cars[1])
		const expectedResult = cars[1].price
		const actualResult = cart.total
		expect(actualResult).toBe(expectedResult);
	})
	it('removeFromCart should decrease cart length by 1', ()=>{
		cart.addToCart(cars[1])
		cart.addToCart(cars[1])
		cart.removeFromCart(0, cart.cart[0].price)
		const expectedResult = 1
		const actualResult = cart.cart.length
		expect(actualResult).toBe(expectedResult);
	})
	it('removeFromCart should maintain the order of the car objects in the cart array', ()=>{
		cart.addToCart(cars[1])
		cart.addToCart(cars[2])
		cart.addToCart(cars[3])
		cart.addToCart(cars[4])
		cart.removeFromCart(2, cart.cart[2].price)
		const expectedResult = [cars[1],cars[2],cars[4]]
		const actualResult = cart.cart
		expect(actualResult).toEqual(expectedResult);
	})
	it('removeFromCart should decrease total by the price of the car removed', ()=>{
		cart.addToCart(cars[1])
		cart.addToCart(cars[2])
		cart.addToCart(cars[3])
		cart.removeFromCart(2, cart.cart[2].price)
		const expectedResult = cars[1].price + cars[2].price
		const actualResult = cart.total
		expect(actualResult).toBe(expectedResult);
	})
	it('checkout should set cart length to 0 and total to 0', ()=>{
		cart.addToCart(cars[1])
		cart.addToCart(cars[2])
		cart.addToCart(cars[3])
		cart.checkout()
		const expectedResult = 0
		const actualResult = cart.cart.length
		expect(actualResult).toBe(expectedResult);
		const expectedResult2 = 0
		const actualResult2 = cart.total
		expect(actualResult2).toBe(expectedResult2);
	})
})