const solution = (totalNum) => {
    //이진트리 순회(깊이 우선 탐색)

    // 전위 순회 출력
    let answer1 = '';
    const preOrder = (num) => {
        if (num > totalNum) {
            return;
        } else {
            answer1 += num + ' ';
            preOrder(num * 2);
            preOrder(num * 2 + 1);
        }
    }
    preOrder(1);
    console.log(answer1)
    // 중위 순회 출력
    let answer2 = '';
    const inOrder = (num) => { 
        if (num > totalNum) {
            return;
        } else { 
            inOrder(num * 2);
            answer2 += num + ' ';
            inOrder(num * 2 + 1);
        }
    }
    inOrder(1);
    console.log(answer2);
    // 후위 순회 출력
    let answer3 = '';
    const postOrder = (num) => { 
        if (num > totalNum) {
            return;
        } else { 
            postOrder(num * 2);
            postOrder(num * 2 + 1);
            answer3 += num + ' ';
        }
    }
    postOrder(1);
    console.log(answer3)
}

solution(7);