import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useScrollY } from '../../hooks/useScrollY';
import { ButtonIcon } from '../ButtonIcon/ButtonIcon';
import styles from './Up.module.css';
import UpIcon from './up.svg';

export const Up = (): JSX.Element => {
  const controls = useAnimation();
  const y = useScrollY();

  useEffect(() => {
    controls.start({ opacity: y / document.body.scrollHeight });
  }, [y, controls]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
      left: 0,
    });
  };

  return (
    <motion.div
      className={styles.up}
      onClick={scrollToTop}
      animate={controls}
      initial={{ opacity: 0 }}
    >
      <ButtonIcon appearance='primary' icon='up' onClick={scrollToTop} />
    </motion.div>
  );
};