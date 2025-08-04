function displayUserInfo(user){
    let name=user.name
    let age=user.age
    let city="unknown"
    let country="unknown"
    if(user.location){
        if(user.location.city){
            city=user.location.city
        }if(user.location.country){
            country=user.location.country
        }
    }
    let email="unknown"
    let phone="unknown"
    if(user.contact){
        if(user.contact.email){
            email=user.contact.email
        }
        if(user.contact.phone){
            phone=user.contact.phone
        }
    }
    let jobTitle="unknown";
    let jobCompany="unknown";
    if(user.job){
        if(user.job.title){
            jobTitle=user.job.title
        }
        if(user.job.company){
            jobCompany=user.job.company
        }
    }
   console.log(`${name} is ${age}  years old, lives in ${city}, ${country}, works as ${jobTitle} at ${jobTitle}, and can be contacted via ${email} or ${phone}.`);
   
}
const user1 = {
  name: "Anna",
  age: 30,
  location: { city: "Da Nang", country: "Vietnam" }
};

const user2 = {
  name: "John",
  age: 25,
  location: { city: "Hanoi", country: "Vietnam" },
  contact: { email: "john@example.com", phone: "0123456789" },
  job: { title: "Developer", company: "Tech Corp" }
};
displayUserInfo(user1);
displayUserInfo(user2);