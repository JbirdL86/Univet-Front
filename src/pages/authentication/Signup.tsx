import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonImg, IonButton } from '@ionic/react';
import './Signup.css';
import appLogo from '../../assets/images/app-logo.jpg';

const Signup: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className='bg-[#F0E4CE] flex flex-col items-center justify-evenly h-full w-full p-4'>
          <IonImg src={appLogo} className='w-full mx-auto' />
          <div className='flex flex-col items-center justify-center w-full'>
            <IonButton className='w-full'>Continue With Email</IonButton>
            <IonButton className='mt-4 w-full'>Continue With Google</IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default Signup;