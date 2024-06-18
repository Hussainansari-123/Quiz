const questions = [{
    'que':'Which of the following is the markup language',
    'a':'HTML',
    'b':'CSS',
    'c':'JAVA SCRIPT',
    'd':'PHP',
    'correct':'a',
},
{
    'que':'What year was javascript launched',
    'a':'1996',
    'b':'1995',
    'c':'1994',
    'd':'1993',
    'correct':'b',
},
{
    'que':'What does CSS stands for',
    'a':'Hyper Text Markup Language',
    'b':'Cascding Style Sheet',
    'c':'Jason Object Notation',  
    'd':'Computer Style Sheet',    
    'correct':'b',
}
]
let index=0;
let total=questions.length;
let right=0;
let wrong=0;
const quebox=document.querySelector(".quebox");
const options=document.querySelectorAll(".options");
const uploadques = () =>{
    if(index==total){
        return endquiz();
    }
    reset();
    const  data = questions[index];
    quebox.innerText=  `${index+1}) ${data.que}`;
    options[0].previousElementSibling.innerText=`a) ${data.a}`;
    options[1].previousElementSibling.innerText=`b) ${data.b}`;
    options[2].previousElementSibling.innerText=`c) ${data.c}`;
    options[3].previousElementSibling.innerText=`d) ${data.d}`;
}

const submitques=()=>{
    const data=questions[index];
    const ans=getanswer()
    if(ans==data.correct){
        right++;
    }else{
        wrong++;
    }
    index++;
    uploadques();
    return ;
}
getanswer=()=>{
    let answer;
    options.forEach(
        (input)=>{
        if(input.checked){
            answer= input.value;
            
        }
    }
    ) 
    return answer;
    }
    const reset=()=>{
        options.forEach((input)=>{
        input.checked=false;    
        })
    }
    const endquiz=()=>{
        document.getElementById("box").innerHTML =`
        <h2>Thank you for playing the quize</h2>;
        <h2>${right} / ${total}are correct</h2>`
    }

uploadques();
























