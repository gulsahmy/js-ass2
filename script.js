 document.addEventListener('DOMContentLoaded', function() {
     const bgDiv = document.querySelector('.bgDiv');
     const colorText = document.getElementById('colorText');
     const colorInput = document.getElementById('colorInput');
     const btnClick = document.querySelector('.btn-click');
     const btnOver = document.querySelector('.btn-over');

 /**********************************************************************/

 function getRandomColor(){
    var letters = '0123456789ABCDEF';
    var color = '#';
    for ( var i = 0; i<6; i++) {
        color +=letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

/**********************************************************************/

function changeColor() {
    const randomColor = getRandomColor();
    bgDiv.style.backgroundColor = randomColor;
    colorText.textContent = `Background Color: ${randomColor}`;
    colorInput.value = randomColor;
}

/***********************************************************************/

btnClick.addEventListener('click', changeColor);
btnOver.addEventListener('mouseover', changeColor);
});