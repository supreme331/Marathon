const container = document.querySelector('.container')
const screens = document.querySelector('.screens')
const screensCount = screens.querySelectorAll('.screen').length

let activeSlideIndex = 0;

document.addEventListener('wheel', (event) => {
    event.deltaY < 0 ? changeScreen("up") : changeScreen("down")
})

document.addEventListener("keydown", (event) => {
    event.key === "ArrowUp"
      ? changeScreen("up")
      : event.key === "ArrowDown"
      ? changeScreen("down")
      : null;
  });

function changeScreen(direction) {   

    if (direction === "up" && activeSlideIndex > 0) {        
        activeSlideIndex--;
    } else if (direction === "down" && activeSlideIndex < screensCount - 1) {
        activeSlideIndex++; 
    }
  
    const height = container.clientHeight;
  
    screens.style.transform = `translateY(-${activeSlideIndex * height}px)`;
}

