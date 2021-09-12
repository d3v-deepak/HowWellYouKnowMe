var readLineSync=require
('readline-sync')

var chalk=require("chalk")
var score=0; 
console.log(chalk.blue('How well you know Deepak Quiz'));

var userName =readLineSync.question("What is your name :")
console.log(userName)


var highScorers=[
{
  "deepak":10,
  "john":8
}

]

var questions=[

{
  "question":"Which was Deepak's First School ?",
  "answer":1,
  "options":["SFS","St.Johns","KV"]
},
{
  "question":"What Deepak wanted himself to be in his childhood?",
  "answer":2,
  "options":["Doctor","Astronaut","Pilot"]
},
{
  "question":"Which  among following  is Deepak's First Bike  ?",
  "answer":1,
  "options":["SHINE","GIXER","FZ"]
},
{
  "question":"In which city Deepak got his first Job  ?",
  "answer":3,
  "options":["Goa","Mumbai","Pune"]
},
{
  "question":"Which laptop Deepak uses to code ?",
  "answer":2,
  "options":["HP","Lenovo","Dell"]
}




]

function check(answer,userAnswer){

if(answer==userAnswer){
console.log("is the Righttt Answerrr...")
score=score+1;
}
else{
console.log(chalk.black.bgWhite.bold("is the Wrong Answer..."))


}

}

for(var i=0;i<questions.length;i++){
console.log("\n");
var currentQuestion=questions[i]
console.log(i+1,currentQuestion.question)
for(var j=0;j<currentQuestion.options.length;j++){
  console.log(j+1+" "+currentQuestion.options[j])
}
// console.log(questions[i].options[i+1])
var userAnswer=readLineSync.question("")
console.log(currentQuestion.options[userAnswer-1])
check(currentQuestion.answer,userAnswer)

}


console.log("You Scored" ,score)
if(score ==5 )
{
console.log("You're the Highest Scorrer")
}
else if(score >=3 || score == 4 ){
console.log("You Know Deepak Quite well")
}
else{
  console.log("You need to know him more")
}






