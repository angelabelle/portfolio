


function on() {
    document.getElementById("overlay").style.display = "block";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}


function on2() {
    document.getElementById("overlay-2").style.display = "block";
}

function off2() {
    document.getElementById("overlay-2").style.display = "none";
}


function on3() {
    document.getElementById("overlay-3").style.display = "block";
}

function off3() {
    document.getElementById("overlay-3").style.display = "none";
}


function on4() {
    document.getElementById("overlay-4").style.display = "block";
}

function off4() {
    document.getElementById("overlay-4").style.display = "none";
}


function on5() {
    document.getElementById("overlay-5").style.display = "block";

}

function off5() {
    document.getElementById("overlay-5").style.display = "none";
    var iframe = document.querySelector('iframe');
        var player = new Vimeo.Player(iframe);

        player.on('play', function() {
            console.log('played the video!');
        });

        player.getVideoTitle().then(function(title) {
            console.log('title:', title);
        });


    if ( iframe ) {
   var player = new Vimeo.Player( iframe )
   player.pause()

 }

}


function on6() {
    document.getElementById("overlay-6").style.display = "block";
}

function off6() {
    document.getElementById("overlay-6").style.display = "none";
}


function on7() {
    document.getElementById("overlay-7").style.display = "block";
}

function off7() {
    document.getElementById("overlay-7").style.display = "none";
}


function on8() {
    document.getElementById("overlay-8").style.display = "block";
}

function off8() {
    document.getElementById("overlay-8").style.display = "none";
}


function on9() {
    document.getElementById("overlay-9").style.display = "block";
}

function off9() {
    document.getElementById("overlay-9").style.display = "none";
}



function on10() {
    document.getElementById("overlay-10").style.display = "block";

    var iframe = document.querySelector('iframe');
        var player = new Vimeo.Player(iframe);

        player.on('play', function() {
            console.log('played the video!');
        });

        player.getVideoTitle().then(function(title) {
            console.log('title:', title);
        });


    if ( iframe ) {
   var player = new Vimeo.Player( iframe )
   player.pause()
}

}

function off10() {
    document.getElementById("overlay-10").style.display = "none";
}


function on11() {
    document.getElementById("overlay-11").style.display = "block";
}

function off11() {
    document.getElementById("overlay-11").style.display = "none";
}


function on12() {
    document.getElementById("overlay-12").style.display = "block";

    var iframe = document.querySelector('iframe');
        var player = new Vimeo.Player(iframe);

        player.on('play', function() {
            console.log('played the video!');
        });

        player.getVideoTitle().then(function(title) {
            console.log('title:', title);
        });


    if ( iframe ) {
   var player = new Vimeo.Player( iframe )
   player.pause()
}

}

function off12() {
    document.getElementById("overlay-12").style.display = "none";
}
