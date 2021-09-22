import { GetStaticProps } from 'next';
import React, { useState } from 'react';
import {
  Button,
  H,
  Input,
  P,
  Rating,
  Review,
  Tag,
  Textarea,
} from '../components';
import { withLayout } from '../layout/Layout';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';

function Home({ menu }: HomeProps): JSX.Element {
  const [counter, setCounter] = useState<number>(0);
  const [rating, setRating] = useState<number>(4);

  return (
    <>
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
      <Input placeholder='test' />
      <Textarea placeholder='test' />

    </>
  );
}

export default withLayout(Home);

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
