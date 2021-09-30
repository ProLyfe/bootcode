import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import '../css/custom.css'

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container-features">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomepageTextArea() {
  return (
    <section className={styles.features}>
      <div className="container-textArea">
        <div className="button-side">
              <button className="register">Register</button>
        </div>
        <div className="text-side">
          <p className="text-area-title">Titre du bloc</p>
          <ul>
            <li>Premier module</li>
            <li>Second module</li>
            <li>Troisieme module</li>
            <li>Quatrieme module</li>
            <li>Cinquieme module</li>
          </ul>
        </div>
      </div>
    </section>
  );
}


export function Footer() {
  return (
    <section className={styles.footer}>
      <div className="container-features">
        <div>
          <ul className="ul-footer">
            <li>© 2021 BootCode, Inc</li>
            <li>Test</li>
          </ul>
        </div>
      </div>
    </section>
  );
}


export function Formulaire() {
  return (
    <section className={styles.formulaire}>
      <div className="container-features">
        <div className="form-div">
          <h2>Rejoignez nous</h2>
          <form>
            <input className="mail-form" placeholder="E-mail" type="email" require></input>
            <button className="register">Rejoindre</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export function ExempleSection() {
  
  return (
    <section className={styles.exemple}>
      <div className="container-features">
        <div className="row">
          <pre>
          <code>
            &lt;style&gt;
            <br></br>
            button &#10100;
            <br></br>
              text-align: center
              <br></br>
              &#10101;
            <br></br>
            &lt;/style&gt;
          </code>
          </pre>
        </div>
      </div>
    </section>
  );
}

export function ExempleSection2() {
  
  return (
    <section className={styles.exemple}>
      <div className="container-features">
        <div className="row">
          <pre>
          <code>
            &lt;style&gt;
            <br></br>
            button &#10100;
            <br></br>
              text-align: center
              <br></br>
              &#10101;
            <br></br>
            &lt;/style&gt;
          </code>
          </pre>
        </div>
      </div>
    </section>
  );
}