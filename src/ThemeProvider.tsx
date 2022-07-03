import React from 'react';
import {useSelector} from "react-redux";
import {selectTheme} from "./themeSlice";

interface ThemeProviderProps {
	children: React.ReactNode;
}

const ThemeProvider: React.FunctionComponent<ThemeProviderProps> = ({children}) => {
	const theme = useSelector(selectTheme);
	return <div className={`theme-${theme}`}>{children}</div>
}

export default ThemeProvider;

