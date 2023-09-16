const mbtiQuestionDOM = document.getElementsByClassName('mbti-question')[0];
const [ yesButton, noButton ] = document.getElementsByClassName('mbti-select')[0].children;
const [selectDOM, pendingDOM, resultDOM] = document.getElementsByClassName('mbti-container');
const mbtiResultTitleDOM = document.getElementsByClassName('mbti-result')[0];
const mbtiResultDescriptionDOM = document.getElementsByClassName('mbti-description')[0];
const mbtiRetryBtn = document.getElementsByClassName('mbti-retry-button')[0];


const mbtiQuestionList = [
    "짠 과자가 단 과자보다 좋다.", 
    "봉지 과자가 박스 과자보다 좋다",
    "과자를 뜯으면 한번에 다 먹는다."
];

const getMbtiResult = (resultValue) => {
    switch(resultValue) {
        case 0 : 
        return {
            title : '과자 어린이 유형',
            description: '너는 ㅈㄴ 어린이인거임 비융신',
        };
        case 1 : 
        return {
            title : '과자 청소년 유형',
            description: '과자 먹을줄아는 넘인거임'
        };
        case 2 : 
        return {
            title : '과자 어른 유형',
            description : '과자가 없으면 이제 생활이 불가능한 정도'
        };
        case 3 : return {
            title : '과자 할아버지 유형',
            description : '이쯤되면 과자에 미쳐사는 정도 ㅉㅉ'
        };
        default : 
            return {
                title : '너는 뭔데 ㅂㅅ아',
                description: '도대체 뭘한거야'
            }
    }
}

let currentRound = 0;
let resultValue = 0;
const maxRound = mbtiQuestionList.length;

const setPendingSection = () => {
    pendingDOM.style.display = 'block';
    selectDOM.style.display = 'none';

    setTimeout(() => {
        pendingDOM.style.display = 'none';
        resultDOM.style.display = 'block';
    }, 3000);
}

const initialize = () => {
    currentRound = 0;
    resultValue = 0;
    selectDOM.style.display = 'block';
    pendingDOM.style.display = 'none';
    resultDOM.style.display = 'none';
};

const setResultSection = () => {
    const { title, description} = getMbtiResult(resultValue);
    mbtiResultTitleDOM.innerHTML = title;
    mbtiResultDescriptionDOM.innerHTML = description;

    mbtiRetryBtn.onclick = initialize;
}

export const setMbtiSection = () =>{
    
    if(currentRound == maxRound){
        setPendingSection();
        setResultSection();
        return;
    }
    selectDOM.style.display = 'block';

    mbtiQuestionDOM.innerHTML = mbtiQuestionList[currentRound++];
    yesButton.onclick = () =>{
        resultValue++;
        setMbtiSection();
    }
    noButton.onclick = () =>{
        resultValue++;
        setMbtiSection();
    }
;}