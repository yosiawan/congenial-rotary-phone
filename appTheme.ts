import { createTheme } from "@mui/material/styles";
import { red, common } from "@mui/material/colors";

const shipperAppTheme = createTheme({
  palette: {
    primary: {
      main: common["white"],
    },
    secondary: red,
  },
});

export default shipperAppTheme;
