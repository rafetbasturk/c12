$(function(){

    $("#next").click(function(){

        let currentProfile = $(".active");
        let nextProfile = currentProfile.next();

        if (nextProfile.length == 0) {
            currentProfile.removeClass("active");
            $("#profile-container .profile:first-child").addClass("active");
        } else {
            currentProfile.removeClass("active");
            nextProfile.addClass("active");
        }
    });

    $("#prev").click(function(){
        
        let currentProfile = $(".active");
        let prevProfile = currentProfile.prev();

        if (prevProfile.length == 0) {
            currentProfile.removeClass("active");
            $("#profile-container .profile:last-child").addClass("active");
        } else {
            currentProfile.removeClass("active");
            prevProfile.addClass("active");
        }
    });
});