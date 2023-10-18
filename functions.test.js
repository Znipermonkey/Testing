const {
    returnTwo, 
    greeting, 
    add,
    subtract,
    mutiply,
    divide
} = require('./functions')


test('should run', () => expect(returnTwo()).toBe(2))

describe('testing greeting function', () => {
    test('name is James', () =>{
        expect(greeting('James')).toEqual("Hello, James.")
    })
    test('Name is Jill', () =>{
        expect(greeting('Jill')).toEqual("Hello, Jill.")
      })
    test('chect input type', ()=>{
        expect(typeof greeting(33)).toBe('string')
    })
    test('chect input type with falsey value', ()=>{
        expect(typeof greeting(false)).toBe('string')
    })
  })

describe('Math Functions', () => {
  describe('test add function', () => {
    test('add 1 and 2', () =>{
      expect(add(1, 2)).toEqual(3)
    })
    test('add 5 and 9', () =>{
        expect(add(5, 9)).toEqual(14)
    })
    test('chect input type', ()=>{
        expect(typeof add('33', "6867vv")).toBe('number')
    })
    test('chect input type with falsey value', ()=>{
        expect(typeof add(false, true)).toBe('number')
    })
  })
  describe('test subtract function', () => {
    test('subtract 1 and 2', () =>{
      expect(subtract(1, 2)).toEqual(-1)
    })
    test('subtract 5 and 9', () =>{
        expect(subtract(5, 9)).toEqual(-4)
      })
  })
  describe('test multiply function', () => {
    test('multiply 1 and 2', () =>{
      expect(mutiply(1, 2)).toEqual(2)
    })
    test('multiply 5 and 9', () =>{
        expect(mutiply(5, 9)).toEqual(45)
      })
  })
  describe('test divide function', () => {
    test('divide 1 and 2', () =>{
      expect(divide(3 , 1, 834984956934156)).toEqual(3)
    })
    test('divide 5 and 9', () =>{
        expect(divide(90, 9)).toEqual(10)
      })
  })
})