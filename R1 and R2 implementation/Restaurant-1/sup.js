function sendEmail()
{
//     var params =  { 
//         name: document.getElementById("name").value,
//         email: document.getElementById("email").value,
//         message: document.getElementById("message").value,
// };



// emailjs
//     .send(serviceID, templateID, params)
//     .then((res) => {
//         document.getElementById("name").value = "";
//         document.getElementById("email").value = "";
//         document.getElementById("message").value = "";
//         console.log(res);
        
//     })
// .catch((err) => console.log(err));

const serviceID = "service_x6m2k5j";
const templateID = "template_tehkpmp";
emailjs.sendForm('serviceID', 'templateID', '#myForm')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });

}   
