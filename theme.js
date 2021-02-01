import { minWidth } from "styled-system";

export const theme = {
	breakpoints: ['40em', '52em', '64em'],
	space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
	fonts: {
	  body:
		' "Helvetica Neue", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
	  heading: 'inherit',
	  monospace: 'Menlo, monospace',
	},
	fontSizes: ([12, 14, 16, 20, 24, 32, 48, 64, 96].map(x => x*2.5)),
	fontWeights: {
	  body: 400,
	  heading: 700,
	  bold: 700,
	},
	lineHeights: {
	  body: 1.5,
	  heading: 1.4,
	},
	colors: {
	  text: '#fff',
	  background: '#000',
	  primary: '#fff',
	  secondary: '#fff',
	  muted: '#fff',
	  snow: '#fff'
	},
	layout: {
		nav: {
			position: 'sticky',
			backgroundColor: 'primary',
			width: '100%'
		},
		answer: {
			margin: '0 auto',
			width: 'fit-content'
		},
	},
	text: {
	  heading: {
		fontFamily: 'heading',
		lineHeight: 'heading',
		fontWeight: 'heading',
		fontSize: 5
	  },
	},
	styles: {
	  root: {
		fontFamily: 'body',
		lineHeight: 'body',
		fontWeight: 'body',
	  },
	  h1: {
		variant: 'text.heading',
		fontSize: 8,
	  },
	  h2: {
		variant: 'text.heading',
		fontSize: 4,
	  },
	  h3: {
		variant: 'text.heading',
		fontSize: 3,
	  },
	  h4: {
		variant: 'text.heading',
		fontSize: 2,
	  },
	  h5: {
		variant: 'text.heading',
		fontSize: 1,
	  },
	  h6: {
		variant: 'text.heading',
		fontSize: 0,
	  },
	  pre: {
		fontFamily: 'monospace',
		overflowX: 'auto',
		code: {
		  color: 'inherit',
		},
	  },
	  code: {
		fontFamily: 'monospace',
		fontSize: 'inherit',
	  },
	  table: {
		width: '100%',
		borderCollapse: 'separate',
		borderSpacing: 0,
	  },
	  th: {
		textAlign: 'left',
		borderBottomStyle: 'solid',
	  },
	  td: {
		textAlign: 'left',
		borderBottomStyle: 'solid',
	  },
	}
  }
