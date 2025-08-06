import { IonPage, IonPopover, IonRouterLink, IonText, IonContent, IonImg, IonButton } from '@ionic/react';
import { useState } from 'react';
import './Signup.css';
import '../../components/PopoverForm.css'
import '../../components/PopoverForm'
import Step1 from '../../components/authentication/signup/Step1';
import Step2 from '../../components/authentication/signup/Step2';
import Step3 from '../../components/authentication/signup/Step3';
import Step4 from '../../components/authentication/signup/Step4';

const Signup: React.FC = () => {
  const [formStep, setFormStep] = useState(1);
  const [userType, setUserType] = useState('Vet');

  const nextStep = () => {
    setFormStep(formStep + 1);
  };

  const prevStep = () => {
    setFormStep(formStep - 1);
  };

  const renderStep = (step: number = 1) => {
    switch (step) {
      case 1:
        console.log('Step 1');
        return (<Step1 onNext={nextStep} />);
      case 2:
        console.log('Step 2');
        return (<Step2 setUserType={setUserType} onPrev={prevStep} onNext={nextStep} />);
      case 3:
        console.log('Step 3');
        return (<Step3 userType={userType} onPrev={prevStep} onNext={nextStep} />);
      case 4:
        console.log('Step 4');
        return (<Step4 onNext={nextStep} onPrev={prevStep} />);
      default:
        return (<div></div>);
    }
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        { 
           renderStep(formStep)
        }
      </IonContent>
    </IonPage>
  )
}

export default Signup;