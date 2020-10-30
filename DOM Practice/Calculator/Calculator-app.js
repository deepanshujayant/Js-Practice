var x;
function init(){
    x = document.querySelector('.inputField').textContent = '0';
};
init();
console.log(x);
console.log('jS Running')

document.querySelector('.btn').addEventListener('click', function(){
    document.querySelector('.inputField').textContent = '3';
})