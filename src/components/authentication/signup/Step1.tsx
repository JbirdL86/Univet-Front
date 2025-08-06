import { IonText, IonRouterLink, IonContent, IonImg, IonButton } from '@ionic/react';
import appLogo from '../../../assets/images/app-logo.jpg';
import { useHistory } from 'react-router';

interface Step1Props {
  onNext: () => void;
}

const Step1: React.FC<Step1Props> = ({ onNext }) => {
  const history = useHistory();

  return (
    <IonContent fullscreen>
      <div className='bg-[#F0E4CE] flex flex-col items-center justify-evenly h-full w-full p-4'>
        <IonImg src={appLogo} className='w-full mx-auto' />
        <div className='flex flex-col items-center justify-center w-full'>
          <IonButton className={'w-full signButton'} onClick={() => onNext()}>
            Create an Account
          </IonButton>
          <div className='myText flex items-center justify-evenly w-full'>
            <div className='flex flex-col w-full items-center justify-center line'></div>
            <IonText>Or</IonText>
            <div className='flex flex-col w-full items-center justify-center line'></div>
          </div>
          <IonButton
            className={'googleButton w-full'}
            onClick={() => history.push('/login')}
          >
          <IonText>Already have an account? <IonRouterLink>Log in</IonRouterLink></IonText>
          </IonButton>
        </div>
      </div>
    </IonContent>
  )
}

export default Step1;