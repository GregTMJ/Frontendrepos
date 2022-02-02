import React from "react";
import {connect} from "react-redux";
import {Route, Routes} from 'react-router-dom';



import Category from "./components/Category/Category";
import Header from "./components/Header";
import "./styles/App-Redux.css";
import Recipe from "./components/Recipes/Recipe";


class AppRedux extends React.Component {

    // addCategory() {
    //     this.props.addElement(this.inputValue.value);
    //     this.inputValue.value = '';
    // }

    render() {

        return (

            <div className={"htmlFile"}>
                <header>
                    <Header />
                </header>

                <div>
                        <Routes>

                            <Route path={"/category/:id"} element={<Category objectData={this.props.Categories}/>}/>
                            <Route path={"/category/:idCategory/recipe/:idRecipe"}
                                   element={<Recipe objectData={this.props.Categories}/>} />

                            <Route path="/" element={<div>
                                {/*<input type="text" ref={(input)=> {this.inputValue = input}}/>*/}
                                {/*<button onClick={this.addCategory.bind(this)}>Click me</button>*/}
                                <main>
                                    <div className={"cats"}>
                                        {Object.keys(this.props.Categories).map(key =>
                                            <div className={key} key={key}>
                                                <a href={`/category/${key}`}>
                                                    {key}
                                                </a>
                                            </div>
                                        )}
                                    </div>

                                </main>
                            </div>}/>
                        </Routes>

                </div>
            </div>
        )
    }
}


export default connect(
    //mapStateToProps
    state => ({
        Categories: state.changeCategory,

    }),
    //mapDispatchTProps
    dispatch => ({
        addElement: (elem) => {
            dispatch({type: "ADDCATEGORY", payload: elem})
        }

    }),
)(AppRedux);


