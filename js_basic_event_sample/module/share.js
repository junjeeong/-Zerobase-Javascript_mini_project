const shareURLBtn = document.getElementById('url-share-button');

export const setShareURLBtn = () => {
    shareURLBtn.onclick = () => {
        navigator.clipboard.writeText(location.href)
    };
};