let aside = document.querySelector('.sidebar').classList.toggle('dark')

function darkTheme() {
    document.body.classList.toggle('dark')
    document.querySelector('.top').classList.toggle('dark')
    document.querySelector('iframe').classList.toggle('dark')
    document.querySelector('.sidebar').classList.toggle('dark')
    document.querySelector('.bottom').classList.toggle('dark')
    document.querySelector('.menu-btn').classList.toggle('dark')
    document.querySelector('.container').classList.toggle('dark')

    document.querySelector('.theme-btn').classList.toggle('dark')
}