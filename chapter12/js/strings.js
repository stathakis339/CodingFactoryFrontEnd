let s1 = String(12) // String coercion
let s2 = new String("Hello") // return String object
let s3 = "Coding Factory"
let s4 = 'Hello World!'

// Back ticks - template Literals
let s5 = `
Coding
Factory
AUEB
`

let redHeart = "\uD83D\uDC97"
for (let ch of redHeart) {
    console.log(ch)
}

let [codingFactory] = [...redHeart]

console.log("Coding Factory" + codingFactory)

for (let i = 0; i < redHeart.length; i++) {
    console.log(redHeart[i])
}