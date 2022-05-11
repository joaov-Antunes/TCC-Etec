function darkTheme() {
    document.body.classList.toggle('dark')
    document.querySelector('.top').classList.toggle('dark')
    document.querySelector('.sidebar').classList.toggle('dark')
    document.querySelector('.bottom').classList.toggle('dark')

    document.querySelector('#theme').innerHTML = '<a href="#" id="theme" onclick="darkTheme()"><ion-icon name="sunny-outline" class="theme-btn"></ion-icon></a>'
}