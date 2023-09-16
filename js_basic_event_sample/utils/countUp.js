// dom : innerHTML이 갱신될 노드
// target : 목표 숫자
// second : 총 몇초가 걸릴지 -> 5초
// term : 몇 초 마다 함수 실행할지 -> 15초 
// countTerm : 한 term에 몇씩 증가해야하는지 -> second, term으로 계산해서 넣어주기 

export const countUp = (dom, target, second, term = 15) => {
    if(!dom|| Number.isNaN(target) || Number.isNaN(second) || Number.isNaN(term)) return;
    const countTerm = Math.floor((target / second) * (term / 1000));
    console.log(countTerm);
    
    let nowNumber = 0;
    
    const timerID = setInterval(() =>{  
        if(nowNumber >= target ){
            nowNumber = target;
            clearInterval(timerID); 
            return;
        }
        nowNumber += countTerm;  
        dom.innerHTML = `${nowNumber.toLocaleString()}`;
    }, term)
};   