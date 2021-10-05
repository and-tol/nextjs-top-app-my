import cn from 'classnames';
import { RatingProps } from './Rating.config';
import styles from './Rating.module.css';
import {
  useEffect,
  useState,
  KeyboardEvent,
  forwardRef,
  ForwardedRef,
} from 'react';
import StarIcon from './star.svg';

export const Rating = forwardRef(
  (
    { error, isEditable = false, rating, setRating, ...props }: RatingProps,
    ref: ForwardedRef<HTMLDivElement>
  ): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
      new Array(5).fill(<></>)
    );

    useEffect(() => {
      constractRating(rating);
    }, [rating]);

    const constractRating = (currentRating: number) => {
      const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
        return (
          <span
            className={cn(styles.star, {
              [styles.filled]: i < currentRating,
              [styles.editable]: isEditable,
            })}
            onMouseEnter={() => changeDisplay(i + 1)}
            onMouseLeave={() => changeDisplay(rating)}
            onClick={() => onclick(i + 1)}
          >
            <StarIcon
              tabIndex={isEditable ? 0 : -1}
              onKeyDown={(e: KeyboardEvent<SVGAElement>) =>
                isEditable && handleSpace(i + 1, e)
              }
            />
          </span>
        );
      });

      setRatingArray(updatedArray);
    };

    const changeDisplay = (i: number) => {
      if (!isEditable) {
        return;
      }
      constractRating(i);
    };

    const onclick = (i: number) => {
      if (!isEditable || !setRating) {
        return;
      }
      setRating(i);
    };

    const handleSpace = (i: number, e: KeyboardEvent<SVGAElement>) => {
      if (e.code != 'Space' || !setRating) {
        return;
      }
      setRating(i);
    };

    return (
      <div
        {...props}
        ref={ref}
        className={cn(styles.ratingWrapper, { [styles.error]: error })}
      >
        {ratingArray.map((rating: JSX.Element, i: number) => {
          return <span key={i}>{rating}</span>;
        })}
        {error && <span className={styles.errorMessage}>{error.message}</span>}
      </div>
    );
  }
);
