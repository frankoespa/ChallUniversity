import React from 'react';
import App from 'next/app';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import theme from '../src/theme';
import Layout from '../components/Layout';

export default class MyApp extends App {
	componentDidMount() {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector('#jss-server-side');
		if (jssStyles) {
			jssStyles.parentNode.removeChild(jssStyles);
		}
	}

	render() {
		const { Component, pageProps } = this.props;
		return (
			<React.Fragment>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</ThemeProvider>
			</React.Fragment>
		);
	}
}
