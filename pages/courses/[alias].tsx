import axios from 'axios';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'node:querystring';
import React from 'react';
import { MenuItem } from '../../interfaces/menu.interface';
import { TopPageModel } from '../../interfaces/page.interface';
import { ProductModel } from '../../interfaces/product.interface';
import { Layout } from '../../layout/Layout';

const firstCategory = 0;

export default function Course({
  menu,
  page,
  products,
}: CourseProps): JSX.Element {
  return <Layout> {products && products.length} </Layout>;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: menu } = await axios.post<MenuItem[]>(
    `${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`,
    {
      firstCategory,
    }
  );
  return {
    paths: menu.flatMap(m => m.pages.map(p => `/courses/${p.alias}`)),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<CourseProps> = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true,
    };
  }
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    `${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`,
    {
      firstCategory,
    }
  );
  const { data: page } = await axios.get<TopPageModel>(
    `${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/byAlias/${params.alias}`
  );
  const { data: products } = await axios.post<ProductModel[]>(
    `${process.env.NEXT_PUBLIC_DOMAIN}/api/product/find`,
    {
      category: page.category,
      limit: 10,
    }
  );

  return {
    props: { menu, firstCategory, page, products },
  };
};

interface CourseProps {
  menu: MenuItem[];
  firstCategory: number;
  page: TopPageModel;
  products: ProductModel[];
}
