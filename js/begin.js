function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
};
if (getRandomNumber(1,20) == 1) {
    window.location.href = 'Error418.html';
}
