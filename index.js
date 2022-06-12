// Code your solution here
function findMatching(myArray, myString)
{  const matchingData = arrayContent => arrayContent.toUpperCase() === myString.toUpperCase();
    return myArray.filter(matchingData)
}
    function fuzzyMatch (myArray, myString)
    {
        const matchingData = arrayContent => arrayContent.toLowerCase().charAt(0) === myString.toLowerCase().charAt(0);
        return myArray.filter(matchingData)
    }
    function matchName(myArray,myString){
        const matchingData = arrayContent => arrayContent.name === myString;
        return myArray.filter(matchingData);
    }