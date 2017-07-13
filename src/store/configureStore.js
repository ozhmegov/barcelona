import axios from 'axios';

export default function getUsers() {
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then(function(response){
            console.log(response.data)
        });
}