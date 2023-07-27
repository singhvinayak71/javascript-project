const play = () => {
let score=Number.parseInt;
score=0;
  const computers = document.getElementById("computers");
  const user = document.getElementById("user").value;
  const result = document.getElementById("result");
  // console.log(user);
  
  let randomNumber = (min, max) => {
    let random = Math.trunc(Math.random() * (max-min) + min);
    let array = ["sanke", "water", "gun"];
    let computer = array[random];
    computers.innerHTML = computer;
    // console.log(computer)
    
     if (user == "snake") {
    
      if (computer == "sanke") {
          result.innerHTML = "tie";
          score++
          score
        }
     else if (computer == "water") {
        result.innerHTML = "win";
        score++
      } 
      else if (computer == "gun") {
          result.innerHTML = "loose";
          
    }score++
    console.log(score)
  }
     else if (user == "water") {
      if (computer == "sanke") {
          result.innerHTML = "loose";
        } 
        else if (computer == "water") {
            result.innerHTML = "tie";
          }
           else if (computer == "gun") {
        result.innerHTML = "win";
      }
    }
     else if (user == "gun") {
        if (computer == "sanke") {
            result.innerHTML = "win";
          }
       else if (computer == "water") {
          result.innerHTML = "loose";
        } 
        else if (computer == "gun") {
            result.innerHTML = "tie";
      }
    }
  }
  
  randomNumber(0,3);

}
