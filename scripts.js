let input = prompt("Please enter a comma-separated list of froyo flavors you would like");


const froyoArrayToObject = (input) =>{
    const inputArr = input.split(",").map(function (value){
        return value.trim();
    })
    const counter = {};
    inputArr.forEach(ele => {
        if (counter[ele]) {
            counter[ele] += 1;
        } else {
            counter[ele] = 1;
        }
    });
    console.log(input);
    console.log(inputArr);
    return counter
}





console.table(froyoArrayToObject(input));