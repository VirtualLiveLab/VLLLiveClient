import {ThemeProvider} from '@material-ui/core';
import React from 'react';
import {LayoutContainer} from "./containers/LayoutContainer";
import theme from "./styles/theme";

const App: React.FC = () => {
    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <LayoutContainer/>
            </ThemeProvider>
        </React.Fragment>
    );
}

export default App;
