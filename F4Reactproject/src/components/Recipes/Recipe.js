import React from "react";
import {useLocation, useParams} from "react-router-dom";

import "../../styles/Recipe.css";

function Recipe(props) {

    const params = useParams()

    const recipeData = props.objectData[params.idCategory][params.idRecipe];

    const ingredients = recipeData['ingredients'];
    const steps = recipeData['steps']


    return(
        <div>
            <h2>
                This is a recipe for: {params.idRecipe}
            </h2>
            <div className={"Recipe"}>
                <div className={"Ingredient"}>
                    <ul>
                        <h4>
                            ingredients:
                        </h4>
                        {ingredients.map(ingredient => <li key={ingredient.index}> {ingredient} </li>
                        )}
                    </ul>
                </div>

                <div className={"Process"}>
                    <ul>
                        <h4>
                            Making process:
                        </h4>
                        {steps.map(step=> <li key={step.index}>{step}</li> )}
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Recipe;