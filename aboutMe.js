const personalInformation = {
    name: 'Gloria Morales',
    age: 35,
    born: 'Colombia',
    living: 'Sweden',
    Hobbies: 'playing badminton, cooking and walking in the forest.'
}


const fetchData = (displayData) => {
    console.log('Hi, my name is ' + personalInformation.name)
    setTimeout(() => {
        const age = 'I am ' + personalInformation.age + ' years old.'
        displayData(age)
    }, 2000)

    setTimeout(() => {
        const location = 'I am from '+ personalInformation.born +', but I am living in ' + personalInformation.living
        displayData(location)
    }, 3000)

    setTimeout(() => {
        const hobbies = 'My hobbies are ' + personalInformation.Hobbies
        displayData(hobbies)
    }, 4000)
}

// the fallback function
const displayData = (data) => {
    console.log(data)
}

fetchData(displayData);
