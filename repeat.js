/**
 * Get an Array and return it triplicated
 * You can use the times parameter to repeat it N times
 * @param baseArray []
 * @param times integer
 * @return []
 */
function repeat(baseArray, times){
    // Check if baseArray is an array
    if (!(baseArray instanceof Array)){
        console.error('Invalid parameter: array type is expected on baseArray parameter.');
        return [];
    }

    // If times paramater is not defined, set 3 as default
    if (isNaN(times)){
        times = 3;
    }

    // Clone and concatenate array
    var clonedArray = baseArray.slice(0);
    for(var i = 1; i < times; i++){
        clonedArray = clonedArray.concat(baseArray);
    }
    return clonedArray;
}


// POSSIBLE TEST CASES:
//[1,2,3,1,2,3,1,2,3]
console.log(repeat([1,2,3]));
console.log('//[1,2,3,1,2,3,1,2,3]');
console.log(repeat([1,2,3], 5));
console.log('//[1,2,3,1,2,3,1,2,3,1,2,3,1,2,3]');
