// I. jQuery CDN

// $(document).ready(function() {
//     $("button").click(function() {
//         $("p").hide();
//     });
// });

//  II. jQuery Selectors
//  One more time we'll click the button to hide all three paragpraphs

// $(document).ready(function() {
//     $("button").click(function() {
//         $("p").hide();
//     });
// });

// Now, what if we simply want, say, the paragraph 2 (id="par") get hidden? just try it, bro ;)

// $(document).ready(function() {
//     $("button").click(function() {
//         $("#par").hide();
//     });
// });

// Now, let's do the same but in accordance with the class
// We will add the class the name of which is "test"

// $(document).ready(function() {
//     $("button").click(function() {
//         $(".test").hide();
//     });
// });

// III. jQuery Event Methods

// Let's use the Click-Method

// $(document).ready(function() {
//     $("p").click(function() {
//         $(this).hide();
//     });
// });

//  Now, we'are gonna do the same like in the previous example, but each paragpraph will get hidden after the double-click

// $(document).ready(function() {
//     $("p").dblclick(function() {
//         $(this).hide();
//     });
// });

// The mouseenter() method

// $(document).ready(function() {
//     $("p").mouseenter(function() {
//         alert("Hello, buddy");
//     });
// });

// The mouseleave() method

// $(document).ready(function() {
//     $("p").mouseleave(function() {
//         alert("Now you are leaving. So, pa-pa!");
//     });
// });

// The mousedown() method 
// But, let's add 

// $(document).ready(function() {
//     $("#down").mousedown(function() {
//         alert("Hey-hey!");
//     });
// });

// The mouseup() method

// $(document).ready(function() {
//     $("#up").mouseup(function() {
//         alert("Did you notice the separate window pop up?");
//     });
// });

// The hover() method

// $(document).ready(function() {
//     $("p").hover(function() {
//         alert("Here's the notification! Can you see that?");
//     },
//     function() {
//         alert("Are you sure you have read it properly?!");
//     });
// });

// The focus() method

// $(document).ready(function() {
//     $("input").focus(function() {
//         $(this).css("background-color", "yellow");
//     });
//     $("input").blur(function() {
//         $(this).css("background-color", "red");
//     });
// });

// The on() method 

// $(document).ready(function() {
//     $("p").on("click", function() {
//         $(this).hide();
//     });
// });

// Before the end let's add some Event Handlers: mouseenter, mouse leave, click

$(document).ready(function() {
    $("p").on({
        mouseenter: function() {
            $(this).css("background-color", "pink");
        },
        mouseleave: function() {
            $(this).css("background-color", "red");
        },
        click: function() {
            $(this).css("background-color", "yellow");
        },
    });
});