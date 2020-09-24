
btn=document.querySelector(".btn");
var t="Elave edilib";
ad=document.querySelector('.UserName');
	soyad=document.querySelector('.UserSurName');
	email=document.querySelector('.Email');
	tarix=document.querySelector('.Date');
	data=[]
btn.addEventListener('click',function(){
	user= new UserData(ad.value,soyad.value,email.value,tarix.value);
	data=push(user);
	console.log(data);
})
	let w=100
	
class UserData{
	constructor(_name,_surname,_email,_date){
		this.name=_name;
		this.Surname=_surname;
		this.Email=_email;
		this.Date=_date;	
	}
}

btn.addEventListener('click',function(){
	w+=10;
	let elem=document.createElement('div');
	elem.setAttribute('class','box');
	elem.style.width=w+'px';
	document.body.appendChild(elem);
	
})
