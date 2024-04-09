function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
};
if (getRandomNumber(1,31) == 1) {
    window.location.href = 'Error418.html';
}
