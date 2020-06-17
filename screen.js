var linkHref = [];
var urlArray = [];
let counter = 0;
var objectArray = [];


window.addEventListener('load', ()=>{
 
   if(localStorage.getItem('array') !== null){
       var urlArray = JSON.parse(localStorage.getItem('array'))
      console.log(urlArray)
          for (let i = 0; i < urlArray.length; i++) {
            createObject(urlArray[i].element)
            console.log(urlArray[i].element)
            pushLink(urlArray[i].element)
           }
    }
})


let addBookMark = (element) =>{


    createObject(element)
    pushLink(element)
    clearInput2()
    counter++
 
}

let pushLink = (element) =>{
    console.log(element)
    urlArray.push({element})
    localStorage.setItem('array', JSON.stringify(urlArray))
    console.log(urlArray)
}

let createObject = (element) =>{
    console.log(validURL(element))

    if(validURL(element) == true){

    let img = document.createElement('img')
        img.classList.add('screen--image')
        img.src = '//logo.clearbit.com/'+ element
    let a = document.createElement('a')
        a.href = "https://"+ element
        a.classList.add('screen--imageWrapper')
        a.classList.add('markNr'+ counter)
        a.appendChild(img)
        linkHref.push(a.href)
        document.querySelector('.screen').appendChild(a)

    objectArray.push(a)
    }
}

let ReadyDelete = () =>{

    let parent = document.querySelector('.screen--trash :first-child').classList.value   
    
 if (parent.includes('fa-trash') == true){
    let trash = document.querySelector('.fa-trash')
    trash.classList.add('fa-times-circle')
    trash.classList.remove('fa-trash')
    for (let i = 0; i < objectArray.length; i++) {
        objectArray[i].href = '#'
        objectArray[i].classList.add('deleteAble')
        objectArray[i].classList.add('animate__animated', 'animate__headShake')
        let newtrash = document.createElement('i')
        let newtrashwrapper = document.createElement('section')
        newtrashwrapper.classList.add('iconDelete')
        newtrash.classList.add('fa-trash', 'fas')
        
            newtrashwrapper.addEventListener('click',function(){
                objectArray[i].remove()
                urlArray.splice(i, 1)
                console.log(urlArray)
               localStorage.setItem('array',JSON.stringify(urlArray))
            })
        newtrashwrapper.appendChild(newtrash)
        objectArray[i].appendChild(newtrashwrapper)
       
     
    }
 }
else{
    let close = document.querySelector('.fa-times-circle')
    close.classList.add('fa-trash')
    close.classList.remove('fa-times-circle')
    for (let i = 0; i < objectArray.length; i++) {
        objectArray[i].href = linkHref[i]
        objectArray[i].classList.remove('deleteAble')
        objectArray[i].classList.remove('animate__animated', 'animate__headShake')
        let child = objectArray[i]
            child.removeChild(child.querySelector('.iconDelete'))
        

    }
  
} 

}







let clearInput2 = () =>{
    var sh = document.querySelector('.screen--input')
    console.log(sh.value)
             sh.value = ''
            
 }

 function validURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
  }