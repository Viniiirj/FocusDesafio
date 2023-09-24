import { app } from "./elements.js";
import * as actions from './actions.js';
import * as el from './elements.js';
import state from "./state.js";
import { updateDisplay } from "./timer.js";

export function registerControls() {
    app.addEventListener('click', (event) => {
        const action = event.target.dataset.action
        if(typeof actions[action] != "function") {
            return
        }
        actions[action]()
    })
}