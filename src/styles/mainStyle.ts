//#region style
import {createStyles, Theme} from "@material-ui/core/styles";

// 設定値
const drawerWidth = 240;
const headerNavigationHeight = 56;
const bottomNavigationHeight = 56;

const styles =  ((theme: Theme) =>
        createStyles ({
            root: {
                flexGrow: 1,
                height: '100vh',
                zIndex: 1,
                overflow: 'hidden',
                position: 'relative',
                display: 'flex',
                width: '100%',
            },
            highlightClean: {
                color: "#313437",
                backgroundColor: "#fff",
                padding: "50px 0",
                backgroundImage: `url("../img/2019.PNG")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top center",
                backgroundSize: "cover",
                height: 1200
            },
            appBar: {
                height: headerNavigationHeight,
                backgroundColor: `rgba(2, 2, 10, 0.56)`,
                color: "black",
                background: "white",
                position: 'absolute',
                marginLeft: drawerWidth,
                /*   [theme.breakpoints.up('md')]: {
                       width: `calc(100% - ${drawerWidth}px)`,
                   },*/
            },
            navbar: {
                height: headerNavigationHeight,
                backgroundColor: `rgba(20, 46, 120, 0.56)`,
            },
            drawer:{
                backgroundColor: `rgba(128,128,128,0.2)`
            },
            sidebar:{
                backgroundColor: `rgba(127,255,212,0.6)`
            },
            nav: {
                marginLeft: "auto",
                marginRight: "auto",
                width: "auto",
                backgroundColor: `rgba(0,255,127,0.6)`

            },
            navItem: {
                marginRight: 20,
                marginLeft: 20,
            },
            navLink: {
                fontSize: 25,
                fontFamily: "Abel, sans-serif",
                marginLeft: 14, marginRight: 14,
                color: "rgba(230,249,240,0.78)"
            },
            content: {
                flexGrow: 1,
                backgroundColor: theme.palette.background.default,
                padding: theme.spacing.length * 3,
                paddingTop: `calc(50px + ${headerNavigationHeight}px)`,
                paddingBottom: `calc(50px + ${bottomNavigationHeight}px)`,
                paddingLeft: 50,
                paddingRight: 50,
                [theme.breakpoints.up('md')]: {
                    paddingBottom: 10,
                },
            },
            barhead:{
                color: "white",
            },
            loginButton: {
                padding: 17,
                backgroundColor: "rgba(4,28,54,0.62)",
                color: "rgba(255,255,255,0.81)",
                fontSize: 22,
                letterSpacing: 6,
                fontFamily: "Abel, sans-serif",
                marginRight: 2,
                marginLeft: "auto",
                /*    textAlign: "center"*/
            },
            menuButton: {
                marginLeft: -12,
                marginRight: 20,
            },
            maincontainer: {
                marginTop: 33,
                marginBottom: 60,
                color: "rgb(230,243,255)"
            },
            mainLogo: {
                fontSize: 93,
                marginLeft: '30%',
                marginRight: 'auto',
                marginTop: '26%',
                marginBottom: 'auto',
                //lineHeight: 314,
                letterSpacing: 71,
                color: "rgba(245,251,255,0.96)",
                fontWeight: 800,
                // fontStyle: "normal",
                textShadow: "0 0",
                textShadowColor: "rgba(245,251,255,0.96)",
                textShadowBlur: 13,
            },
            menuContainer: {},
            navbarToggle: {
                padding: ".25rem .75rem",
                fontSize: "1.25rem",
                lineHeight: 1,
                border: "1px solid transparent",
                borderRadius: ".25rem"
            },
            hrefNone: {
                color: "white",
                textDecoration: "none",
            },
            iconImg: {
                width: "5%",
                borderRadius: "50%",
            }
        })
);

export default styles;
