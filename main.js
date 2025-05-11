headsCounter = 0;
tailsCounter = 0;

const originalHeadsSrc = document.getElementById("heads").src;
const originalTailsSrc = document.getElementById("tails").src;

function flipFunction(){


    const button = document.getElementById("flip");
    button.disabled = true;  // Disable the button
    button.style.cursor = "not-allowed";
    document.getElementById("Result").style.animation = ""; 
    
    document.getElementById("HeadsCounter").style.color = "";
    document.getElementById("TailsCounter").style.color = "";


    document.getElementById("heads").src = originalHeadsSrc;
    document.getElementById("tails").src = originalTailsSrc;

    

    //DISABLE BUTTON


    // const result = null

    const coin = document.querySelector('.coin');

  // Reset animation
  coin.style.animation = 'none';
  coin.offsetHeight; // Trigger reflow
  coin.style.animation = 'spin 0.5s linear';


   // document.getElementById("Flip")
   
// No get id by title for answer, should be invisilblw until button is clicked
    randNum = Math.floor(Math.random()*2) + 1  //Video Note: better to use proper random fucntion but we just have 2 numbers so its fine
    console.log(randNum)



    if(randNum ==1){
        result = "Heads" //update accordingly 
        headsCounter++
    }

    else if (randNum == 2){
        result = "Tails"
        tailsCounter++
    }

   // const nResult = document.getElementById("Result").innerHTML;
   


coin.addEventListener('animationend', () => {
    document.getElementById("Result").innerHTML = result;

    document.getElementById("Result").style.animation = "tilt-shaking 0.5s infinite"; 
    // counterforheads = document.getElementById("HeadsCounter").innerHTML
    // counterfortails = document.getElementById("TailsCounter").innerHTML

    document.getElementById("HeadsCounter").innerHTML = headsCounter;
    document.getElementById("TailsCounter").innerHTML = tailsCounter;

    if(result=="Heads"){
        document.getElementById("HeadsCounter").style.color = "white";
        
    }

    else{
        document.getElementById("TailsCounter").style.color = "white";
    }

    coin.style.visibility = "hidden"; 
    const filename = result + ".png"
    document.getElementById("heads").src = filename
    document.getElementById("tails").src = filename
    coin.style.visibility = "visible"; 
    console.log(filename)

    button.disabled = false; 
    button.style.cursor = "pointer";
   // RE-ENABLE BUTTON HERE///////





    // setTimeout(() => {
    //     document.getElementById("heads").src = originalHeadsSrc;
    //     document.getElementById("tails").src = originalTailsSrc;
    //   }, 500);



  
//   console.log('Animation ended');

// console.log(result);
//     coin.style.visibility = "hidden"; 



// document.getElementById("heads").style.visibility = "hidden";
// document.getElementById("tails").style.visibility = "hidden";

// Show the appropriate side based on result




// heads = document.getElementById("heads");
// tails = document.getElementById("tails");
// if (result == "Heads") {
    
//     heads.style.visibility = "visible";
// } else {
//   tails.style.visibility = "visible";
// }



});


    // if(result!==null){
       
    // }
    

    
    }