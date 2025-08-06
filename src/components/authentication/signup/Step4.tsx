import { IonText, IonContent, IonImg, IonButton } from '@ionic/react';
import appLogo from '../../../assets/images/app-logo.jpg';
import { useHistory } from 'react-router';

// Change the Step4Props interface to use the information gathered in previous steps
// You can pass this information inside the Signup.tsx component and then pass it down to Step4 as props.
interface Step4Props {
  onNext: () => void;
  onPrev: () => void;
}

const Step4: React.FC<Step4Props> = ({ onNext, onPrev }) => {
  // Here is where you are submitting the form.
  // You don't need another file for the form, you can build the form directly in this component.
  const history = useHistory();

  return (
    <IonContent fullscreen>
      <div className='bg-[#F0E4CE] flex flex-col items-center justify-evenly h-full w-full p-4'>
        <IonImg src={appLogo} className='w-full mx-auto' />
        <div className='flex flex-col items-center justify-center w-full'>
          <IonButton className={'w-full signButton'} onClick={onNext}>
            Create an Account
          </IonButton>
          <div className='myText flex items-center justify-center w-full'>
            <div className='flex flex-col w-full items-center justify-center line'></div>
            <IonText>Or</IonText>
            <div className='flex flex-col w-full items-center justify-center line'></div>
          </div>
          <IonButton
            className={'googleButton w-full'}
            onClick={() => history.push('/login')}
          >
            Already have an account? Log in
          </IonButton>
        </div>
      </div>
    </IonContent>
  )
}

export default Step4;