import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import ScreenHeader from '../../components/ScreenHeader';
import Wrapper from './Wrapper'; // Đảm bảo đường dẫn chính xác
import { useCreateAdvertisementMutation } from '../../store/services/adverService';


const CreateAdvertisement = () => {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState(null);
    const [createAdvertisement, { data, isLoading, error }] = useCreateAdvertisementMutation();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        if (image) formData.append('image', image);
        await createAdvertisement(formData);
    };

    useEffect(() => {
        if (data && data.isSuccess) {
            navigate('/dashboard/advertise');
        }
    }, [data, navigate]);

    const errors = error?.data?.errors ? error.data.errors : [];

    return (
        <Wrapper>
            <ScreenHeader>
                <Link to="/dashboard/advertise" className="btn-dark">
                    <i className="bi bi-arrow-left-short"></i> Advertisements List
                </Link>
            </ScreenHeader>
            <form className="w-full md:w-8/12 mx-auto p-4" onSubmit={handleSubmit} encType="multipart/form-data">
                <h3 className="text-lg font-bold mb-4">Create Advertisement</h3>
                {errors.length > 0 && errors.map((error, key) => (
                    <p className="alert-danger" key={key}>{error.msg}</p>
                ))}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-medium mb-2">Title</label>
                    <input
                        type="text"
                        placeholder="Advertisement Title..."
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-medium mb-2">Image</label>
                    <input
                        type="file"
                        onChange={(e) => setImage(e.target.files[0])}
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="submit"
                        value={isLoading ? 'Loading...' : 'Create Advertisement'}
                        className="btn-indigo"
                        disabled={isLoading}
                    />
                </div>
            </form>
        </Wrapper>
    );
};

export default CreateAdvertisement;
