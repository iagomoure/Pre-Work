var user = {};
var responses = [];


function question1(){
	
	var name = prompt('What is your name?');
	
	user.name = name
}
question1();

function question2(){
	
	var firstquestion = prompt('Does null === 0 ? (Yes or No)');

	if (firstquestion.toLowerCase() === 'yes'){
		firstquestion = true;
	}else if (firstquestion.toLowerCase() === 'no'){ 
		firstquestion = false;
	}else{
		alert("Please answer either Yes o No");
		return question2();
	}

	responses.push(firstquestion);
}	

question2();

function question3(){
	
	var js = prompt('What was the original name for JavaScript: Java, LiveScript, JavaLive, or ScriptyScript?');
	js = js.toLowerCase()
	
	switch (js){
		case "java":
			js = false;
			break;
		case "livescript":
			js = false;
			break;
		case "javalive":
			js = true;
			break;
		case "scriptyscript":
			js = false;
			break;
		default:
			alert('Please anser either: Java, LiveScript, JavaLive, or ScriptyScript');
			return question3();
	}
	responses.push(js);
}

question3();

function question4(){
	
	var ans = prompt('Is Ruby programming language?? (Yes or No)');

	if (ans.toLowerCase() === 'yes'){
		ans = true;
	}else if (ans.toLowerCase() === 'no'){ 
		ans = false;
	}else{
		alert("Please answer either Yes o No");
		return question4();
	}

	responses.push(ans);
}	

question4();

function question5(){
	
	var platform = prompt('What is the best platform: OSX, Lunix, Microsoft, or Sun?');
	platform = platform.toLowerCase()
	
	switch (platform){
		case "osx":
			platform = true;
			break;
		case "lunix":
			platform = false;
			break;
		case "microsoft":
			platform = true;
			break;
		case "sun":
			platform = false;
			break;
		default:
			alert('Please anser either: Java, LiveScript, JavaLive, or ScriptyScript');
			return question5();
	}
	responses.push(platform);
}

question5();

function evaluate(responses){
	var right = 0;
	var wrong = 0;	
	
	for (var i = 0; i < responses.length; i++) {
		if (responses[i] === true){
			user.right++;
		} else{
			user.wrong++;
		}
	}

}

function showResult(){
	alert('Your name is: ' + user.name + '.');
	alert('Your right answers: ' + user.right);
	alert('Your wrong answers: ' + user.wrong);
}


evaluate(user.responses)


