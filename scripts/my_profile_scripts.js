/*Меню*/
document.getElementById('nav-lobby').onclick = function() {
	document.getElementById('menu-list').classList.toggle('menu-list-active')
}
document.getElementById('my-profile').onclick = function() {
	document.getElementById('menu').classList.add('none');
	document.getElementById('form-my-profile').classList.add('form-my-profile-active');
	document.getElementById('tab-my-profile-select').classList.add('active-tab-my-profile');
}
document.getElementById('tab-lobby-select').onclick = function() {
	document.getElementById('menu').classList.remove('none');
	document.getElementById('form-my-profile').classList.remove('form-my-profile-active');
	document.getElementById('tab-my-profile-select').classList.add('active-tab-my-profile');
}
document.getElementById('tab-my-profile-select').onclick = function() {
	document.getElementById('menu').classList.add('none');
	document.getElementById('form-my-profile').classList.add('form-my-profile-active');
	document.getElementById('tab-my-profile-select').classList.add('active-tab-my-profile');
}
document.getElementById('close-tab').onclick = function() {
	window.onload = window.location.assign("My_profile.html"); 
}
document.getElementById('SEND_MESSAGE_TO_OTHER_WINDOWS').onclick = function() {
	console.log('URL ' + window.location.href );
	console.log('Message for all') ;
}
document.getElementById('SEND_MESSAGE_TO_LOBBY').onclick = function() {
	console.log('URL ' + window.location.href );
	console.log('Message for Lobby');
}
document.getElementById('close').onclick = function() {
	window.onload = window.location.assign("My_profile.html"); 
}
