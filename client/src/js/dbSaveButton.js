import { putDb } from './database'

document.getElementById('buttonSave')
.addEventListener('click', () => {
    console.log('saved content through button click')
    putDb(localStorage.getItem('content'))
})