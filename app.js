var randomNumber = Math.floor(Math.random() * 10)
var btnSubmit = document.querySelector('.submit')

btnSubmit.addEventListener('click', function(){
        var input = document.querySelector('input').value;
        if(input === ''){
            alert("Enter a number 👇")
        }
        else{
            function randomNumberGame(){
                if (input < randomNumber){
                    document.querySelector("h1").innerHTML = "You wrote a number LESS than the robot thought"
                    document.querySelector("h1").style.fontSize = "70px"
                }
                else if(input > randomNumber){
                    document.querySelector("h1").innerHTML = "You've Typed a BIGGER Number Than the Robot Thinks"
                    document.querySelector("h1").style.fontSize = "70px"
                }
                else{
                    document.querySelector("h1").innerHTML = "Congratulations👏, You Found The Number The Robot Thinks"
                    document.querySelector("h1").style.fontSize = "70px"
                }
    
        }
        randomNumberGame()
        }
})

var element = document.getElementById('btn')
element.addEventListener('click', function(){
    document.querySelector(".h3-btn").innerHTML = "Correct Answer is " + randomNumber
})






