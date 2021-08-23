import { GetStaticProps } from 'next';
import React from 'react';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';
import { Layout, withLayout } from '../layout/Layout';

export default function Search(): JSX.Element {
  return <></>;
}

// export default withLayout(Search);

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
