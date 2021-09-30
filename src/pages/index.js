import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import {HomepageTextArea, Footer} from '../components/HomepageFeatures';
import '../css/custom.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
          <div className="pres">
            <div className="textContainer">
              <h1>BootCode</h1>
              <p>Take it, use it</p>
            </div>
            <div className="buttonContainer">
              <button className="register">Register</button>
              <button className="plus">Voir plus</button>
            </div>
          </div>
        <div>
          <img src="../../static/img/logoBoot.png" height="260"/>
        </div>        
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
      <div>
        <HomepageHeader />
        <main>
          <HomepageTextArea />
          <HomepageFeatures />
          <Footer />
        </main>
      </div>
  );
}
