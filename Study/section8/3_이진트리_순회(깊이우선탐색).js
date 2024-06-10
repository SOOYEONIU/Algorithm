const solution = () => { 
    let preOrder = [];
    const preOrderProcess = (value) => {
        if (value > 7) { return; }
        preOrder.push(value);
        preOrderProcess(value * 2);
        preOrderProcess(value * 2 + 1);
    }
    preOrderProcess(1);
    console.log('전위순회',preOrder.join(' '))

    let inOrder = [];
    const inOrderProcess = (value) => { 
        if (value > 7) return;
        inOrderProcess(value * 2);
        inOrder.push(value);
        inOrderProcess(value * 2 + 1);
    }
    inOrderProcess(1);
    console.log('중위순회', inOrder.join(' '));

    let postOrder = [];
    const postOrderProcess = (value) => {
        if (value > 7) return;
        postOrderProcess(value * 2);
        postOrderProcess(value * 2 + 1);
        postOrder.push(value);
    }
    postOrderProcess(1);
    console.log('후위순회', postOrder.join(' '));
}

solution();