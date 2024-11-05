/**
 * Randomizer to select which of my codelings has to present their work
 */


// array of coders
const coders = [
    'Will',
    'Zeek',
    'Charlie',
    'Janjala',
    'Connor',
    'Christopher',
    'Clint',
    'Joshua',
    'Renee',
    'Chloe',
    'Darius',
    'Lachelle',
    'Favor',
    'Trelin'
]

// function to get coder from array
const getCoder =(arr)=> {
    let item

    // if array is empty or every coder has been selected
    if (arr.length == 0) {
        item ='Empty List'
    } else {
        let num = Math.floor(Math.random() * arr.length)

        // randomly selects item and returns single item in an array
        item = arr.splice(num, 1)
    }

    return item
}

// access button
const coderBtn = document.getElementById('coderBtn')

coderBtn.addEventListener('click', ()=> {

    const coderText = document.getElementById('coderText');
    let coder = getCoder(coders)
    coderText.innerText  = coder
})