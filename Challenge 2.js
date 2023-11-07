let a = null
let b = null

const add = (a, b, ) => { 
   return   a + b 
}

const multiply = (c) => { 
   return    c
}

function internal() {
	const added = this.add(this.internal.a, this.internal.b)
	const multi = this.multiply(this.internal.c)
	
   const total = added * multi

   console.log(total)
    
}

// Not allowed to change below this

const example1 = {
	internal: {
		a: 2,
		b: 4,
		c: 8,
	},
	add,
	multiply,
  calculate: internal
}

const example2 = {
	internal: {
		a: 2,
		b: 2,
		c: 3,
	},
	add,
	multiply,
  calculate: internal
}

example1.calculate()
example2.calculate()

