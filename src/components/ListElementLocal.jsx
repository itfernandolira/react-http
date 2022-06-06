import React,{useEffect, useState} from "react";

const ListElementLocal = (props) => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [techs, setTechs] = useState([]);


    useEffect(() => {
        fetch("data/techs.json")
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setTechs(data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
      }, []);

    if (error) {
        return <tr><td>Error: {error.message}</td></tr>;
    } else if (!isLoaded) {
        return <tr><td>Loading...</td></tr>;
    } else {
        return (
            <>
                {techs.map( (tech,index) => {
                        return (
                        <tr key={index}>
                        <th  scope="row">{tech.tech}</th>
                        <td>{tech.url}</td>
                        <td>{tech.stars}</td>
                        <td>{tech.logo}</td>
                        </tr>
                    );
                }
            )}
            </>
        );
    }
}


export default ListElementLocal;