import React, { useEffect, useState } from 'react';
import { Button, H, P, Rating, Tag } from '../components';
import { Layout, withLayout } from '../layout/Layout';

export default function Home(): JSX.Element {
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
    </Layout>
  );
}

// export default withLayout(Home);
