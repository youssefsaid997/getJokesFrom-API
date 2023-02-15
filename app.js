document.querySelector('#btn').addEventListener('click',function(e){
    const number = document.getElementById('number').value;
    console.log(number);

    const xhr = new XMLHttpRequest()

    xhr.open('GET',`https://api.chucknorris.io/jokes/random/${number}`,true);

    let output= '';

    xhr.onload=function(){
        if(this.status===200){
            const resText= JSON.parse(this.responseText);
            console.log(resText.value)
            
                output+=`
                <li>${resText.value}</li>
                `;
            }else{
                output+=`<li>Something went Wrong</li>`
            
        }
        document.getElementById('jokes').innerHTML=output;
    }

    xhr.send();
    e.preventDefault();
})