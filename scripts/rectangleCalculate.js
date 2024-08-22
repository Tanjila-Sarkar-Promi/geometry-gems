function calculateRectangleArea(){
    //get width
    const rectangleWidth = document.getElementById('rectangle-width');
    const rectangleWidthText = rectangleWidth.value;
    const rectangleWidthValue = parseFloat(rectangleWidthText);
    //get length
    const rectangleLength = document.getElementById('rectangle-length');
    const rectangleLengthText = rectangleLength.value;
    const rectangleLengthValue = parseFloat(rectangleLengthText);

    //calculate area
    const calculateArea =  rectangleWidthValue * rectangleLengthValue;
    

    //display area result
    const area = document.getElementById('area-result');
    area.innerText = calculateArea;

    rectangleWidth.value='';
    rectangleLength.value='';   
    
  

}