import { IonPage, IonPopover, IonRouterLink, IonText, IonContent, IonImg, IonButton, IonNavLink } from '@ionic/react';
import { useState } from 'react';
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';
import '../../../pages/authentication/Signup';
import './Step4';
import client from '../../../assets/images/client.jpeg'
import veterinarian from '../../../assets/images/veterinarian.jpeg'
import Step4 from './Step4';

interface Step3Props {
  onNext: () => void;
  onPrev: () => void;
  userType: string;
}

const Signup: React.FC<Step3Props> = ({ onPrev, onNext, userType }) => {
  const [showPopover, setShowPopover] = useState(false);
  //const [popoverEvent, setPopoverEvent] = useState<any>();
  const [isClicked, setIsClicked] = useState(false);

  const handlePresentPopover = (e: React.MouseEvent) => {
    e.preventDefault();
   // setPopoverEvent(e.nativeEvent);
    setShowPopover(true);
    handleClick();
  };

  const handleDismissPopover = () => {
    setShowPopover(false);
  };

  const handleFormSubmit = (data: any) => {
    console.log('Form data submitted:', data);
  };

  const handleClick = () => {
    setIsClicked(!isClicked);
  }

  const handleBack = () => {
    onPrev();
  }

  const googleLogin = useGoogleLogin({
    onSuccess: tokenResponse => {
        console.log('Google token received:', tokenResponse);
        // This is where you would send the tokenResponse.access_token or tokenResponse.credential
        // to your Rails backend for verification and user sign-in.
        // Example: sendTokenToServer(tokenResponse);
    },
    onError: () => {
        console.log('Login Failed');
    },
  });

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonPopover
          isOpen={showPopover}
          onDidDismiss= {handleDismissPopover}
          className="fullscreen-popover"
        >
          <Step4 userType={userType} onDismiss={handleDismissPopover}></Step4>
        </IonPopover>
        <div className='bg-[#F0E4CE] flex flex-col items-center justify-around h-screen w-full p-4'>
          {userType == 'Vet' ? (
            <>
            <div className='flex flex-col justify-around items-center flex-grow'>
              <IonImg src={veterinarian} className='w-full mx-auto' />
              <IonText className='flex flex-col items-center justify-evenly w-full text-[#284d3f] font-semibold'>YOU ARE NOT A VETERINARIAN?<IonButton fill='clear' onClick={handleBack}> Go back</IonButton></IonText>
            </div>
            </>
          )
          :
          (
            <>
              <div className='flex flex-col justify-around items-center flex-grow'>
                <IonImg src={client} className='w-full mx-auto' />
                <IonText className='flex flex-col items-center justify-evenly w-full text-[#284d3f] font-semibold'>YOU ARE NOT A FARMER?<IonButton fill='clear' onClick={handleBack}> Go back</IonButton></IonText>
              </div>
            </>
          )}
          <div className='flex flex-col items-center justify-center flex-grow w-full'>
            <IonButton className={isClicked ? 'w-full signButton-clicked' : 'w-full signButton'} onClick={(e) => {
              e.persist;
              setShowPopover(true);
            }}>
              Continue with Email
            </IonButton>
            <div className='myText flex items-center justify-center w-full'>
              <div className='flex flex-col w-full items-center justify-center line'></div>
              <IonText className='text-[#284d3f] font-semibold'>Or use social for sign up</IonText>
              <div className='flex flex-col w-full items-center justify-center line'></div>
            </div>
            <IonButton
              className={isClicked ? 'googleButton-clicked w-full' : 'googleButton w-full'}
              onClick={() => { googleLogin(); handleClick();}}
            >
            Continue with Google
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default Signup;