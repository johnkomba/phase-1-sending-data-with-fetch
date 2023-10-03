// Add your code here
const submitData = {
    Name: "",
    email: "",
  };

const configurationObject = {
 method: "POST",
 headers: {
    "Content-Type": "application/json",
    "Accept": "application/json" ,
 }  ,
 body: JSON.stringify(submitData),
};

return fetch ("http://localhost:4000/users", confifurationObject)
.then(res => res.json())
.then(data => {
    const idElement = document.createElement('p');
    idElement.textContent = submitData.id;
    document.body.appendChild(idElement);
})
.catch(error => {
    console.error('Error:', error);
  });
