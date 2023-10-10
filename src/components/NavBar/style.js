const navBarStyle = {
    appBarStyle: {
        backgroundColor: "rgb(18, 16, 26, 0.3)",
        boxShadow: "none",
        borderBottom: '1.5px solid rgb(255, 255, 255, 0.2)', 
    },
    toolbarStyle: {
        display: "flex",
        justifyContent: 'space-between',
        paddingLeft: 84,
        paddingRight: 84
    },
    toolbarSmStyle: {
        display: "flex",
        justifyContent: "center",
        paddingLeft: 84,
        paddingRight: 84
    },
    stackStyle: {
        justifyContent: "flex-end"
    },
    typographyStyle: {
        cursor: "pointer",
        "&:hover": {
            textShadow:"0 0 10px rgba(255, 255, 255, 0.7)",
        }
    }
}

export default navBarStyle;