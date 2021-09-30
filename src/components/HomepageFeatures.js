import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import '../css/custom.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJVdDve1Z2haJVZ8UNmKG1L3M9jVatn1g",
  authDomain: "bootcode.firebaseapp.com",
  projectId: "bootcode",
  storageBucket: "bootcode.appspot.com",
  messagingSenderId: "321735501457",
  appId: "1:321735501457:web:a72fdc99da8b547e860130"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const FeatureList = [
  {
    title: 'Facile à utiliser',
    Svg: require('../../static/img/first.svg').default,
    description: (
      <>
        Récuperer en un clique des morceaux de code d'une librairie en constante évolution
      </>
    ),
  },
  {
    title: "Etudier en s'amusant",
    Svg: require('../../static/img/quatre.svg').default,
    description: (
      <>
        Apprener facilement le développement web grâce aux différents bouts de codes disponibles
      </>
    ),
  },
  {
    title: 'Partager avec la communauté',
    Svg: require('../../static/img/trois.svg').default,
    description: (
      <>
        Aider les nouveaux développeurs en
        partageant votre propre code 
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
          <img height="600" className="img-textArea" src='../../static/img/second.svg'/>
              
        </div>
        <div className="text-side">
          <p className="text-area-title">Ce que vous pouvez faire :</p>
          <ul>
            <li>Copier le code que vous voulez facilement</li>
            <li>Partager votre code avec la communauté </li>
            <li>Trouvez toutes sortes d’éléments pour incrémenter votre site</li>
            <li>Apprentissage facile du code </li>
            <li>Utilisateur et code vérifié </li>
          </ul>
          <button className="register">Register</button>
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

  const [mail, setMail] = useState('');

  const handleSubmit = () => {
    console.log(mail);
  };

  return (
    <section className={styles.formulaire}>
      <div className="container-features">
        <div className="form-div">
          <h2>Rejoignez nous</h2>
          <form>
            <input className="mail-form" placeholder="E-mail" type="email" require onChange={e => setMail(e.target.value)}></input>
            <button className="register" onClick={handleSubmit}>Rejoindre</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export function ExempleSection() {
  
  return (
    <section className={styles.exemple}>
      <div className="container-features exempleSelection">
      <div className="row exampleButton">
          <pre>
          <code>
              &lt;button class="myButton"&gt;
              <br></br>
            </code>
          </pre>
          <pre>
          <code>
            &lt;style&gt;
            <br></br>
            .myButton &#10100;
            <br></br>
              text-align: center;
              <br></br>
              background-color: purple;
              <br></br>
              border-radius: 20px;
              <br></br>
              color: white;
              <br></br>
              &#10101;
            <br></br>
            &lt;/style&gt;
          </code>
          </pre>
          <pre>
            <code>
              &lt;script&gt;
              <br></br>
              const button = document.querySelector('.myButton');
              <br></br>
              button.addEventListener("click", () =&gt; &#10100;
              <br></br>
              alert("Je suis cliqué");
              <br></br>
              &#10101;)
              <br></br>
              &lt;/script&gt;
            </code>
          </pre>
        </div>
      <div className="renduButton">
            {/* <button className="register">Exemple</button> */}
            <button className="buttonExample" onClick={() => alert('Je suis cliqué')}>Exemple</button>
        </div>
      </div>
    </section>
  );
}

export function ExempleSection2() {

  const [inputText, setInputText] = useState('');
  console.log(inputText)


  return (
    <section className={styles.exemple}>
      <div className="container-features">
        <div className="second-example-section">
          <div className="div-input-example">
            <input className="input-example" type="text" onChange={e => setInputText(e.target.value)}></input>
            <p>{inputText}</p>
          </div>
          <div className="example">
          <pre>
            <code>
              &lt;input class="input-example" type="text"&gt;
              <br></br>
              &lt;p id="p-example"&gt;
            </code>
          </pre>
          <pre>
            <code>
              &lt;style&gt;
              <br></br>
              .input-example &#10100;
              <br></br>
              &#160;height: 60px;
              <br></br>
              &#160;width: 600px;
              <br></br>
              &#160;font-size: 24px;
              <br></br>
                &#10101;
              <br></br>
              &lt;/style&gt;
            </code>
          </pre>
          <pre>
            <code>
              &lt;script&gt;
              <br></br>
              const test = document.getElementsByClassName('test')[0];
              <br></br>
              test.addEventListener("keyup", () =&gt; &#10100;
              <br></br>
              document.getElementById("demo").innerHTML = test.value;
              <br></br>
              &#10101;)
              <br></br>
              &lt;/script&gt;
            </code>
          </pre>
          </div>
        </div>
      </div>
    </section>
  );
}