import {ThemeProvider} from '@material-ui/core';
import React from 'react';
import theme from "./styles/theme";
import Layout from "./components/view/Layout";

const App: React.FC = () => {
    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <Layout/>
            </ThemeProvider>
        </React.Fragment>
    );
}

export default App;
