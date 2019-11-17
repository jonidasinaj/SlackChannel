async function validate(){
	var attempt=3;
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	let answer = await fetch('http://localhost:8080/login', {
		method: 'post',
		headers: {
			'Content-Type': 'application/json'
		  },
		body: JSON.stringify({
			username: username,
			password: password
		})
})
if (answer.status == 200) {
	answer = await answer.json();
	console.log('login Successfully');
}
	if ( username == "`3"){
		alert ("Login successfully");
		window.location = "success.html"; // Redirecting to other page.
		return false;
	}
	else{
		attempt --;
		alert("You have left "+attempt+" attempt;");
		//Disabling fields after 3 attempts.
		if( attempt == 0){
			document.getElementById("username").disabled = true;
			document.getElementById("password").disabled = true;
			document.getElementById("submit").disabled = true;
			return false;
		}
	}
}

function registrate(){
	var dots = document.getElementById("dots");
	var moreText = document.getElementById("more");
	var btnText = document.getElementById("submitreg");

	if (dots.style.display === "none") {
		var name = document.getElementById("name").value;
		var surname = document.getElementById("surname").value;
		var uname = document.getElementById("usernamereg").value;
		var psw = document.getElementById("passwordreg").value;
		fetch('http://localhost:8080/register', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json'
			  },
			body: JSON.stringify({
				firstName: name,
				lastName: surname,
				username: uname,
				password: psw
			})
	})
		dots.style.display = "inline";
		btnText.innerHTML = "Read more"; 
		moreText.style.display = "none";
		alert("Yes");
	} else {
		dots.style.display = "none";
		btnText.innerHTML = "Read less"; 
		moreText.style.display = "inline";
		alert("No");
	}
}

function addChannel(){
	var hiddenchannel = document.getElementById("hiddenchannel");
	var channel = document.getElementById("channel");
	var slackbtn = document.getElementById("addbtn");

	if (hiddenchannel.style.display === "none") {
		var channelname = document.getElementById("channelname").value;
		fetch('http://localhost:8080/register', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json'
			  },
			body: JSON.stringify({
				channelName: channelname
			})
	})
		hiddenchannel.style.display = "inline";
		slackbtn.innerHTML = channelname; 
		channel.style.display = "none";
		alert("Yes");
	} else {
		hiddenchannel.style.display = "none"; 
		channel.style.display = "inline";
		alert("No");
	}	
}