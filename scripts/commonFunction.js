function getElementById(inputId){
    const inputField = document.getElementById(inputId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    inputField.value = '';
    return inputValue;
}

function setInnerTextById(elementId, area){
    const displayArea = document.getElementById(elementId);
    displayArea.innerText = area;
}



function calculateTriangleArea() {
    // get base input
    const base = getElementById('triangle-base');
    
    //get height input
    const height = getElementById('triangle-height');

    //calculate area
    const calculateArea = 0.5 * base * height;
    // console.log(calculateArea);

    //display area result
    setInnerTextById('area-result', calculateArea);
}
function calculateRectangleArea(){
    //get width
    const width = getElementById('rectangle-width');
   
    //get length
    const length = getElementById('rectangle-length');
  //calculate area
    const calculateArea =  width * length;

    //display area result
    setInnerTextById('area-result', calculateArea);

}


function calculateParallelogramArea(){
   const base = getElementById('parallelogram-base');
//    console.log('base value',base);
 const height = getElementById('parallelogram-height');
 //calculate area
 const calculateArea = base * height;

 //display area result
 setInnerTextById('area-result', calculateArea);
}

function calculateRhombusArea(){
    const diagonal1 = getElementById('rhombus-diagonal1');
    //    console.log('base value',base);
     const diagonal2 = getElementById('rhombus-diagonal2');
     //calculate area
     const calculateArea = 0.5 * diagonal1 * diagonal2;
    
     //display area result
     setInnerTextById('area-result', calculateArea); 
}

function calculatePentagonArea(){
    const p = getElementById('pentagon-p');
    //    console.log('base value',base);
     const b = getElementById('pentagon-b');
     //calculate area
     const calculateArea = 0.5 * p * b;
    
     //display area result
     setInnerTextById('area-result', calculateArea);
}

function calculateEllipseArea(){
    const a = getElementById('ellipse-a');
    //    console.log('base value',base);
     const b = getElementById('ellipse-b');
     //calculate area
     const calculateArea = 3.1416 * a * b;
     //display area result
     setInnerTextById('area-result', calculateArea);
}






