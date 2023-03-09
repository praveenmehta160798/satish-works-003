setInterval(() => {
    let box = document.querySelector(".box");
    box.style.width = '0px';
}, 1000);
setInterval(() => {
    let box = document.querySelector(".box");
    // let x = box.remove();
    let newBox = document.createElement('div');
    newBox.classList = box.classList;
    newBox.innerHTML = box.innerHTML;
    // console.log(box);
    // console.log(newBox);
    box.remove();
    let wrapper = document.querySelector('.wrapper');
    wrapper.appendChild(newBox);
}, 2000);
