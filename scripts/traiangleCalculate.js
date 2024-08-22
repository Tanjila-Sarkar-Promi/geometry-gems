function calculateTriangleArea() {
    // get base input
    const triangleBase = document.getElementById('triangle-base');
    const triangleBaseText  = triangleBase.value;
    const triangleBaseValue = parseFloat(triangleBaseText);
    //get height input
    const triangleHeight = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeight.value;
    const triangleHeightValue = parseFloat(triangleHeightText);
    //calculate area
    const calculateArea = 0.5 * triangleBaseValue * triangleHeightValue;
    // console.log(calculateArea);

    //display area result
    const area = document.getElementById('area-result');
    area.innerText = calculateArea;

    triangleBase.value='';
    triangleHeight.value='';

}