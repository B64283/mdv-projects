//alert("JavaScript works!");

//By Matthew Darke
//SDI 1304 
//Project2 

//Variables
var carnivalName = "Fall County Carnival";
var ContestNames = [ 
    "Pie eating contest",
    "Hotdog eating contest",
    "Pizza eating contest" ];
var KidsName = "Allison";
var ThisYearsGoals = [25, 45, 55];
var FoodLastYear = [20, 40, 50];
var StartStory = "Allison is going to the " + carnivalName +  " Last year she won three eating contests! ";
var enter = true
var SheWins = true
// Procedure 
function eatingcontest(enter) {
     if (enter === true) { 
	     console.log(" This year " + KidsName + " is entering an eating contest at the " + carnivalName + " to try to beat her record lats year. ")
     } else { 
         console.log (" theres always next year for " + KidsName + " to try to beat her record. ") 
	     }
};	     

//Boolean
function WinsAgain() {
	if (SheWins === true) {
	console.log(" the eating contest champ is " + KidsName + " And all she could do now is puke " ); 
	} else {
	    Console.log ("she goes home with a bellyache!" );
    }
    };
    
// Number function last year champ trys to beat her record

function countdown(){
var Soc = 10;
while (Soc > 0) {
    console.log(Soc + "seconds on the clock");
    Soc--;
    };
    console.log("seconds on the clock.");
    console.log("Begin Eating!!");
	}
	
  
 
// string function
function HerGoal() {
	var LastYearsChamp = "Allison";
	 var FoodLastYear =  [20, 40, 50]; 
	    console.log (LastYearsChamp + " is bound and determined to beat her last year records " + FoodLastYear +  " by 5 ");
 
 
 }; 
  
   
    
//Array w/ for loop

var EnterOneContest = function() {
var ContestNames = [ "Pie eating contest", "Hotdog eating contest", "Pizza eating contest" ],
    GoalsPerContest = [ 25, 45, 55 ];
 for (var ContestNumber = 0; ContestNumber < ContestNames.length; ContestNumber++) {
      var ContestName = ContestNames[ContestNumber],
	   GoalThisContest = GoalsPerContest[ContestNumber];
    console.log( " So " + KidsName + " Starts the " + ContestName + " to reach a goal of "  + GoalThisContest + " to win.");
    for (var Goals = 0; Goals < GoalsPerContest; Goals ++) {
    var Goalremain = GoalThisContest - Goals;
	console.log(Goal + " scarffed down, " + Goalremain + " to go! ");   
    }
    console.log( " And " + KidsName + " reached goal and won the " + ContestName + ".");   


};   
}
//output

console.log (StartStory);
eatingcontest(enter);
HerGoal()
console.log(" as nervious as can be " + KidsName + " is ready to start as she waits for the count down! ")
countdown()
EnterOneContest()
WinsAgain()






	