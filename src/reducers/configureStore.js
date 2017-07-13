import axios from 'axios';

export default function getUsers() {
    return (dispatch) => {
        dispatch({
            type: "ADD_USER",
            payload: {
                id:444,
                name:'ggf',
                lastName: 'jdfb'
            }
        })
    }
}