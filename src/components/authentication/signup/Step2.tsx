import { IonText, IonContent, IonImg, } from '@ionic/react';
import vetImage from '../../../assets/images/veterinarian.jpeg';
import clientImage from '../../../assets/images/client.jpeg';
import { useHistory } from 'react-router';

interface Step2Props {
  onNext: () => void;
  setUserType: (userType: 'veterinarian' | 'client') => void;
}

const Step2: React.FC<Step2Props> = ({ onNext, setUserType }) => {
  // When you click on veterinarian image, you should set a state inside Signup.tsx component to indicate that the user is a veterinarian.
  // When you click on client image, you should set a state inside Signup.tsx component to indicate that the user is a client.

  // Use setUserType to set the user type based on the image clicked.


  // Stylying comments
  // The whole page should have a padding of 24 px. convert 24px to rem.
  // The images can have a black border with a width of 2px.
  // and then will have rounded corners with a radius of 8px.

  return (
    <IonContent fullscreen>
      <div className='bg-[#F0E4CE] flex flex-col items-center justify-evenly h-full w-full p-4'>
        <IonImg src={vetImage} className='w-full' />
        <div className='flex flex-col items-center justify-center w-full'>
          <div className='myText flex items-center justify-center w-full'>
            <div className='flex flex-col w-full items-center justify-center line'></div>
            <IonText>Or</IonText>
            <div className='flex flex-col w-full items-center justify-center line'></div>
          </div>
        </div>
        <IonImg src={clientImage} className='w-full' />
      </div>
    </IonContent>
  )
}

export default Step2;