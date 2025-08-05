import { IonPage, IonPopover, IonRouterLink, IonText, IonContent, IonImg, IonButton } from '@ionic/react';
import { useState } from 'react';
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';
import './Signup.css';
import '../../components/PopoverForm.css'
import '../../components/PopoverForm'
import appLogo from '../../assets/images/app-logo.jpg';
import PopoverForm from '../../components/PopoverForm';

const Signup: React.FC = () => {
  const [formStep, setFormStep] = useState(1);
  const [isClicked, setIsClicked] = useState(false);

  const nextStep = () => {
    setFormStep(formStep + 1);
  };

  const prevStep = () => {
    setFormStep(formStep - 1);
  };

  const handleFormSubmit = (data: any) => {
    console.log('Form data submitted:', data);
  };

  const handleClick = () => {
    setIsClicked(!isClicked);
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
        { 
           formStep === 1 ? (
            <div className='bg-[#F0E4CE] flex flex-col items-center justify-evenly h-full w-full p-4'>
              <IonImg src={appLogo} className='w-full mx-auto' />
              <div className='flex flex-col items-center justify-center w-full'>
                <IonButton className={isClicked ? 'w-full signButton-clicked' : 'w-full signButton'} onClick={(e) => {
                  nextStep();
                }}>
                  Continue with Email
                </IonButton>
                <div className='myText flex items-center justify-center w-full'>
                  <div className='flex flex-col w-full items-center justify-center line'></div>
                  <IonText>Or use social for sign up</IonText>
                  <div className='flex flex-col w-full items-center justify-center line'></div>
                </div>
                <IonButton
                  className={isClicked ? 'googleButton-clicked w-full' : 'googleButton w-full'}
                  onClick={() => { googleLogin();}}
                >
                Continue with Google
                </IonButton>
                <IonText class='myText'>Already have an account? <IonRouterLink>Log In</IonRouterLink></IonText>
              </div>
            </div>
          ) : formStep === 2 ? (
              <PopoverForm onDismiss={prevStep}></PopoverForm>
          ) : (
            <div></div>
          )
        }
      </IonContent>
    </IonPage>
  )
}

export default Signup;