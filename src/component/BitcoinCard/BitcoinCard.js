import React from 'react';
import './BitcoinCard.css'
import { 
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle
} from '@ionic/react';

const BitcoinCard = ({children, ...props}) => {
  const { data } = props
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardSubtitle>
          { data.code}
        </IonCardSubtitle>
        <IonCardTitle>
          { data.rate_float}
        </IonCardTitle>
      </IonCardHeader>
    </IonCard>
  );
} 

export default BitcoinCard;