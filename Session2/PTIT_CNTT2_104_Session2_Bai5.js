let phoneBooks=[];
function addContact(name,phone,email){
    const contact={
        name:name,
        phone:phone,
        email:email
    }
    phoneBooks.push(contact)
}
function displayContact(){
    if(phoneBooks.length===0){
        console.log("Danh ba trong");
    }else{
        console.log("Danh ba: ");
        phoneBooks.forEach((contact,index)=>{
            console.log(`Lien he ${index +1}`);
            console.log(`Ten:${contact.name}`);
            console.log(`SDT:${contact.phone}`);
            console.log(`Email:${contact.email}`);
        })
    }
}
addContact("Vu Duc Huy Hoang","0769220000","duhoang1611@gmail.com");
displayContact();