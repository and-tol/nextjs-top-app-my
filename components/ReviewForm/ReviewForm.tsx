import React from 'react';
import cn from 'classnames';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

import { ReviewFormProps } from './ReviewForm.props';
import styles from './ReviewForm.module.css';

import { Rating } from '../Rating/Rating';
import { Input } from '../Input/Input';
import { Textarea } from '../Textarea/Textarea';
import { Button } from '../Button/Button';
import CloseIcon from './close.svg';

export const ReviewForm = ({
  productId,
  className = '',
  ...props
}: ReviewFormProps): JSX.Element => {
  return (
    <>
      <div className={cn(styles.reviewForm, className)} {...props}>
        <Input placeholder='Имя' />
        <Input placeholder='Заголовок отзыва' className={styles.title} />
        <div className={styles.rating}>
          <span>Оценка:</span>
          <Rating rating={0} />
        </div>
        <Textarea placeholder='Текст отзыва' className={styles.description} />
        <div className={styles.submit}>
          <Button appearance='primary'>Отправить </Button>
          <span className={styles.info}>
            * Перед публикацией отзыв пройдет предварительную модерацию и
            проверку
          </span>
        </div>
      </div>
      <div className={styles.success}>
        <div className={styles.successTitle}>Ваш отзыв отправлен</div>
        <div className={styles.success}>
          Спасибо, ваш отзыв будет опубликован после проверки.
        </div>
        <CloseIcon className={styles.close} />
      </div>
    </>
  );
};
