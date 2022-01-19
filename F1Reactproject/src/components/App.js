import React, {Fragment} from "react";

import "../styles/App.css";
import CitiesSelect from "./CitiesSelect";
import Header from "./Header";



function App () {

    return (
        <Fragment>

                <Header/>

            <main>
                <div className={"project"}>
                    <CitiesSelect />
                </div>
            </main>
        </Fragment>
    )
}

export default App;