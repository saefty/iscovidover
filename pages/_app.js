import Layout from "../components/Layout";
import { ThemeProvider } from 'theme-ui'
import { theme } from '../theme'
import { PageConfig } from '../config'
import { findCountry, No } from '../components/IsItOver'
import React from "react";

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = { answer: '' }
		this.pageProps = props.pageProps
		console.log(props)
	}

	async componentDidMount() {
		let answer = await this.getLocale()
		this.setState({answer: answer})
	}
	async getLocale() {
		const country = await findCountry()
		const answer = No(country)

		return answer
  }

  render()  {
		return (
			<ThemeProvider theme={theme}>
				<Layout pageTitle={PageConfig.title} description={PageConfig.description}>
						<this.props.Component {...this.props} answer={this.state.answer}/>
				</Layout>
			</ThemeProvider>
		);
	}
}

export default App
