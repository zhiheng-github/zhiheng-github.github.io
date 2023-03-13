let myimg = document.querySelector("img");
myimg.onclick = function(){
    let mysrc = myimg.getAttribute("src");
    if (mysrc==='images/langjiu.jpg'){
        myimg.setAttribute("src","images/qinhualang.jpg")
    } else {
        myimg.setAttribute("src", "images/langjiu.jpg")
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    if (!myName){
        setUserName()
    }else{
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla 酷毙了，' + myName;
    }
}

if (!localStorage.getItem('name')){
    setUserName()
} else {
    let storageName = localStorage.getItem('name')
    myHeading.textContent = 'Mozilla 酷毙了，' + storageName;
}

myButton.onclick = ()=>{
    setUserName()
}