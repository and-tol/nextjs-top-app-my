import { useState } from 'react';
import { useRouter } from 'next/router';
import cn from 'classnames';
import { SearchProps } from './Search.config';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import SearchIcon from './search.svg';

import styles from './Search.module.css';

export const Search = ({ className, ...props }: SearchProps): JSX.Element => {
  const [search, setSearch] = useState<string>('');
  const router = useRouter();

  const goToSearch = () => {
    router.push({
      pathname: '/search',
      query: {
        q: search,
      },
    });
  };

  const handleKeyDown = (event: KeyboardEvent) => {
  // const handleKeyDown = (eKey: string) => {
    if (event.key === 'Enter') {
      goToSearch();
    }
  };

  return (
    <div className={cn(className, styles.search)} {...props}>
      <Input
        className={styles.input}
        placeholder='Поиск...'
        value={search}
        onChange={e => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Button
        appearance='primary'
        className={styles.button}
        onClick={goToSearch}
      >
        <SearchIcon />
      </Button>
    </div>
  );
};
