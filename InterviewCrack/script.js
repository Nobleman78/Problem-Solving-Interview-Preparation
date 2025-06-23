document.addEventListener('DOMContentLoaded',function(){
    const users = ['Jesmin Chakma', 'Noble Chakma', 'Riti Chakma', 'Arkit Chakma']
    const ulContainer = document.getElementById('userList')
    // Using forEach becuase it is an array
    users.forEach(user=>{
        const li = document.createElement('li')
        li.textContent = user
        ulContainer.appendChild(li)
    })
})