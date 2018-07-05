$(document).ready(function() {

    $(".OP").hide();
    $("#Restart").hide();

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
            },
            {
                Question: "A Quiet Place",
                image: "Assets/images/a-quiet-place.jpg",
                op1: "Don't Breathe",
                op2: "Get Out",
                op3: "A Quiet Place",
                op4: "Truth Or Dare",
                Answer: "3"
            },
            {
                Question: "Ready Player One",
                image: "Assets/images/ReadyPlayerOne.jpg",
                op1: "Ready Player One",
                op2: "Wreck It Ralph",
                op3: "Tron: Leagacy",
                op4: "Star Wars: The Clone Wars",
                Answer: "1"
            },
            {
                Question: "It",
                image: "Assets/images/it.jpg",
                op1: "Clown",
                op2: "The Conjuring 2",
                op3: "Anabelle",
                op4: "It",
                Answer: "4"
            },
            {
                Question: "The Matrix Reloaded",
                image: "Assets/images/the-matrix-reloaded.jpg",
                op1: "The Matrix",
                op2: "The Matrix Reloaded",
                op3: "Matrix Revolutions",
                op4: "John Wick",
                Answer: "2"
            },
            {
                Question: "Star Wars: The Force Awakens",
                image: "Assets/images/the-force-awakens.jpeg",
                op1: "Star Wars: The Force Awakens",
                op2: "Star Wars: The Last Jedi",
                op3: "Star Wars: Return Of The Jedi",
                op4: "Star Wars: Revenge Of The Sith",
                Answer: "1"
            },
            {
                Question: "The Dark Knight",
                image: "Assets/images/joker.jpg",
                op1: "Justice League",
                op2: "Suicide Squad",
                op3: "The Dark Knight",
                op4: "Batman vs Superman",
                Answer: "3"
            }
        ] // Questions

        var Time = 20;
        var Correct = 0;
        var Incorrect = 0;
        var Empty = 0;
        var Q = 0;

        var QuestionIndex = Questions.length;
        var Interval = setInterval(TimeLeft, 1000);

        function TimeLeft() {
            if (Interval) {
                $("#Time").html(Time);
                Time--;
                Guess();
                if (Time < 0) {
                    Empty++;
                    Time = 20;
                    Q++;
                    Check();
                } // If Time
            } // If Interval
        } // TimeLeft

        function Guess() {
            if (Q != QuestionIndex) {
                $(".OP").show();
                $("#Poster").html("<img src=" + Questions[Q].image + ">");
                $("#Option1").html("<h2>" + Questions[Q].op1 + "</h2>");
                $("#Option2").html("<h2>" + Questions[Q].op2 + "</h2>");
                $("#Option3").html("<h2>" + Questions[Q].op3 + "</h2>");
                $("#Option4").html("<h2>" + Questions[Q].op4 + "</h2>");
            } // If
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
                    Time = 20;
                    Check();
                    TimeLeft();
                }
                else {
                    console.log("Incorrect");
                    Incorrect++;
                    Q++;
                    Time = 20;
                    Check();
                    TimeLeft();
                }
            }) // On Click
        }

        function Results() {
            $(".OP").hide();
            $(".Hide").show();
            $("#Results").html("Results!");
            $("#Correct").html("<h2>Correct Guesses: " + Correct + "</h2>");
            $("#Incorrect").html("<h2>Incorrect Guesses: " + Incorrect + "</h2>");
            $("#None").html("<h2>Unanswered: " + Empty + "</h2>");
            $("#Oscar").html("<img id='Oscar' src=Assets/images/oscar.jpg >");
            $("#Restart").html("Restart");
        } // Results

        function Check() {
            if(Q === QuestionIndex) {
                clearInterval(Interval);
                $(".OP").empty();
                $(".OP").hide();
                $("#Poster").empty();
                $(".Text").hide();
                Results();
            } // If
            else {
                Guess();
            } // Else
        }

        function Restart() {
            $("#Restart").on("click", function() {
                Time = 20;
                Correct = 0;
                Incorrect = 0;
                Empty = 0;
                Q = 0;

                QuestionIndex = Questions.length;
                Interval = setInterval(TimeLeft, 1000);

                $(".Hide").hide();
                $(".Text").show();

                TimeLeft();
            })
        }

        TimeLeft();
        User();
        Restart();

        
    }); // Start
}); // Document Ready

