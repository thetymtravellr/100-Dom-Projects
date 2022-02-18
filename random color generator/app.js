/* 
Generate Random RGB Color
*/
function generateRGBColor() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `rgb(${red}, ${green},${blue})`;

}

const rgbBtn = document.getElementById('rgb-generator-btn');
rgbBtn.addEventListener('click',function(){
    const body = document.getElementById('body');
    const copy = document.getElementById('rgb-code');
    const rgb = generateRGBColor();
    body.style.backgroundColor = rgb;
    copy.innerText = rgb;
})

/* 
Generate Random Hex Color
*/

function generateHexColor() {
    const hexCode = ['a','b','c','d','e','f',1,2,3,4,5,6];
    let color = '';
    let code;
    for(let i = 1; i <= 6; i++) {
        for(let i = 0; i <= hexCode.length -1; i++) {
            const random = Math.floor(Math.random()*12);
            code = hexCode[random];
        }
        color += code;
    }
    return `#${color}`;
}

const hexBtn = document.getElementById('hex-generator-btn');
hexBtn.addEventListener('click',function() {
    const body = document.getElementById('body');
    const copy = document.getElementById('hex-code');
    const hex = generateHexColor();
    body.style.backgroundColor = hex;
    copy.innerText = hex;
})


// change the type of color
const changeType = document.getElementById('change');

changeType.addEventListener('click',function(){
    const rgb = document.getElementById('rgb');
    const hex = document.getElementById('hex');

    rgb.classList.toggle('hidden');
    hex.classList.toggle('hidden');

    if(this.innerText.toLowerCase() === 'hex') {
        this.innerText = 'RGB';
    } else {
        this.innerText = 'Hex';
    }
})
