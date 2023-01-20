const bg = document.getElementById('bgChange')
const fg = document.getElementById('fgChange')

bg.addEventListener('click',changeIt);
fg.addEventListener('click',changeIt);

function changeIt(event){
    // console.log(event);
    // console.log(event.target);
    // console.log(event.target.innerText);
    // console.log(event.target.tagName);
    // event.target.innerText='I AM NEW TEXT'
    // console.log(event.target.InnerText.search('Back'));
    if(event.target.InnerText.search('Back')>0){
        console.log('changing background');
        
    }else{
        console.log('changing foreground');
    }
    // let test = new String('test')
}
