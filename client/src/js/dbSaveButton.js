import { putDb } from './database'
import { alertDisplay } from "./alertDisplay"

document.getElementById('buttonSave')
.addEventListener('click', () => {
    alertDisplay("saved")
    console.log('saved content through button click')
    putDb(localStorage.getItem('content'))
})