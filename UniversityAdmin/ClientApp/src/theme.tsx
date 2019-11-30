import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#1e1e24'
		},
		secondary: {
			main: '#536dfe'
		},
		error: {
			main: red.A400
		},
		background: {
			default: '#fff'
		}
	}
});

export default theme;
