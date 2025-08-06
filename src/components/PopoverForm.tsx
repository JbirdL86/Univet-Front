import { IonItem, IonList, IonInput, IonLabel, IonContent, IonButton, useIonLoading, IonToast } from '@ionic/react';
import React, { useState } from 'react';
import './PopoverForm.css'

interface Step4Props {
    userType: string;
    onDismiss: () => void;
}

const PopoverForm: React.FC<Step4Props> = ({ userType, onDismiss }) => {
    const [formData, setFormData] = useState({ 
        name: '', 
        lastName: '', 
        email: '', 
        password: '', 
        passwordConfirmation: '', 
        type: userType, 
        address: '', 
        country: '', 
        city: '', 
        specialty: '' 
    });
    const [present, dismiss] = useIonLoading();
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [toastColor, setToastColor] = useState('danger');

    const handleChange = (e: CustomEvent) => {
        const { name, value } = e.target as HTMLInputElement;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateForm = () => {
        if (!formData.email || !formData.password || !formData.name) {
            setToastMessage('Email, name, and password are required.');
            setToastColor('danger');
            setShowToast(true);
            return false;
        }
        if (formData.password !== formData.passwordConfirmation) {
            setToastMessage('Passwords do not match.');
            setToastColor('danger');
            setShowToast(true);
            return false;
        }
        return true;
    };

    const handleSubmit = async () => {
                    console.log(formData.type)

        if (!validateForm()) {
            return;
        }

        const apiData = {
            user: {
                name: formData.name,
                last_name: formData.lastName, // <-- Correcting case here
                email: formData.email,
                password: formData.password,
                password_confirmation: formData.passwordConfirmation, // <-- Correcting case here
                type: formData.type, // <-- Correcting case here
                address: formData.address,
                country: formData.country,
                city: formData.city,
                speciality: formData.specialty // <-- Correcting spelling here
            }
        };
        
        try {
            await present({
                message: 'Creating user...',
                duration: 0,
            });

            const response = await fetch('http://localhost:3001/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(apiData),
            });

            await dismiss();

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Something went wrong');
            }
            
            const result = await response.json();
            console.log('User created successfully:', result);

            setToastMessage('Registration successful! Popover will dismiss now.');
            setToastColor('success');
            setShowToast(true);

            setTimeout(onDismiss, 2000);

        } catch (error: any) {
            await dismiss();
            console.error('Error creating user:', error.message);
            setToastMessage(`Registration failed: ${error.message}`);
            setToastColor('danger');
            setShowToast(true);
        }
    };

    return (
        <IonContent>
            <IonList>
                <IonItem>
                    <IonLabel position="floating">Name</IonLabel>
                    <IonInput name="name" value={formData.name} onIonChange={handleChange} />
                </IonItem>
                <IonItem>
                    <IonLabel position="floating">Last Name</IonLabel>
                    <IonInput name="lastName" value={formData.lastName} onIonChange={handleChange} />
                </IonItem>
                <IonItem>
                    <IonLabel position="floating">Email</IonLabel>
                    <IonInput type="email" name="email" value={formData.email} onIonChange={handleChange} />
                </IonItem>
                <IonItem>
                    <IonLabel position="floating">Password</IonLabel>
                    <IonInput type="password" name="password" value={formData.password} onIonChange={handleChange} />
                </IonItem>
                <IonItem>
                    <IonLabel position="floating">Password confirmation</IonLabel>
                    <IonInput type="password" name="passwordConfirmation" value={formData.passwordConfirmation} onIonChange={handleChange} />
                </IonItem>
                <IonItem>
                    <IonLabel position="floating">Address</IonLabel>
                    <IonInput name="address" value={formData.address} onIonChange={handleChange} />
                </IonItem>
                <IonItem>
                    <IonLabel position="floating">Country</IonLabel>
                    <IonInput name="country" value={formData.country} onIonChange={handleChange} />
                </IonItem>
                <IonItem>
                    <IonLabel position="floating">City</IonLabel>
                    <IonInput name="city" value={formData.city} onIonChange={handleChange} />
                </IonItem>
                <IonItem>
                    <IonLabel position="floating">Specialty</IonLabel>
                    <IonInput name="specialty" value={formData.specialty} onIonChange={handleChange} />
                </IonItem>
            </IonList>

            <IonButton expand="block" onClick={handleSubmit}>Submit</IonButton>
            <IonButton expand="block" fill="clear" onClick={onDismiss}>Cancel</IonButton>

            <IonToast
                isOpen={showToast}
                onDidDismiss={() => setShowToast(false)}
                message={toastMessage}
                duration={3000}
                color={toastColor}
            />
        </IonContent>
    );
}

export default PopoverForm;