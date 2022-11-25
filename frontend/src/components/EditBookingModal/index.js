import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditBookingForm from './EditBookingForm';
import './EditBookingModal.css';

function EditBookingModal({ spotId, id }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button className='edit_booking__button' onClick={() => setShowModal(true)}>
                <i className="fa-solid fa-pen-to-square fa-xl"></i>
                <span>Edit Booking</span>
            </button>
            {showModal && (
                <div className='edit-booking-modal'>
                    <Modal onClose={() => setShowModal(false)}>
                        <EditBookingForm onClose={() => setShowModal(false)} spotId={spotId} id={id} />
                    </Modal>
                </div>
            )}
        </>
    );
}

export default EditBookingModal;
