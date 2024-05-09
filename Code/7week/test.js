//전위 순회
const preOrder = (vertex) => { 
    let answer = "";

    const dfs = (vertex) => {
        if (vertex > 7) return;
        else {
            answer += vertex + ' ';
            dfs(vertex * 2);
            dfs(vertex * 2 + 1);
        }
    };

    dfs(vertex);
    return answer;
}

console.log(preOrder(1)); // 1 2 4 5 3 6 7 

// 중위 순회
const inOrder = (vertex) => { 
    let answer = "";

    const dfs = (vertex) => { 
        if (vertex > 7) return;
        else {
            dfs(vertex * 2);
            answer += vertex + ' ';
            dfs(vertex * 2 + 1);
        }
    }

    dfs(vertex);
    return answer;
}

console.log(inOrder(1)); // 4 2 5 1 6 3 7


// 후위순회
const postOrder = (vertex) => {
    let answer = "";

    const dfs = (vertex) => {
        if (vertex > 7) return;
        else {
            dfs(vertex * 2);
            dfs(vertex * 2 + 1);
            answer += vertex + " ";
        }
    };

    dfs(vertex);
    return answer;
}; 

console.log(postOrder(1)); //4 5 2 6 7 3 1 