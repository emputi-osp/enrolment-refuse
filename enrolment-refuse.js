var _i = function(indexOf) {
    setTimeout(function() {
        opener.PageMove2019AfterVersion(indexOf);
        console.log("Page:" + indexOf);
        if(indexOf < chapterInfo.length) {
            _i(indexOf + 1);
        }
        else {
            alert("Done!");
        }
    }, 5000);
};
// What is the start page for the job? (If it is 0, it starts from the beginning)
_i(0);
