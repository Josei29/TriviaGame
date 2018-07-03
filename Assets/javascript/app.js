$(document).ready(function() {

    $("#Start").on("click", function() { 
        $("#Start").hide();

        var Questions =[
            {
                Question: "Inception",
                image: "Assets/images/inception.jpg",
                op1:"Inception",
                op2: "Matrix",
                op3: "Interstellar",
                op4: "Dr. Strange",
                Answer: "1"            
            },
            {
                Question: "Infinity War",
                image: "Assets/images/infinitywar.jpg",
                op1: "Spiderman: Homecoming",
                op2: "Captain America: Civil War",
                op3: "Avengers: Infinity War",
                op4: "Guardians Of The Galaxy",
                Answer: "3"
            },
            {
                Question: "Social Network",
                image: "Assets/images/socialnetwork.jpg",
                op1: "Zombieland",
                op2: "The Amazing Spiderman",
                op3: "Hacksaw Ridge",
                op4: "The Social Network",
                Answer: "4"
            },
            {
                Question: "The Town",
                image: "Assets/images/thetown.jpg",
                op1: "Armored",
                op2: "The Town",
                op3: "30 Minutes or Less",
                op4: "Den of Thieves",
                Answer: "2"
            }
        ] // Questions

        var Time = 10;
        var Correct = 0;
        var Incorrect = 0;
        var Empty = 0;
        var Q = 0;

        var QuestionIndex = Questions.length;
        // $("#Poster").html("<img src="+Q1.image+" alt= Poster>");
        var Interval = setInterval(TimeLeft, 1000);

        function TimeLeft() {
            if (Interval) {
                $("#Time").html(Time);
                Time--;
                Guess();
                if (Time < 0) {
                    Empty++;
                    Time = 10;
                    Q++;
                    Check();
                } // If Time
            } // If Interval
        } // TimeLeft

        function Guess() {
            $("#Poster").html("<img src=" + Questions[Q].image + ">");
            $("#Option1").html("<h2>" + Questions[Q].op1 + "</h2>");
            $("#Option2").html("<h2>" + Questions[Q].op2 + "</h2>");
            $("#Option3").html("<h2>" + Questions[Q].op3 + "</h2>");
            $("#Option4").html("<h2>" + Questions[Q].op4 + "</h2>");
        } // Guess

        function User() {
            $(".OP").on("click", function() {
                var Answer;
                var YourGuess = $(this);
                Answer = YourGuess[0].title;
                if (Answer == Questions[Q].Answer) {
                    console.log("Correct!");
                    Correct++;
                    Q++;
                    Time = 10;
                    Check();
                    TimeLeft();
                }
                else {
                    console.log("Incorrect");
                    Incorrect++;
                    Q++;
                    Time = 10;
                    Check();
                    TimeLeft();
                }
            }) // On Click
        }

        function Results() {
            $("#Results").html("Results");
            $("#Correct").html("<h2>Correct Guesses: " + Correct + "</h2>");
            $("#Incorrect").html("<h2>Incorrect Guesses: " + Incorrect + "</h2>");
            $("#None").html("<h2>Unanswered: " + Empty + "</h2>");
        } // Results

        function Check() {
            if(Q === QuestionIndex) {
                clearInterval(Interval);
                $(".OP").empty();
                $("#Poster").empty();
                $(".Text").empty();
                Results();
            } // If
            else {
                Guess();
            } // Else
        }

        Guess();
        TimeLeft();
        User();

        
    }); // Start
}); // Document Ready

