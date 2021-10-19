import React, { useEffect, useReducer } from 'react';
import { Advantages, H, HhData, Product, Sort, Tag } from '../../components';
import { TopPageComponentProps } from './TopPageComponent.props';

import { TopLevelCategory } from '../../interfaces/page.interface';
import { SortEnum } from '../../components/Sort/Sort.config';
import { sortReducer } from './sort.reduser';

import styles from './TopPageComponent.module.css';
import { useReducedMotion } from 'framer-motion';

export const TopPageComponent = ({
  page,
  products,
  firstCategory,
}: TopPageComponentProps): JSX.Element => {
  const [{ products: sortedProducts, sort }, dispatchSort] = useReducer(
    sortReducer,
    {
      products,
      sort: SortEnum.Rating,
    }
  );

  const shouldReduceMotion = useReducedMotion();

  const setSort = (sortSet: SortEnum) => {
    dispatchSort({ type: sortSet });
  };

  useEffect(() => {
    dispatchSort({ type: 'reset', initialState: products });
  }, [products]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <H tag='h1'>{page.title} </H>
        {products && (
          <Tag color='grey' size='m' aria-label={products.length + 'элементов'}>
            {products.length}
          </Tag>
        )}

        <Sort sort={sort} setSort={setSort} />
      </div>

      <div role='list'>
        {sortedProducts &&
          sortedProducts.map(p => (
            <Product
              role='listitem'
              key={p._id}
              product={p}
              layout={shouldReduceMotion ? false : true}
            />
          ))}
      </div>
      {/* -------- */}
      <div className={styles.HhTitle}>
        <H tag='h2'> Вакансии - {page.category} </H>
        <Tag color='red' size='m'>
          hh.ru
        </Tag>
      </div>
      {/* -------- */}
      {firstCategory === TopLevelCategory.Courses && page.hh && (
        <HhData {...page.hh} />
      )}
      {page.advantages && page.advantages.length > 0 && (
        <>
          <H tag='h2'>Преимущества</H>
          <Advantages advantages={page.advantages} />
        </>
      )}
      {page.seoText && (
        <div
          className={styles.seo}
          dangerouslySetInnerHTML={{ __html: page.seoText }}
        />
      )}
      <H tag='h2'>Получаемые навыки</H>
      {page.tags.map(t => (
        <Tag key={t} color='primary'>
          {t}
        </Tag>
      ))}
    </div>
  );
};
