import { GetStaticProps } from 'next';
import React, { useEffect, useState } from 'react';
import { Button, H, P, Rating, Tag } from '../components';
import { Layout, withLayout } from '../layout/Layout';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';

export default function Home({ menu }: HomeProps): JSX.Element {
  const [counter, setCounter] = useState<number>(0);
  const [rating, setRating] = useState<number>(4);

  useEffect(() => {
    console.log('Counter' + counter);
    return function cleanup() {
      console.log('Unmount' + counter);
    };
  }, []);
  return (
    <Layout>
      <H tag='h2'>{counter}</H>
      <Button
        appearance='primary'
        arrow='right'
        onClick={() => setCounter(x => x + 1)}
      >
        Увеличить
      </Button>
      <Button appearance='ghost' arrow='right'>
        Кнопка
      </Button>
      <P size='s'>Lorem, ipsum dolor</P>
      <P>Lorem, ipsum dolor</P>
      <P size='l'>Lorem, ipsum dolor</P>
      <Tag color='red' size='m'>
        Lorem
      </Tag>
      <Tag color='green'>Lorem</Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
      <ul>
        {menu.map(m => {
          return <li key={m._id.secondCategory}>{m._id.secondCategory}</li>;
        })}
      </ul>
    </Layout>
  );
}

// export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    `${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`,
    {
      firstCategory,
    }
  );
  return {
    props: { menu, firstCategory },
  };
};

interface HomeProps {
  menu: MenuItem[];
  firstCategory: number;
}
