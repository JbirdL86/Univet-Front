import { IonPage, IonHeader, IonToolbar, IonRouterLink, IonTitle, IonText, IonContent, IonImg, IonButton } from '@ionic/react';
import './Signup.css';
import appLogo from '../../assets/images/app-logo.jpg';

const Signup: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className='bg-[#F0E4CE] flex flex-col items-center justify-evenly h-full w-full p-4'>
          <IonImg src={appLogo} className='w-full mx-auto' />
          <div className='flex flex-col items-center justify-center w-full'>
            <IonButton className='w-full bg-[#F5BC55]'>Continue With Email</IonButton>
            <div className='flex flex-col items-center justify-center w-full'>
              <div></div>
              <IonText>Or use social for sign up</IonText>
              <div></div>
            </div>
            <IonButton className='mt-4 w-full bg-[#2B4D3F]'>Continue With Google</IonButton>
            <IonText>Already have an account? <IonRouterLink>Log In</IonRouterLink></IonText>
          </div>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default Signup;