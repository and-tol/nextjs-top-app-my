import cn from 'classnames';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ForwardedRef, forwardRef, useRef, useState } from 'react';
import { declOfNumber, priceRu } from '../../helpers/helpers';
import { Button } from '../Button/Button';
import { Card } from '../Card/Card';
import { Rating } from '../Rating/Rating';
import { Review } from '../Review/Review';
import { Tag } from '../Tag/Tag';
import { Divider } from './../Divider/Divider';
import { ReviewForm } from './../ReviewForm/ReviewForm';
import styles from './Product.module.css';
import { ProductProps } from './Product.props';

export const Product = motion(
  forwardRef(
    (
      { product, className, ...props }: ProductProps,
      ref: ForwardedRef<HTMLDivElement>
    ): JSX.Element => {
      const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);
      const reviewRef = useRef<HTMLDivElement>(null);

      const variants = {
        visible: { opacity: 1, height: 'auto' },
        hidden: { opacity: 0, height: 0 },
      };

      const scrollToReview = (): void => {
        setIsReviewOpened(true);
        reviewRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'start',
        });
        reviewRef.current?.focus;
      };

      return (
        <div className={className} ref={ref} {...props}>
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
              <span>
                <span className='visualyHidden'>Цена</span>
              </span>
              {priceRu(product.price)}
              {product.oldPrice && (
                <Tag className={styles.oldPrice} color='green'>
                  <span className='visualyHidden'>Скидка</span>
                  {priceRu(product.price - product.oldPrice)}
                </Tag>
              )}
            </div>
            <div className={styles.credit}>
              <span className='visualyHidden'>
                Кредит
                {priceRu(product.credit)}
              </span>
              /<span className={styles.month}>мес.</span>
            </div>
            <div className={styles.rating}>
              <span className='visualyHidden'>{`Рейтинг${
                product.reviewAvg ?? product.initialRating
              }`}</span>
              <Rating rating={product.reviewAvg ?? product.initialRating} />
            </div>
            <div className={styles.tags}>
              {product.categories.map(c => (
                <Tag key={c} color='ghost' className={styles.category}>
                  {c}
                </Tag>
              ))}
            </div>
            <div className={styles.priceTitle} aria-hidden={true}>
              цена
            </div>
            <div className={styles.creditTitle} aria-hidden={true}>
              кредит
            </div>
            <div className={styles.rateTitle}>
              {/* отзыв */}
              <a href='#ref' onClick={scrollToReview}>
                {product.reviewCount}
                {declOfNumber(product.reviewCount, [
                  'отзыв',
                  'отзыва',
                  'отзывов',
                ])}
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
                    <span className={styles.characteristicsValue}>
                      {c.value}{' '}
                    </span>
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
                aria-expanded={isReviewOpened}
              >
                Читать отзывы
              </Button>
            </div>
          </Card>

          <motion.div
            animate={isReviewOpened ? 'visible' : 'hidden'}
            variants={variants}
            initial='hidden'
          >
            <Card
              color='blue'
              className={cn(styles.reviews, {
                [styles.opened]: isReviewOpened,
                [styles.closed]: !isReviewOpened,
              })}
              ref={reviewRef}
              tabIndex={isReviewOpened ? 0 : -1}
            >
              {product.reviews.map(r => (
                <div key={r._id}>
                  <Review review={r} />
                  <Divider />
                </div>
              ))}
              <ReviewForm productId={product._id} isOpened={isReviewOpened} />
            </Card>
          </motion.div>
        </div>
      );
    }
  )
);
