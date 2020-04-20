import { createMuiTheme } from '@material-ui/core/styles';

const themeHelper = (theme) => {
    if (theme === "light") {
        return createMuiTheme({
            palette: {
              primary: {
                main : "#FFFFFF"
              },
              type:"light"
            }
        });
    } else {
        return createMuiTheme({
            palette: {
              primary: {
                main : "#202020"
              },
              type:"dark"
            }
        });
    }
}

export default themeHelper;