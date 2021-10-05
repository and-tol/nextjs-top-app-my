import { useRef, useState } from 'react';
import cn from 'classnames';
import Image from 'next/image';

import { priceRu, declOfNumber } from '../../helpers/helpers';
import { Button } from '../Button/Button';
import { Card } from '../Card/Card';
import { Rating } from '../Rating/Rating';
import { Tag } from '../Tag/Tag';
import { ProductProps } from './Product.config';
import styles from './Product.module.css';
import { Divider } from './../Divider/Divider';
import { Review } from '../Review/Review';
import { ReviewForm } from './../ReviewForm/ReviewForm';

export const Product = ({
  product,
  className,
  ...props
}: ProductProps): JSX.Element => {
  const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);
  const reviewRef = useRef<HTMLDivElement>(null);

  const scrollToReview = (): void => {
    setIsReviewOpened(true);
    reviewRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start',
    });
  };

  return (
    <div className={className} {...props}>
      <Card className={styles.product}>
        <div className={styles.logo}>
          <Image
            src={`${process.env.NEXT_PUBLIC_DOMAIN}${product.image}`}
            alt={product.title}
            width={70}
            height={70}
          />
        </div>
        <div className={styles.title}>{product.title}</div>
        <div className={styles.price}>
          {priceRu(product.price)}
          {product.oldPrice && (
            <Tag className={styles.oldPrice} color='green'>
              {priceRu(product.price - product.oldPrice)}
            </Tag>
          )}
        </div>
        <div className={styles.credit}>
          {priceRu(product.credit)}/<span className={styles.month}>мес.</span>
        </div>
        <div className={styles.rating}>
          <Rating rating={product.reviewAvg ?? product.initialRating} />
        </div>
        <div className={styles.tags}>
          {product.categories.map(c => (
            <Tag key={c} color='ghost' className={styles.category}>
              {c}
            </Tag>
          ))}
        </div>
        <div className={styles.priceTitle}>цена</div>
        <div className={styles.creditTitle}>кредит</div>
        <div className={styles.rateTitle}>
          {/* отзыв */}
          <a href='#ref' onClick={scrollToReview}>
            {product.reviewCount}
            {declOfNumber(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}
          </a>
        </div>

        <Divider className={styles.hr} />

        <div className={styles.description}>{product.description}</div>
        <div className={styles.feature}>
          {/* фичи */}
          {product.characteristics.map(c => {
            return (
              <div key={c.name} className={styles.characteristics}>
                <span className={styles.characteristicsName}>{c.name}</span>
                <span className={styles.characteristicsDots}></span>
                <span className={styles.characteristicsValue}>{c.value} </span>
              </div>
            );
          })}
        </div>
        <div className={styles.advBlock}>
          {product.advantages && (
            <div className={styles.advantages}>
              <div className={styles.advTitle}>Преимущества</div>
              <div>{product.advantages}</div>
            </div>
          )}
          {product.disadvantages && (
            <div>
              <div className={styles.disadvantages}>
                <div className={styles.advTitle}>Недостатки</div>
              </div>
              <div>{product.disadvantages}</div>
            </div>
          )}
        </div>

        <Divider className={cn(styles.hr, styles.hr2)} />

        <div className={styles.actions}>
          <Button appearance='primary'>Узнать подробнее </Button>
          <Button
            appearance='ghost'
            arrow={isReviewOpened ? 'down' : 'right'}
            className={styles.reviewButton}
            onClick={() => setIsReviewOpened(!isReviewOpened)}
          >
            Читать отзывы
          </Button>
        </div>
      </Card>

      <Card
        color='blue'
        className={cn(styles.reviews, {
          [styles.opened]: isReviewOpened,
          [styles.closed]: !isReviewOpened,
        })}
        ref={reviewRef}
      >
        {/* {[
          {
            createdAt: new Date(),
            description:
              'Изначально, когда только прочитал описания курса, подумал - что это один из лучших курсов по веб дизайну. Так оно и оказалось! Сперва хотел пройти очное обучение в институте в Москве, но по времени это не подходило. Здесь же достаточно несколько часов в день и общий срок всего 8 месяце (в очном несколько лет), в итоге выбор пал на онлайн.\n\nТеперь по стоимость: полный курс достаточно дорог, но я успел купить со скидкой. Есть рассрочка, это очень удобно. В общем - топ',
            name: 'Максим',
            productId: '60637a279e11fc8bb4346a63',
            rating: 5,
            title: 'Рекомендую!',
            _id: '60e36e4183c99b1d45969fe4',
          },
        ].map(r => (
          <div key={r._id}>
            <Review review={r} />
          </div>
        ))} */}
        {product.reviews.map(r => (
          <div key={r._id}>
            <Review review={r} />
            <Divider />
          </div>
        ))}
        <ReviewForm productId={product._id} />
      </Card>
    </div>
  );
};
