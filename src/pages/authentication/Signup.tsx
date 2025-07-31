import { IonPage, IonHeader, IonToolbar, IonRouterLink, IonTitle, IonText, IonContent, IonImg, IonButton } from '@ionic/react';
import './Signup.css';
import appLogo from '../../assets/images/app-logo.jpg';
import { useState } from 'react';

const Signup: React.FC = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);

  }

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className='bg-[#F0E4CE] flex flex-col items-center justify-evenly h-full w-full p-4'>
          <IonImg src={appLogo} className='w-full mx-auto' />
          <div className='flex flex-col items-center justify-center w-full'>
            <IonButton className={isClicked ? 'w-full signButton-clicked' : 'w-full signButton'} onClick={handleClick}>Continue with Email</IonButton>
            <div className='myText flex items-center justify-center w-full'>
              <div className='flex flex-col w-full items-center justify-center line'></div>
              <IonText>Or use social for sign up</IonText>
              <div className='flex flex-col w-full items-center justify-center line'></div>
            </div>
            <IonButton className={isClicked ? 'googleButton-clicked w-full' : 'googleButton w-full'} onClick={handleClick}>Continue with Google</IonButton>
            <IonText class='myText'>Already have an account? <IonRouterLink>Log In</IonRouterLink></IonText>
          </div>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default Signup;