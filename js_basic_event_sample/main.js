import { countUp } from "./utils/countUp.js";
import { setTabMenu } from "./module/tabMenu.js";
import { setMbtiSection } from "./module/mbtiSelect.js";
import { setResultContainer, setSelectButton, setSelectCards } from "./module/selectCard.js";
import { setShareURLBtn } from "./module/share.js";

const data = {
    participate : 123141251,
};

const participateDOM = document.getElementById('participate-number');
countUp(participateDOM, data.participate, 3);

setTabMenu();

setSelectCards();

setSelectButton();

setResultContainer();

setMbtiSection();

setShareURLBtn();