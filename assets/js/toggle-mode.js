let lightMode = true;

const buttonToggle = document.documentElement.querySelector('#toggle-mode')

buttonToggle.addEventListener('click', (event) => {
    document.documentElement.classList.toggle('dark')

    const mode = lightMode ? 'light' : 'dark'

    event.currentTarget
    .querySelector('span').textContent = `${mode} mode ativado`

    lightMode = !lightMode
})

