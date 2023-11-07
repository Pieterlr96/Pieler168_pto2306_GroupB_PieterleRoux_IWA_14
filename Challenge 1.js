let firstName = 'John';
let age = 35;
let hobby = 'Coding';

const logTwice = () => {
  console.log(myHobby())
  console.log(myHobby())
}

function myHobby () {
 return (`Hello, ${firstName} (${age}). I love ${hobby}!`)
}

logTwice()