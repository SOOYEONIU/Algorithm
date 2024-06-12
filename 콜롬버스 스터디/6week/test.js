const max = 6;
let edgeSet = [[1, 2], [2, 6], [2, 4], [4, 3], [3, 2], [3, 5]];
let graph = new Array(max).fill(0).map((row) => new Array(max).fill(0));

for ( [u, v] of edgeSet) { 
    graph[u-1][v-1] = 1;
    graph[v-1][u-1] = 1;
}

console.log(graph);

// 인접 리스트를 만들 객체
let  adjList= {};

// 정점의 갯수만큼 인접리스트에 키-값을 만든다. 값은 빈 배열로 넣음
for (let i = 0; i < max; i++) {
    adjList[i + 1] = [];
    
    for (let j = 0; j < max; j++) { 
        console.log(graph[i][j] == 1);
        if (graph[i][j] === 1 && !adjList[i+1].includes(j+1)) { 
            adjList[i + 1].push(j + 1);
        }
    }
}

console.log(adjList)

