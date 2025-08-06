import { IonText, IonContent, IonButton, IonImg } from '@ionic/react';
import vetImage from '../../../assets/images/veterinarian.jpeg';
import clientImage from '../../../assets/images/client.jpeg';
import { useHistory } from 'react-router';

interface Step2Props {
  onNext: () => void;
  onPrev: () => void;
  setUserType: (userType: 'Vet' | 'Client') => void;
}

const Step2: React.FC<Step2Props> = ({ onPrev,onNext, setUserType }) => {
  // When you click on veterinarian image, you should set a state inside Signup.tsx component to indicate that the user is a veterinarian.
  // When you click on client image, you should set a state inside Signup.tsx component to indicate that the user is a client.

  // Use setUserType to set the user type based on the image clicked.


  // Stylying comments
  // The whole page should have a padding of 24 px. convert 24px to rem.
  // The images can have a black border with a width of 2px.
  // and then will have rounded corners with a radius of 8px.

  const handleClick = (userType: 'Vet' | 'Client') => {
    setUserType(userType);
    onNext();
  }

  const handleBack = () => {
    onPrev();
  }

  return (
    <IonContent fullscreen>
      <div className='bg-[#F0E4CE] flex flex-col items-center justify-evenly h-full w-full p-4'>
        <IonImg src={vetImage} className='w-full cursor-pointer border-solid border-4 rounded-lg border-[#2B4D3F]' onClick={ () => handleClick('Vet') } />
        <div className='flex flex-col items-center justify-center w-full'>
          <div className='flex items-center justify-center w-full'>
            <div className='flex flex-col w-full items-center justify-center line font-bold'></div>
            <IonText>Or</IonText>
            <div className='flex flex-col w-full items-center justify-center line'></div>
          </div>
        </div>
        <IonImg src={clientImage} className='w-full cursor-pointer border-solid border-4 rounded-lg border-[#2B4D3F]' onClick={ () => handleClick('Client') } />
        <div className='flex flex-col items-center justify-center w-full'>
          <IonText className='color-[#284d3f]'>Already have an account?<IonButton fill='clear' className='flex flex-col' onClick={handleBack}> Go back</IonButton></IonText>
        </div>
      </div>
    </IonContent>
  )
}

export default Step2;