let letterword = 'abcdefghijklmnopqrstuvwxyz';
let lettersarray = Array.from(letterword);
lettersarray.forEach(letter => {
    let lettersection = document.querySelector(".lettersection")
    let letterdiv = document.createElement("div")
    letterdiv.innerHTML = letter
    letterdiv.classList = "allletter"
    lettersection.appendChild(letterdiv)
})

let words = {
    programming: ['php' , 'javascript' , 'go' , 'scala' , 'fortran' , 'r' , 'mysql' , 'python'],
    movies: ['prestige' , 'inception' , 'parasite' , 'intersteller' , 'whiplash' , 'memento' , 'coco' , 'up'],
    people: ['albert einstein' , 'hitchcock' , 'alexander' , 'cleopatra' , 'mahatma ghandi'],
    countries: ['syria' , 'palastine' , 'yemen' , 'egypt' , 'bahrain' , 'qatar']
}
let category = Object.keys(words)
let randomcategory = Math.floor(Math.random() * category.length) 
let wordcategory = category[randomcategory]

console.log(category)
console.log(wordcategory)
console.log('----------------------------')

let wordsincategory = words[wordcategory]
console.log(wordsincategory)

let categoryspan = document.querySelector('.category span');
categoryspan.innerHTML = wordcategory

let randomwordincategory = Math.floor(Math.random() * wordsincategory.length)
let wordinrandom = wordsincategory[randomwordincategory]
console.log(wordinrandom)

let wordsplit = wordinrandom.split("")
console.log(wordsplit)
wordsplit.forEach((letter , index) => {
    let guessletterdiv = document.querySelector(".guessletter")
    let guessletterspan = document.createElement("span")
    // guessletterspan.innerHTML = letter
    if(letter === ' '){
        guessletterspan.classList.add("space")
    }
    
    guessletterdiv.appendChild(guessletterspan)
})




let guessletterspan = document.querySelectorAll(".guessletter span")
let mistake = 0;
let show = document.querySelectorAll('.hangmanshape .man div')

document.addEventListener("click" , el => {
    if(el.target.className === 'allletter'){
        el.target.classList.add('clicked')
        let statues = false
        wordsplit.forEach((letter,index) => {
            if(wordsplit[index] === el.target.innerHTML){
                statues = true
                guessletterspan[index].innerHTML = wordsplit[index]
                document.querySelector('.true').play()
            }
        })        
        if(statues !== true){
            mistake++;
            document.querySelectorAll('.hangmanshape .shape div:not(.mane , .base) ').forEach(el => el.classList.add(`show-${mistake}`))
            finshgame()        
            document.querySelector('.false').play()
        }else{

        }
    }
})



function finshgame(){
    if(mistake === 8){
        let popub = document.createElement('div')
        popub.className = 'pobub'
        popub.innerText = `game over , the word is ${wordinrandom}`
        document.body.appendChild(popub)
        document.querySelector(".container").classList.add('finish')
    
    }
}
