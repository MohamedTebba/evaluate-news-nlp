// import babel polyfill to use a custom regenrator runtime
import 'babel-polyfill';
//import whatwg-fetch to allow jest to recognize fetch
import 'whatwg-fetch';

const postData = async (url = "", data = {}) => {
    
    const response = await fetch(url, {
        method: "POST",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });
        response.json()
            .then((data) => {
                console.log(data)
                return data
            })
            .catch((err) => {
                console.log('cached err', err)
            })
};

const getData = async url => {
    const res = await fetch(url);
    try {
        const data = await res.json();
        return data;
    } catch (error) {
       alert(`we couldn't reach the URL try again`)
     }
};

export {postData, getData}