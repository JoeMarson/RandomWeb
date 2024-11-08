let randomNumber = 0
const title_h1 = document.getElementById('btn')

function getRandomWebsite(){
    randomNumber = Math.ceil(Math.random() * 10)
    if (randomNumber==1){
        title_h1.setAttribute('href', 'https://x.com/?lang=en')
    }
    if (randomNumber==2){
        title_h1.setAttribute('href', 'https://www.facebook.com/?locale=en_GB')
    }
    if (randomNumber==3){
        title_h1.setAttribute('href', 'https://www.instagram.com/')
    }
    if (randomNumber==4){
        title_h1.setAttribute('href', 'https://www.tumblr.com/')
    }
    if (randomNumber==5){
        title_h1.setAttribute('href', 'https://www.snapchat.com/')
    }
    if (randomNumber==6){
        title_h1.setAttribute('href', 'https://www.youtube.com/')
    }
    if (randomNumber==7){
        title_h1.setAttribute('href', 'https://www.futbin.com/')
    }
    if (randomNumber==8){
        title_h1.setAttribute('href', 'https://www.csnewbs.com/')
    }
    if (randomNumber==9){
        title_h1.setAttribute('href', 'https://www.w3schools.com/')
    }
    if (randomNumber==10){
        title_h1.setAttribute('href', 'https://github.com/JoeMarson')
    }
}

function main (){
    title_h1.addEventListener ('click', function(){
        getRandomWebsite()
    })
}

main()
