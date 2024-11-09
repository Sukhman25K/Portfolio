function fnColourMode(){
    if (document.documentElement.getAttribute('data-bs-theme') == 'dark'){
        document.documentElement.setAttribute('data-bs-theme','light')
        document.getElementById('btnColourMode').classList.remove('btn-light')
        document.getElementById('btnColourMode').classList.add('btn-dark')
        document.getElementById('imgMoon').src = 'Assets/moon-light.svg'
        document.getElementById('imgGithub').src = 'Assets/github-dark.svg'
        document.getElementById('imgLinkedin').src = 'Assets/linkedin-dark.svg'
        document.getElementById('imgEmail').src = 'Assets/envelope-at-dark.svg'
        localStorage.setItem("theme", 'light');
    }else{
        document.documentElement.setAttribute('data-bs-theme','dark')
        document.getElementById('btnColourMode').classList.remove('btn-dark')
        document.getElementById('btnColourMode').classList.add('btn-light')
        document.getElementById('imgMoon').src = 'Assets/moon-dark.svg'
        document.getElementById('imgGithub').src = 'Assets/github-light.svg'
        document.getElementById('imgLinkedin').src = 'Assets/linkedin-light.svg'
        document.getElementById('imgEmail').src = 'Assets/envelope-at-light.svg'
        localStorage.setItem("theme", 'dark');
    }
}

function topFunction(){
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
}

function calculateSettingAsThemeString({ localStorageTheme, systemSettingDark }) {
    if (localStorageTheme !== null) {
      return localStorageTheme;
    }
  
    return systemSettingDark.matches ? "dark" : "light";
}

const localStorageTheme = localStorage.getItem("theme");
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");
let currentThemeSetting = calculateSettingAsThemeString({ localStorageTheme, systemSettingDark });
document.documentElement.setAttribute('data-bs-theme',currentThemeSetting)

if (currentThemeSetting === 'dark') {
    document.getElementById('btnColourMode').classList.remove('btn-dark');
    document.getElementById('btnColourMode').classList.add('btn-light');
    document.getElementById('imgMoon').src = 'Assets/moon-dark.svg';
    document.getElementById('imgGithub').src = 'Assets/github-light.svg';
    document.getElementById('imgLinkedin').src = 'Assets/linkedin-light.svg';
    document.getElementById('imgEmail').src = 'Assets/envelope-at-light.svg';
} else {
    document.getElementById('btnColourMode').classList.remove('btn-light');
    document.getElementById('btnColourMode').classList.add('btn-dark');
    document.getElementById('imgMoon').src = 'Assets/moon-light.svg';
    document.getElementById('imgGithub').src = 'Assets/github-dark.svg';
    document.getElementById('imgLinkedin').src = 'Assets/linkedin-dark.svg';
    document.getElementById('imgEmail').src = 'Assets/envelope-at-dark.svg';
}

window.onscroll = function(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        document.getElementById('topButton').style.display = 'block'
    }else{
        document.getElementById('topButton').style.display = 'none'
    }
}
