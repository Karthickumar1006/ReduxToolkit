import { useEffect, useState } from 'react';

const ApiHooks = (URL) => {
    const [data, setData] = useState([]);
    useEffect( () => {
         fetch(URL)
            .then((res) => res.json())
            .then((response) => setData(response))
            .catch((error) => console.log(error));
    },[URL])
    return data;
}
export default ApiHooks;