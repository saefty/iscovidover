/** @jsxImportSource  theme-ui */

import Head from "next/head";
import Header from "./Header";

export default function Layout({ children, pageTitle, description }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content={description}></meta>
        <title>{pageTitle}</title>
      </Head>
      <style jsx global>{`
				html,
				body,
				main,
				body > div:first-child,
				div#__next,
				div#__next > div,
				div#__next > div > div {
					height: 100%;
				}
        html,
        body {
          margin: 0;
          padding: 0;
        }
        .content {
					width: 100%;
					height: 100%;
					overflow-x: hidden;
        }
      `}</style>
			<main>
				<Header />
					<div className="content">
					<div sx={{ variant: 'layout.answer' }}>
						{children}
					</div>
				</div>
      </main>
    </>
  );
}
