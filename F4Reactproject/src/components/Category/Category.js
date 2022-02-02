import React from "react";
import {useParams} from "react-router-dom";

import "../../styles/Category.css";


function Category(props) {

    const params = useParams()
    const categoryData = props.objectData[params.id];


    return (
        <div>
            <h2>
                Here we present to you our take for the following category: {params.id}
            </h2>
            <br/>
            <br/>
            <div>
                {Object.keys(categoryData).map(keys =>
                    <div className={"recipes"} key={keys}>
                        <h3>
                            <a href={`/category/${params.id}/recipe/${keys}`}>
                                {keys}
                            </a>
                        </h3>
                        <p>
                            {categoryData[keys]['description']}
                        </p>
                    </div>)}
            </div>
        </div>
    )
}

export default Category;