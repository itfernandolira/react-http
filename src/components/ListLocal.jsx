import React from "react";

import ListElementLocal from "./ListElementLocal";


const ListLocal = (props) => {


    return (
    <>
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th scope="col">Tech</th>
                    <th scope="col">URL</th>
                    <th scope="col">Stars</th>
                    <th scope="col">Logo</th>
                </tr>
            </thead>
            <tbody>
                <ListElementLocal/>
            </tbody>
        </table>
    </>
    );
}

export default ListLocal