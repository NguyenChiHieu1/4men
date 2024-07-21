import React from 'react';
import { useGetAdvertisementQuery } from '../../store/services/adverService';

const AdvertisementDialog = ({ onClose }) => {
    const { data, error, isLoading } = useGetAdvertisementQuery();

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading advertisements: {error.message}</p>;
    const advertisement = data?.data?.[data.data.length - 1];

    if (!advertisement) return <p>No advertisements available</p>;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-4 rounded-lg shadow-lg max-w-md w-full relative">
                <button onClick={onClose} className="absolute top-2 right-2 bg-gray-300 rounded-full p-2">X</button>
                <h2 className="text-2xl font-bold text-center text-primary mb-2 text-red-500">{advertisement.title}</h2>
                <img src={advertisement.image} alt={advertisement.title} className="w-full h-30 object-cover mb-4" />

            </div>
        </div>
    );
};

export default AdvertisementDialog;