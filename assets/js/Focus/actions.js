import state from './state.js'
import * as timer from './timer.js'
import * as el from './elements.js'
import * as sounds from './sounds.js'

export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running')

    timer.countdown()

}

export function reset() {
    state.isRunning = false
    document.documentElement.classList.remove('running')
    timer.updateDisplay()
}

export function forest() {
    const forest = document.querySelector('#forest')
    removeActived()
    forest.classList.add('actived')
    stopMusic()
    sounds.buttonForest.play()
}

export function rain(){
    const rain = document.querySelector('#rain')
    removeActived()
    rain.classList.add('actived')
    stopMusic()
    sounds.buttonRain.play()

}

export function coffee() {
    const coffee = document.querySelector('#coffee')
    removeActived()
    coffee.classList.add('actived')
    stopMusic()
    sounds.buttonCoffee.play()
}

export function fireplace() {
    const fireplace = document.querySelector('#fireplace')
    removeActived()
    fireplace.classList.add('actived')
    stopMusic()
    sounds.buttonFireplace.play()
}

export function menos(){
    let menosMin = 5
    let minutes = 0
    if(el.minutes.textContent <= 0) {
        return
    } else {
    minutes = Number(el.minutes.textContent) - menosMin
    el.minutes.textContent = minutes
}
}

export function mais(){
    let maisMin = 5
    let minutes = 0
    if(el.minutes.textContent > 59) {
        return
    } else {
        minutes = Number(el.minutes.textContent) + maisMin
        el.minutes.textContent = minutes
    }
}

function stopMusic(){
    sounds.buttonCoffee.pause()
    sounds.buttonRain.pause()
    sounds.buttonForest.pause()
    sounds.buttonFireplace.pause()
}

function removeActived(){
    document.querySelector('#forest').classList.remove('actived')
    document.querySelector('#rain').classList.remove('actived')
    document.querySelector('#coffee').classList.remove('actived')
    document.querySelector('#fireplace').classList.remove('actived')

}

