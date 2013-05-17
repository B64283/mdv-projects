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
var IntroStory = "Allison is going to the " + carnivalName +  " Last year she won three eating contests ";

// Procedure 
function eatingcontest(enter) {
     if (enter === true) { 
	     console.log(" This year " + KidsName + " is entering an eating contest at the " + carnivalName + " to try to beat her record ")
     } else { 
         console.log (" theres always next year for " + KidsName + " to try to beat her record. ") 
	     }
};	     

//Boolean
function AccomplishesGoalFor(Pie, HotDog, Pizza ) {
	if (Pie && !(HotDog || Pizza)) {
		console.log(" the eating contest champ is " + KidsName + " And all she could do now is puke " ) 
	} else {
	    Console.log ("she goes home with a bellyache!" );
    }
    return true;
};
// Number function last year champ trys to beat her record
var countup = function(What, Howmany) {
	
	for ( pies = 0; pies >= 20; pies =+5){
	
	console.log(pies + "Scarffed down.");
	
	if (pies<20) {
	
      	    consloe.log("she ate five more to win the high score");
        
        } else { 

             console.log(KidsName + " asks why do I do this to myself ? "); 

        } 
      console.log(" ");
     }
}
countup("pies", 20);

var countup = function(What, Howmany) {
    
    for (HotDogs = 0; HotDogs >= 40; HotDogs =+5){
	    
    console.log(Hotdogs + "Scarffed down.");
	
	if (Pizza<40) {
	
      	    consloe.log("she ate five more to win the high score");
        
        } else { 

             console.log(KidsName + " asks why do I do this to myself ? "); 

        } 
      console.log(" ");
     }
}
 countup( " HotDogs ", 40);   
 
 var countup = function(what, Howmany) {
    
    for (Pizza = 0; Pizza >= 50; Pizza =+5){
	 
 console.log(Pizza + "Scarffed down.");
	
	if (Pizza<50) {
	
      	    consloe.log("she ate five more to win the high score");
        
        } else { 

             console.log(KidsName + " asks why do I do this to myself ? "); 

        } 
      console.log(" ");
     }
}
 countup("Pizza", 50);   

// string function
function HerGoal(PieRecord, HotDogRecord, PizzaRecord ) {
	var LastYearsChamp = "Allison";
	    string = LastYearsChamp + " is bound and determined to beat her " + PieRecord + " by 5 and her " + HotDogRecord + " by 5 and her " + PizzaRecord + " by 5 ";
  return  string
}   
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    















 Array w/ for loop
var ContestNames = [ "Pie eating contest", "Hotdog eating contest", "Pizza eating contest" ],
    GoalsPerContest = [ 25, 45, 55 ],
for (var ContestNumber = 0; ContestNumber < ContestNames.length; ContestNumber ++) {
    var ContestName = ContestNames[ContestNumber],
	    GoalThisContest = GoalsPerContest[ContestNumber];
    console.log( " So " + KidsName + " Starts the " + ContestName + " to reach a goal of "  + GoalThisContest + " to win.");
    for (var Kids = 0; Kids < KidsName; Kids ++) {
    for (var Goal = 0; Goal < GoalsPerContest; Goal ++)
    var Goalremain = GoalThisContest - Goal;
	console.log(Goal + " finish, " + Goalremain + " Left! ");   
    }
console.log( "And " + KidsName + " reached goal and won the " + ContestName + ".");
}
}
























	