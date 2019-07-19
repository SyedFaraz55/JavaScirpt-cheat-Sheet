// Function Constructor for Question

(function(){
    function Questions(question,options,answer){
        this.question = question;
        this.answer = answer;
        this.options = options;
    };
    
    Questions.prototype.displayQuestion = function(){
        console.log(this.question);
        for(let i=0; i<this.options.length;i++){
            console.log(i + ': ' + this.options[i]);
        }
    }
    
    Questions.prototype.checkAnswer = function(ans) {
        if(ans===this.answer){
            console.log("Correct Answer !");
        }else {
            console.log("wrong Answer,Try Again");
        }
    }
    var question1 = new Questions('What is JS ?',['JavaScript','JavaSun','JavaSystems'],0);
    var question2 = new Questions('What is first name of JavaScript ?',['EcmaScript','Mocha','JavaScript'],1);
    var question3 = new Questions('Who invented C programming ?',['Steve Jobs','Bill gates','Dennis Ritche'],2);
    
    let questions = [question1,question2,question3];
    var n = Math.floor(Math.random()*questions.length);
    
    questions[n].displayQuestion();
    
    let correctAnswer = parseInt(prompt("Please Select the correct Answer"));
    questions[n].checkAnswer(correctAnswer)
})();
 