const keys=[..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"]

function getRandomNumber(min,max){
    min=Math.ceil(min);
    max=Math.floor(max);
   return Math.floor(Math.random()*(max-min+1))+min;
}
function getRandomKey() {
    return keys[getRandomNumber(0,keys.length-1)]
}
function targetRandomKey(){
    const key = document.getElementById(getRandomKey())
    key.classList.add("selected");

}
document.addEventListener("keyup",event=>{
    const keyPressed= String.fromCharCode(event.keyCode)
    const keyElement=document.getElementById(keyPressed)
    const highlightedKey=document.querySelector(".selected")
    keyElement.classList.add("hit")
    keyElement.addEventListener('animationend',()=>{
        keyElement.classList.remove("hit")
    })
    if(keyPressed===highlightedKey.innerHTML){
        highlightedKey.classList.remove("selected")
        targetRandomKey()
    }
    
})

targetRandomKey()