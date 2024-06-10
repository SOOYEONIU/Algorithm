const solution = (tempCoordinate) => { 
    tempCoordinate.sort((a, b) => a[0] - b[0]);
    for (let i = 0; i < tempCoordinate.length-1; i++) { 
        if (tempCoordinate[i][0] === tempCoordinate[i + 1][0]
            && tempCoordinate[i][1] > tempCoordinate[i + 1][1]) { 
                [tempCoordinate[i], tempCoordinate[i + 1]] = [tempCoordinate[i + 1], tempCoordinate[i]];
        }
    }
    tempCoordinate.map(ele => console.log(ele.join(' ')));
}
let input = [
    [2, 7],
    [1, 3],
    [1, 2],
    [2, 5],
    [3, 6]
];
solution(input);