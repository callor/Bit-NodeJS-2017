var getId = (phone)=>{return phone+'A0001'}
var getEmail = (id)=>{
	for(var i = 0 ; i < 1000 ; i++);
	return id+'callor@callor.com'
}
var getName = (email)=>{return email+'홍길동'}
var order = (name,title)=>{return name+title}
var orderCoffee = async phoneNumber =>{

	var id = await getId(phoneNumber);
	var email = await getEmail(id);
	var name = await getName(email);
	return await order(name,'에스프레소')

}

orderCoffee('001-1111').then(result=>{
	console.log(result)
})



