import Head from 'next/head';
import { Inter } from '@next/font/google';
import styled from 'styled-components';
import Layout from '@/components/Layout';
import { useQuery } from 'react-query';
import { moviePopular } from '@/utils/axios';

const inter = Inter({ subsets: ['latin'] });

const Main = styled.main``;

export default function Home() {
  const { data } = useQuery('Latest-movie', moviePopular);
  console.log(data);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Main>
          <img />
          "change on main"
        </Main>
      </Layout>
    </>
  );
}
