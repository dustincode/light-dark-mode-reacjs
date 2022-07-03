import React, {useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectTheme, themeToggle} from "./themeSlice";

function App() {
    const dispatch = useDispatch();
    const theme = useSelector(selectTheme);
    const changeTheme = useCallback(() => {
        dispatch(themeToggle());
    }, [dispatch]);

    return (
        <div className="background">
            <button onClick={changeTheme}>Theme Toggle ({theme})</button>
        </div>
    );
}

export default App;
