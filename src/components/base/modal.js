import React from 'react';
import RegModal from './reg_modal.js';
import AuthModal from './auth_modal.js';




const Modal = (props) => (
    <>
        {!props?.user?.is_authenticated && (
            // Render React components for registration and authentication modals
            <RegModal props={props} />
            ,
            <AuthModal props={props} />

        )}
    </>
);

export default Modal;