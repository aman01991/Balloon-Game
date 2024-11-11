    const handle = document.getElementById('phandle');
    const pbox = document.getElementById('pbox');
    const ppipe = document.getElementById('ppipe');
    // const balloon = document.getElementById('bballoon');
    const gameContainer = document.getElementById('game-container');
    let size = 20;
    let gameOver = false;
    let moving = false;
    let balloonCount = 0;
    let bool = true;


    function createBalloon() {
        console.log("start");
        const balloon1 = document.createElement('div');
        balloon1.classList.add("bballoon");


        const balloonIndex = (balloonCount % 10) + 1;
        balloon1.style.backgroundImage = `url('Graphics/Symbol 10000${balloonIndex}.png')`; 
        
        gameContainer.appendChild(balloon1);
        
        attachBalloonEvent(balloon1);
    }
    
    function attachBalloonEvent() {
        handle.addEventListener('click', function() {
            handle.classList.add('move-down');
            pbox.classList.add('compress');
            ppipe.classList.add('pmove');
    
            inflateBalloon(balloon);
    
            // Remove the 'move-down' class after the animation finishes
            handle.addEventListener('animationend', function() {
                handle.classList.remove('move-down');
                handle.classList.remove('pmove');
            }, { once: true }); 
    
            setTimeout(() => {
                pbox.classList.remove('compress');
                ppipe.classList.remove('pmove');
            }, 20);
        });
    }
    
    var gap = 12;

    function createBalloon() {
        console.log("start");
        const balloon1 = document.createElement('div');
        balloon1.classList.add("bballoon");

        const balloonIndex = (balloonCount % 10) + 1;
        balloon1.style.backgroundImage = `url('Graphics/Symbol 10000${balloonIndex}.png')`; 
        
        gameContainer.appendChild(balloon1);
        
        attachBalloonEvent(balloon1);
    }
    
    function attachBalloonEvent(balloon) {
        handle.addEventListener('click', function() {

            handle.classList.add('move-down');
            pbox.classList.add('compress');
            ppipe.classList.add('pmove');
    
            inflateBalloon(balloon);
    
            // Remove the 'move-down' class after the animation finishes
            handle.addEventListener('animationend', function() {
                handle.classList.remove('move-down');
                handle.classList.remove('pmove');
            }, { once: true }); 
    
            setTimeout(() => {
                pbox.classList.remove('compress');
                ppipe.classList.remove('pmove');
            }, 20);
        });
    }
    
    var gap = 12;

function inflateBalloon(balloon) {
    // Get the current size value from the CSS variable
    const size = getComputedStyle(balloon).getPropertyValue("--size");
    
    if (!moving) {
        // Convert the size to a float, increase it smoothly, and update the size
        balloon.style.setProperty("--size", parseFloat(size) + 2);
        const currentRight = parseFloat(getComputedStyle(balloon).right);
        balloon.style.right = (currentRight - gap) + "px";
        gap *= 1.1;
    }
    
    // Check if the balloon has reached the size condition
    if (parseFloat(size) >= 6 && !moving) { 
        moving = true; 
        setTimeout(() => {
            moveDiv(balloon);
            balloonCount++;
            createBalloon();
        }, 20);
        
    }
}


    // Initialize position and speed
    
    function moveDiv(div) {
        let posX = parseFloat(div.style.left) || 0; 
        let posY = parseFloat(div.style.top) || 0; 
        let speedX = (Math.random() * 2 + 1) * (Math.random() < 0.5 ? 1 : -1); 
        let speedY = (Math.random() * 2 + 1); 
    
        const containerWidth = window.innerWidth ; 
        const containerHeight = 600; 
    
        setInterval(() => {

            posX -= speedX;
            posY -= speedY;


            if (posX + div.clientWidth >= containerWidth || posX <= 0) {
                speedX = -speedX;
            }
            if (posY + div.clientHeight >= containerHeight || posY <= 0) {
                speedY = -speedY; 
            }
    
            // Set new position
            div.style.left = posX + 'px';
            div.style.top = posY + 'px';
            console.log(posX, posY);
        }, 20);
    }
    
    

        createBalloon(); 



