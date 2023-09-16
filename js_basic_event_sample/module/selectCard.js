import { SELECT_RESULT_KEY } from '../constants/result.js';
import { appendChildList, makeDomWithProperties} from '../utils/dom.js';

const cardInfoList = [
    {
    id : 1,
        imgSrc : 'public/assets/초코꼬북칩.jpeg',
        name : '초코꼬북칩',
        description : '맛있는 초코꼬북칩',
    },
    {
    id : 2,
        imgSrc : 'public/assets/나쵸.jpeg',
        name : '나쵸',
        description : '맛있는 나초',
    },
    {
    id : 3,
        imgSrc : 'public/assets/허니버터칩.jpeg',
        name : '허니버터칩',
        description : '맛있는 허니버터칩',
    },
    {
    id : 4,
        imgSrc : 'public/assets/홈런볼.jpeg',
        name : '홈런볼',
        description : '맛있는 홈런볼',
    },
];

const snackCardList = document.getElementsByClassName('snack-card-list')[0];
const selectBtnDOM = document.getElementsByClassName('participate-button')[0];
const [notyetContainerDOM, resultContainerDOM] = document.getElementsByClassName('result-container');
const [ , resultImageDOM, resultNameDOM, resultDescriptionDOM, selectRetryBtn] = resultContainerDOM.children;

const getSelectedCard = () => {
    return document.getElementsByClassName('select')[0];
}
const getCardById = (id) => {
    return document.getElementById(`select-${id}`);
}

//선택카드에만 "테두리"를 부여하는 함수
const handleSelectCard = (cardId) => {
    // 1. 이미 선택되어 있는 카드는 선택 해지
    const originalSeletedCard = document.getElementsByClassName('select')[0];
    originalSeletedCard?.classList.remove('select');
    
     // 2. 현재 선택한 카드를 선택
    const newSelectedCard = document.getElementById(`select-${cardId}`);
    newSelectedCard?.classList.add('select');
}

const getSelectCardDOM = ({
    id,
    imgSrc,
    name,
    description,
}) => {
    const snackCardDOM = makeDomWithProperties('button', {
        id : `select-${id}`,
        className : 'snack-card',
        onclick : () => handleSelectCard(id)
    });

    const imageDOM = makeDomWithProperties('img', {
        src : imgSrc,
        alt : name,
    });

    const descriptionContainerDOM = makeDomWithProperties('div', {
        className : 'snack-description',
    });

    const nameDOM = makeDomWithProperties('div', {
        innerHTML : name,
    });

    const descriptionDOM = makeDomWithProperties('div', {
        innerHTML : description,
    });

    appendChildList(descriptionContainerDOM, [nameDOM, descriptionDOM]);
    appendChildList(snackCardDOM, [imageDOM, descriptionContainerDOM]);

    return snackCardDOM;
}

export const setSelectCards = () => {
    //기존의 snackCardList의 자식요소들을 받아와서 -> 순회하면서 없애주어야 함. 
    const originalSnackCards = Object.assign([], snackCardList.children);
    originalSnackCards.forEach((snackCard) => snackCard.remove());

    cardInfoList.forEach((cardInfo) => {
        const selectCardDOM = getSelectCardDOM(cardInfo);
        snackCardList.appendChild(selectCardDOM);
    });

    //localStorage에서 이미 선택되어 있는 과자 id를 가져와서 표시
    const cardId = JSON.parse(localStorage.getItem(SELECT_RESULT_KEY));
    if(!cardId || isNaN(cardId)) return;

    handleSelectCard(cardId);
};

export const setSelectButton = () => {
    //1.버튼 DOM을 받아온다.
    // 2.DOM의 onclick 핸들러 등록
    // 2-1)선택된 카드의 id를 찾기
    // 2-2)localStorage에 id를 저장 
    // "2-1"에서 선택된 카드의 id가 없을 때는 선택된 카드가 없다는 경고창을 띄우기

    selectBtnDOM.onclick = () => {
        const selectedCard = getSelectedCard(); // DOM || undefined
        if(!selectedCard) {
            alert('선택된 카드가 없습니다.');
            return;
        }
        const cardId = selectedCard.id?.split('-')[1];
        localStorage.setItem(SELECT_RESULT_KEY, cardId);
        setResultContainer();
    };
}
//과자가 선택되기 이전의 상태로 되돌려주는 함수
const initialize = () => {
    
    localStorage.removeItem(SELECT_RESULT_KEY);
    setSelectCards();
    setResultContainer();

    const selectSectionDOM = document.getElementById('participate-section');
    const scrollTargetY = selectSectionDOM.offsetTop;
        window.scroll({
            top : scrollTargetY,
            left : 0,
            behavior : 'smooth',
        });

}
export const setResultContainer = () => {
    const selectedId = Number(localStorage.getItem(SELECT_RESULT_KEY));

    const isSelected = !!selectedId;
    if(!isSelected){
        notyetContainerDOM.style.display = 'block';
        resultContainerDOM.style.display = 'none';
        return; 
    }
    
    //notyetContainer 숨기고, resultContainer 드러내기
    //resultContainer를 선택한 과자의 정보를 주입하기 

    notyetContainerDOM.style.display = 'none';
    resultContainerDOM.style.display = 'flex';
        
    const cardInfo = cardInfoList.find((info) => info.id === selectedId);

    resultImageDOM.src = cardInfo.imgSrc;
    resultImageDOM.alt = cardInfo.name;
    resultNameDOM.innerHTML = cardInfo.name;
    resultDescriptionDOM.innerHTML = cardInfo.description;
    
    //다시하기 버튼 구현
    selectRetryBtn.onclick = initialize;
}   