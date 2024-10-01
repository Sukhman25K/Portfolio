function fnDarkMode(){
    if (document.documentElement.getAttribute('data-bs-theme') == 'dark'){
        document.documentElement.setAttribute('data-bs-theme','light')
        document.getElementById('btnColourMode').classList.remove('btn-light')
        document.getElementById('btnColourMode').classList.add('btn-dark')
        document.getElementById('imgMoon').src = 'Assets/moon-light.svg'
        document.getElementById('imgGithub').src = 'Assets/github-dark.svg'
        document.getElementById('imgLinkedin').src = 'Assets/linkedin-dark.svg'
        document.getElementById('imgEmail').src = 'Assets/envelope-at-dark.svg'
    }else{
        document.documentElement.setAttribute('data-bs-theme','dark')
        document.getElementById('btnColourMode').classList.remove('btn-dark')
        document.getElementById('btnColourMode').classList.add('btn-light')
        document.getElementById('imgMoon').src = 'Assets/moon-dark.svg'
        document.getElementById('imgGithub').src = 'Assets/github-light.svg'
        document.getElementById('imgLinkedin').src = 'Assets/linkedin-light.svg'
        document.getElementById('imgEmail').src = 'Assets/envelope-at-light.svg'
    }
}

function topFunction(){
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
}

window.onscroll = function(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        document.getElementById('topButton').style.display = 'block'
    }else{
        document.getElementById('topButton').style.display = 'none'
    }
}
