const DayNight = {
    toggleDayNight(){
        const toggleOn = document.querySelector('.toggle-on')
        const toggleOff = document.querySelector('.toggle-off')
        const body = document.querySelector('body')
        const darkLogo = document.querySelector('.logo-black')
        const whiteLogo = document.querySelector('.logo-white')
        
        toggleOn.classList.toggle('activate')
        toggleOff.classList.toggle('desactivate')
        body.classList.toggle('darkness')
        darkLogo.classList.toggle('desactivate')
        whiteLogo.classList.toggle('activate')
    }
}

