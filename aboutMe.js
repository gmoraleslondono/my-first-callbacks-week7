const DELAY = 1000;

const printName = (callback) => {
    console.log('Hi, my name is Gloria Morales')
    setTimeout(() => callback && callback(), DELAY)
}

const printAge = (callback) => {
    console.log('I am 35 years old.')
    setTimeout(() => callback && callback(), DELAY)
}

const printLocation = (callback) => {
    console.log('I am from Colombia, I am living in Sweden.')
    setTimeout(() => callback && callback(), DELAY)
}

const printHobbies = (callback) => {
    console.log('My hobbies are playing badminton, cooking and walking in the forest.')
    setTimeout(() => callback && callback(), DELAY)
}

printName(() => printAge(() => printLocation(() => printHobbies() )))
