const input = document.querySelectorAll("#number");


const enter = document.querySelector("#enter");
const answer = document.querySelector(".inputCalc");
const calculation = document.querySelector(".showCase");
const operation = document.querySelectorAll("#oper");

let number1 = '';
let number2 = '';






function compute(ans){

    operation.forEach(key  => {

        key.addEventListener('click', () =>{

            switch(key.innerText){
                case '+':
                    answer.innerText += "+";
                    break;
                case '-':
                    answer.innerText += '-';
                    break;
                case '*':
                    answer.innerText += '*';
                    break;
                case '/':
                    answer.innerText += '/';
                    break;
                case '^':
                    answer.innerText += '^';
                    break;
                case 'C':
                    reset();
                    break;
            }
        })
    })
}






compute();

function reset(){

    answer.innerText = "";


}







input.forEach(digit =>{

    digit.addEventListener('click', () =>{


        if(digit.innerText == "C"){
            reset();
            
        }else if(digit.innerText == "Enter"){
            reset();

        }else if(digit.innerText == "86855"){
            
        }else if(digit.innerText == "+"){
            console.log("lol");

        } else{
            answer.innerText += digit.innerText;
            number1 = answer.innerText; 
            console.log(number1);
        }





    })


})



const add = function(add1, add2){

    return add1 + add2;



}

const multiply = function(mult1, mult2){
    return mult1 * mult2;

}

const sub = function(sub1, sub2){
    return sub1 * sub2;
    
}
const div = function(div1, div2){
    return div1 * div2;
    
}


enter.addEventListener('click', () =>{

    const answer1 = eval(answer.innerText);

    answer.innerText = answer1;
})