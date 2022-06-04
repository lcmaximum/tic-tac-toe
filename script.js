let playerX = {
    name: "X",
    cellsClaimed: []
    }
    
    let playerO = {
      name: "O",
      cellsClaimed: []
    }
    
    let currentPlayer = playerX;
    
    const allCells = document.querySelectorAll('.cell');
    const stampSigil = function(e) {
    e.target.innerText = currentPlayer.name;
      
    if (currentPlayer=== playerX)  {
      currentPlayer = playerO;
    }
    else {
      currentPlayer = playerX;
    }  
      toggleClass(e);
      
    }
    allCells.forEach((cell) => {
      cell.addEventListener('click', stampSigil);
    })
    
    const toggleClass = function(e) {
      if (e.target.classList.contains('.cell')) {
        e.target.classList.remove('.cell');
      }
      
    }
    
    
    
    
    
    
    /*
    let r1 = document.querySelectorAll('.vR-1')
    r1.forEach((cell) =>{
    console.log(cell);
    })
    console.log("");
    let r2 = document.querySelectorAll('.vR-2')
    r2.forEach((cell) =>{
    console.log(cell);
    })
    console.log("");
    let r3 = document.querySelectorAll('.vR-3')
    r3.forEach((cell) =>{
    console.log(cell);
    })
    console.log("");
    let c1 = document.querySelectorAll('.vC-1')
    c1.forEach((cell) =>{
    console.log(cell);
    })
    console.log("");
    let c2 = document.querySelectorAll('.vC-2')
    c2.forEach((cell) =>{
    console.log(cell);
    })
    console.log("");
    let c3 = document.querySelectorAll('.vC-3')
    c3.forEach((cell) =>{
    console.log(cell);
    })
    console.log("");
    let d1 = document.querySelectorAll('.vD-1')
    d1.forEach((cell) =>{
    console.log(cell);
    })
    console.log("");
    let d2 = document.querySelectorAll('.vD-2')
    d2.forEach((cell) =>{
    console.log(cell);
    })
    
    const allStreaks = [r1,r2,r3,c1,c2,c3,d1,d2]
    /*
    const clickabEls = document.querySelectorAll('.practice-div');
    
    clickabEls.forEach((ele) => {
      ele.addEventListener('click', stampSigil);
    })*/