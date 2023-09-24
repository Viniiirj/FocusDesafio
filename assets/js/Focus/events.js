import {controls, cards} from "./elements.js";
import * as actions from './actions.js';
import state from "./state.js";
import { updateDisplay } from "./timer.js";

export function registerControls() {
    controls.addEventListener('click',register)
}

export function registerCards() {
    cards.addEventListener('click', register)
}


function register(event) {
        const action = event.target.dataset.action
        if(typeof actions[action] != "function") {
            return
        }
        actions[action]()
}