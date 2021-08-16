import React from 'react';
import { Button, HTag } from '../components';

export default function Home(): JSX.Element {

  return (
    <div>
      <HTag tag='h2'>Текст</HTag>
      <Button appearance='primary' >Кнопка</Button>
    </div>
  );
}
