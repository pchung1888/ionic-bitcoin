import React, { useState, useEffect } from 'react';
import './App.css';
import { getBitcoinPrice } from './api/Bitcoin';
import { IonApp,
         IonHeader,
         IonToolbar,
         IonTitle,
         IonContent,
         IonIcon,
        } from '@ionic/react';
import LoadingCard from './component/LoadingCard/LoadingCard';
import BitcoinCard from './component/BitcoinCard/BitcoinCard';
import { logoBitcoin } from 'ionicons/icons';
function App() {
  const [bitcoinInfo, setBitcoinInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getBitcoinPrice()
      .then(response => {
        setBitcoinInfo(response);
        setIsLoading(false);
      })
      .catch(error => console.log(error));
  }, []);
  console.log({bitcoinInfo, isLoading})

  const createLoadingCards = () => {
    return (
      <div>
        <LoadingCard/>
        <LoadingCard/>
        <LoadingCard/>
      </div>
    )
  }

  const createBitcoinCards = () => Object.keys(bitcoinInfo.bpi)
    .map((item, index) => <BitcoinCard data={bitcoinInfo.bpi[item]} />);
    
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>
            Bitcoin Price Tracker
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <section className="bitcoin__header">
          <IonIcon icon={logoBitcoin} className="bitcoin__logo"></IonIcon>
        </section>
        {
          isLoading === true ?
          createLoadingCards() : 
          createBitcoinCards()
        }
        <section className="bitcoin__disclaimer" > <p> { bitcoinInfo.disclaimer } </p></section>
      </IonContent>
    </IonApp>
  );
}

export default App;
