import React, { FunctionComponent, PropsWithChildren } from 'react';
import cn from 'classnames';
import { LayoutProps } from './Layout.config';
import { Header } from './Header/Header';
import { Sidebar } from './Sidebar/Sidebar';
import { Footer } from './Footer/Footer';
import styles from './Layout.module.css';
import { AppContextProvider, IAppContext } from '../context/app.context';

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    // <AppContextProvider menu={menu} firstCategory={firstCategory}>
    <div className={styles.wrapper}>
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar} />
      <div className={styles.body}>{children}</div>
      <Footer className={styles.footer} />
    </div>
    // </AppContextProvider>
  );
};

export const withLayout = <T extends Record<string, unknown> & IAppContext>(
  Component: FunctionComponent<T>
): T | void => {
  function withLayoutComponent(props: T): JSX.Element {
    return (
      <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
        <Layout>
          <Component {...props} />
        </Layout>
      </AppContextProvider>
    );
  }
};
