import state from './state.js'
import * as timer from './timer.js'
import * as el from './elements.js'
import * as sounds from './sounds.js'

export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running')

    // timer.countdown()

}

export function reset() {
    state.isRunning = false
    document.documentElement.classList.remove('running')
    timer.updateDisplay()
}

export function forest() {
    document.querySelector('#forest')
    .addEventListener('click', () => {
        
    })
    sounds.buttonForest.play()
}

export function rain(){
    document.querySelector('#rain')
    .addEventListener('click', () => {
        
    })
    sounds.buttonRain.play()

}

export function coffee() {
    let coffee = document.querySelector('#coffee')
    coffee.addEventListener('click', () => {
        coffee.classList.add('active')
        sounds.buttonCoffee.play()
        sounds.buttonRain.stop()
        sounds.buttonForest.stop()
        sounds.buttonFireplace.stop()
    })

}

export function fireplace() {
    let fireplace = document.querySelector('#fireplace')
    fireplace.addEventListener('click', () => {
        fireplace.classList.add('active')
        sounds.buttonCoffee.stop()
        sounds.buttonRain.stop()
        sounds.buttonForest.stop()
        sounds.buttonFireplace.play()
    })
    sounds.buttonFireplace.play()

}

export function menos(){

}

export function mais(){

}