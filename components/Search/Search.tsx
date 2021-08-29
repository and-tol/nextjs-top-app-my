import { useState } from 'react';
import cn from 'classnames';
import { SearchProps } from './Search.config';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import SearchIcon from './search.svg';

import styles from './Search.module.css';

export const Search = ({ className, ...props }: SearchProps): JSX.Element => {
  const [search, setSearch] = useState<string>('');

  return (
    <div className={cn(className, styles.search)} {...props}>
      <Input
        placeholder='Поиск...'
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <Button
        appearance='primary'
        className={styles.button}
        onClick={() => null}
      >
        <SearchIcon />
      </Button>
    </div>
  );
};
