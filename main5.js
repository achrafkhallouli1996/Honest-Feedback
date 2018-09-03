$(document).ready(function(){
  $('#title').focus();
    $('#text').autosize();
});
var i=0;
function nextpic() {
	if  (i<4) 
{document.getElementsByClassName("right")[0].click()
i=i+1;}
else 
{window.location = "file:///home/achraf/Bureau/Honest%20Feedback/thank%20you.html";}
};