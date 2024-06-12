const fs = require('fs');
let [N, K] = fs.readFileSync(__dirname + "/input.txt").toString().trim().split(" ").map(Number);

let cnt = 0;
let strK = String(K);

for (let i = 0; i <= N; i++) { 
    // 시간
    let hour = '';
    if (i < 10) {
        hour = '0' + String(i);
    } else { hour = String(i);  }
    //분
    for (let j = 0; j < 60; j++) {
        let minute = '';
        if (j < 10) {
            minute = '0' + String(j);
        } else { minute = String(j); }
        //초
        for (let m = 0; m < 60; m++) { 
            let second = '';
            if (m < 10) {
                second = '0' + String(m);
            } else { second = String(m); }
            
            let time = hour + minute + second;

            if (time.indexOf(strK) != -1) { 
                cnt += 1;
            } 
        }
    }
}
console.log(cnt);