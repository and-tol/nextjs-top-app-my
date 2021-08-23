import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import axios from 'axios';

import { MenuItem } from '../interfaces/menu.interface';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Create Next</title>
        <link key={1} rel='icon' href='/favicon2.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    `${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`,
    {
      firstCategory,
    }
  );

  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps {
  menu: MenuItem[];
  firstCategory: number;
}
