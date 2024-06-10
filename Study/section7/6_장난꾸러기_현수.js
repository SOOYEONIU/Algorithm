const solution = (tempArr) => { 
    let hysoo = [];
    for (let i = 1; i < tempArr.length; i++) {
        console.log(tempArr[i]);
        if (tempArr[i - 1] > tempArr[i]) {
            hysoo.push(i);
        } 
    }
    hysoo[1]++;
    console.log(hysoo)

}
let input = [160, 125, 127, 130, 135, 135, 143, 152, 120];
solution(input);