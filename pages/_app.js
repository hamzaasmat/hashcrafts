import { Provider } from 'react-redux';
import App, {Container} from 'next/app'
import { DefaultSeo } from "next-seo";
import withRedux from 'next-redux-wrapper';
import { initStore } from '../store/reducers/cartReducer';
import Head from 'next/head'
import React from 'react';


export default withRedux(initStore)(
    class MyApp extends App {

        static async getInitialProps ({ Component, ctx }) {
            return {
                pageProps: Component.getInitialProps
                    ? await Component.getInitialProps(ctx)
                    : {}
            }
        }

        render () {
            const { Component, pageProps, store } = this.props

            let { query } = this.props.router;
            
            let style = ''; 
            if (query.style == 'brink-pink') {
                style = 'brink-pink-style.css'
            } else if (query.style == 'pink') {
                style = 'pink-style.css'
            } else if (query.style == 'purple') {
                style = 'purple-style.css'
            }
            return (
              <Container>
                <DefaultSeo
                  title="Hashcrafts | Leading IT Services Company in Pakistan  "
                  openGraph={{
                    type: "website",
                    locale: "en_IE",
                    url: "https://hashcrafts.com/",
                    site_name:
                      "Hashcrafts | Leading IT Services Company in Pakistan"
                  }}
                />
                <Head>
                    <link rel="stylesheet" type="text/css" href={`/static/styles/style.css`} key="color1" />
                    <link rel="stylesheet" type="text/css" href={`/static/styles/${style}`} key="color" />
                    <link rel="stylesheet" type="text/css" href={`/static/css/responsive.css`} key="res" />
                </Head>
                <Provider store={store}>
                  <Component {...pageProps} />
                </Provider>
              </Container>
            );
        }
    }
)