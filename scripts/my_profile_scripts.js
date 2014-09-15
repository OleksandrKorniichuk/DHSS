function closetab(id){           
 	window.onload = window.location.assign("Lobby.html");       
}
function SEND_MESSAGE_TO_OTHER_WINDOWS(id){		
	console.log('URL ' + window.location.href );
	console.log('Message for all');       
}
function SEND_MESSAGE_TO_LOBBY(id){           
 	console.log('URL ' + window.location.href );
	console.log('Message for Lobby');       
}
