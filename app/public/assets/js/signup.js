// const ddslick = require("ddslick");

// $(function(){
//   let avatarOptions = [
//       { id: 0, text: "Koala", "img" : "koala.jpg" }
//   ]

//   $(".image-selector").select2({
//       templateResult : state => {
//         if( ! state.id ) return state.text;

//         let basePath = "/path/to/images/";

//         let html = $(`<span><img src="${basePath}${state.img}" /><span>${state.text}</span></span>`)

//         return html;
//       }
//   })

var avatarOps = [
    {
        text: "pig",
        value: "/assets/img/faces/pig.png",
        selected: false,
        description: "You travel for the food!",
        imageSrc: "/assets/img/faces/pig.png"
    },
    {
        text: "raccoon",
        value: "/assets/img/faces/raccoon.png",
        selected: false,
        description: "A true adventurer. You can forage for your food and climb to the highest points.",
        imageSrc: "/assets/img/faces/raccoon.png"
    },
    {
        text: "lion",
        value: "/assets/img/faces/lion.png",
        selected: false,
        description: "You are on the prowl for excitement, but you don't mind some downtime in the sun.",
        imageSrc: "/assets/img/faces/lion.png"
    },
    {
        text: "toucan",
        value: "/assets/img/faces/toucan.png",
        selected: false,
        description: "All things sunny! Bring you the fuity drink and let you fly around with your friends",
        imageSrc: "/assets/img/faces/toucan.png"
    },
    {
        text: "elephant",
        value: "/assets/img/faces/elephant.png",
        selected: false,
        description: "You love to travel in packs. You travel to build your global community!",
        imageSrc: "/assets/img/faces/elephant.png"
    }
];
    

$('#avatar').ddslick({
    data: avatarOps,
    width: "80%",
    selectText: "Select your spirit animal",
    imagePosition:"left",
    background: "transparent",
    color: "black",
    onSelected: function(selectedAvatar){
        //callback function: do something with selectedData;
        console.log(selectedAvatar);
    }   
});

$('#avatar').find('input[type=hidden]:first').attr("name", "avatar");

$("#signup-btn").on("click", function (event) {
    event.preventDefault();
    
    var newUser = {
        username: $("#user-name").val().trim(),
        email: $("#user-email").val().trim().toLowerCase(),
        password: $("#user-password").val(),
        gender: $("#user-gender").val().trim(),
        user_image: $('[name="avatar"]')[0].value
    }

    console.log(newUser);

    // Send an AJAX POST-request with jQuery
    $.post("/api/users", newUser)
    
        // On success, run the following code
        .then(function (dbUser) {
            localStorage.setItem("user_id", dbUser.id);
            window.location.href="/profile/" + dbUser.id;
        });

    
});