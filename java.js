

window.addEventListener('load', ()=>{
        if(localStorage.getItem("baggroundImage") !== null){
            let Img = localStorage.getItem("baggroundImage")
            document.body.style.backgroundImage = 'url("'+ Img +'")'
            console.log(Img)
        }
    
    sizeCheck()
})

window.addEventListener('resize', function(){
    sizeCheck()
})

let ChangeBagground = (el) => {
    console.log('jhahsohiuasiouh')
        if(el.includes(".jpg",".jpeg",".png") == true){
            document.body.style.backgroundImage = 'url("'+ el +'")'
            localStorage.setItem("baggroundImage", el)
        }
    clearInput()
BarGoUp()
}

let clearInput = () =>{
    document.querySelector('.wallPaper--input').value = ''
}


let BarDropDown = () =>{
    document.querySelector('.wallPaper').classList.add('active')
    document.querySelector('.wallPaper--activater').classList.remove('active')
}

let BarGoUp = () =>{
    document.querySelector('.wallPaper').classList.remove('active')
    document.querySelector('.wallPaper--activater').classList.add('active')
}


let sizeCheck = () =>{
        if(window.innerWidth < "800"){
        console.log('under 800vw')
        document.body.style.backgroundImage = 'url("https://wallpaperaccess.com/full/797185.png")'
        document.querySelector('.screen').classList.remove('resizeMe')
    }
    if(window.innerWidth > "800"){
        console.log('above 800vw')
        document.querySelector('.screen').classList.add('resizeMe')
        document.body.style.backgroundImage = 'url("https://cdn.pixabay.com/photo/2015/03/17/14/05/sparkler-677774_1280.jpg")'
    }
    if(window.innerWidth > "800" && localStorage.getItem("baggroundImage") !== null){
        let bg = localStorage.getItem("baggroundImage")
        document.body.style.backgroundImage = 'url("'+ bg +'")'
    }

}




