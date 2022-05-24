import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const PurchaseProduct = ({service}) => {
    const [user] = useAuthState(auth);
    
    return (
        <div>
            
        </div>
    );
};

export default PurchaseProduct;