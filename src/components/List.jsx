import React, {useState} from "react";

import ListElement from "./ListElement";
import Input from "./Input";


const List = (props) => {

    const [search, setSearch] = useState(undefined);

    function aoEscrever(e) {
        setSearch(e.target.value);
    }

    return (
    <>
        <Input id="search" name="search" label="Search" value={search} aoEscrever={aoEscrever} />
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th scope="col">Country</th>
                    <th scope="col">Region</th>
                    <th scope="col">Subregion</th>
                    <th scope="col">Flag</th>
                </tr>
            </thead>
            <tbody>
                <ListElement search={search}/>
            </tbody>
        </table>
    </>
    );
}

export default List