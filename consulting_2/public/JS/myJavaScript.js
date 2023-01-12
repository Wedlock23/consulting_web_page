//please ensure javascript is connected in the head of html


//the board's array 
//let play_board = ["", "", "", "", "", "", "", "", ""];

//boolean to switch whose turn it is
let boolPlayer = 1;
    
/* console.log('Default value of bool is',
                    testBool); */
//toggle function is intended to switch whose turn 
//is is with each click of a button                    
// function toggle() {
//     testBool = !testBool;

//     console.log('Toggled bool is',
//                         testBool);
/* // }
$(document).ready(function(){
    $("#btn").click(function(){
        $("div1").fadeIn();
        $("div2").fadeIn("slow");
        $("div3").fadeIn(3000);
    });
    });
 */

    //function with the text box and references h2 heading
$(document).ready(function(){
    $("#btn1").click(function(){
        $("h2").load("./myTextDoc.txt")
    });
    });

    //top left button function
    $(document).ready(function(){
        $("#bt").click(function(){
            $("#bt").parents("td").css({"color":"black", "border": "2px solid black"});
            if (boolPlayer == 0){
                document.getElementById("bt").innerText= "X";
                boolPlayer = 0;
            }else{
                document.getElementById("bt").innerText= "O";
                boolPlayer = 1;
            }
        });
    });
    //Top middle button 
    $(document).ready(function(){
        $("#bt1").click(function(){
            $("#bt1").parents("td").css({"color":"black", "border": "2px solid black"});
            if (boolPlayer == 0){
                document.getElementById("bt1").innerText= "X";
                boolPlayer = 1;
            }else{
                document.getElementById("bt1").innerText= "O";
                boolPlayer = 0;
            }
        });
    });
    //top right Button Function
    $(document).ready(function(){
        $("#bt2").click(function(){
            $("#bt2").parents("td").css({"color":"black", "border": "2px solid black"});
            if (boolPlayer == 0){
                document.getElementById("bt2").innerText= "X";
                boolPlayer = 0;
            }else{
                document.getElementById("bt2").innerText= "O";
                boolPlayer = 1;
            }
        });
    });

    //middle left button
    $(document).ready(function(){
        $("#bt3").click(function(){
            $("#bt3").parents("td").css({"color":"black", "border": "2px solid black"});
            if (boolPlayer == 0){
                document.getElementById("bt3").innerText= "X";
                boolPlayer = 0;
            }else{
                document.getElementById("bt3").innerText= "O";
                boolPlayer = 1;
            }
        });
    });

    //middle middle button
    $(document).ready(function(){
        $("#bt4").click(function(){
            $("#bt4").parents("td").css({"color":"black", "border": "2px solid black"});
            if (boolPlayer == 0){
                document.getElementById("bt4").innerText= "X";
                boolPlayer = 0;
            }else{
                document.getElementById("bt4").innerText= "O";
                boolPlayer = 1;
            }
        });
    });

    //middle left button
    $(document).ready(function(){
        $("#bt5").click(function(){
            $("#bt5").parents("td").css({"color":"black", "border": "2px solid black"});
            if (boolPlayer == 0){
                document.getElementById("bt5").innerText= "X";
                boolPlayer = 0;
            }else{
                document.getElementById("bt5").innerText= "O";
                boolPlayer = 1;
            }
        });
    });

    //bottom right button
    $(document).ready(function(){
        $("#bt6").click(function(){
            $("#bt6").parents("td").css({"color":"black", "border": "2px solid black"});
            if (boolPlayer == 0){
                document.getElementById("bt6").innerText= "X";
                boolPlayer = 0;
            }else{
                document.getElementById("bt6").innerText= "O";
                boolPlayer = 1;
            }
        });
    });

    //bottom middle button
    $(document).ready(function(){
        $("#bt7").click(function(){
            $("#bt7").parents("td").css({"color":"black", "border": "2px solid black"});
            if (boolPlayer == 0){
                document.getElementById("bt7").innerText= "X";
                boolPlayer = 0;
            }else{
                document.getElementById("bt7").innerText= "O";
                boolPlayer = 1;
            }
        });
    });

//bottom left button
$(document).ready(function(){
    $("#bt8").click(function(){
        $("#bt8").parents("td").css({"color":"black", "border": "2px solid black"});
        if (boolPlayer == 0){
            document.getElementById("bt8").innerText= "X";
            boolPlayer = 0;
        }else{
            document.getElementById("bt8").innerText= "O";
            boolPlayer = 1;
        }
    });
});

function Mu_Engage() {
    window.location.assign("https://mizzouone.missouri.edu/task/all/engage")
}

function Event_Calendar() {
    window.location.assign("https://calendar.google.com/calendar")
}

function Google_Sheets() {
    window.location.assign("https://workspace.google.com/products/forms/")
}

function MU_MainPage() {
    window.location.assign("https://missouri.edu")
}