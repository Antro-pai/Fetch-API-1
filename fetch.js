// fetch('https://jsonplaceholder.typicode.com/users')
// .then( (res)=>res.json())
// .then((data)=> console.log(data));

// const data={
//     title:"this is the title",
//     body:"this is the body",
//     userId:2
// }

// fetch('https://jsonplaceholder.typicode.com/posts',{
//     method:'POST',
//     body: JSON.stringify(data),
//     headers:{
//         'Content-type': 'application/json',
//     }
// })
//  .then(res=>res.json())
//  .then(console.log(data))

fetch('https://jsonplaceholder.typicode.com/users')
.then(res=>res.json())
.then(data=>{
data.forEach(user => {
    const markup=`<li>${user.name}</li>`;
    document.querySelector('ul').insertAdjacentHTML('beforeend',markup);
});
})
.catch(error=>console.log(error))
