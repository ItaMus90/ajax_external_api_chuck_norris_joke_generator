
//Event Listener
document.querySelector('.get-jokes').addEventListener('click',getJokes);

//Function
function getJokes(e){
    var number = document.querySelector('input[type="number"]').value;
    var xhr = new XMLHttpRequest();

    xhr.open('GET','http://api.icndb.com/jokes/random/' + number, true);

    xhr.onload = function(){
        if(this.status == 200){
            var response = JSON.parse(this.responseText);
            
            var output = '';

            if(response.type === "success"){
                response.value.forEach(function(joke){
                    output += '<li> ' + 
                        joke.joke + ' </li>';
                });
            }else{
                output += '<li>Something Went Worng</li>';
            }

            document.querySelector('.jokes').innerHTML = output;
        }
    }

    xhr.send();

    e.preventDefault();
}