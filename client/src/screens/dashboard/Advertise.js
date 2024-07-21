import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useGetAdvertisementQuery, useDeleteAdvertisementMutation } from '../../store/services/adverService';
import { clearMessage, setSuccess } from '../../store/reducers/globalReducer';
import Spinner from '../../components/Spinner';
import Pagination from '../../components/Pagination';
import ScreenHeader from '../../components/ScreenHeader';
import Wrapper from './Wrapper';

const Advertisement = () => {
    let { page } = useParams();
    if (!page) {
        page = 1;
    }

    const { success } = useSelector((state) => state.globalReducer);
    const dispatch = useDispatch();
    const { data = [], isFetching } = useGetAdvertisementQuery(page);
    const [removeAdvertisement, response] = useDeleteAdvertisementMutation();

    const deleteAd = (id) => {
        if (window.confirm('Are you sure you want to delete this advertisement?')) {
            removeAdvertisement(id);
        }
    };

    useEffect(() => {
        if (response.isSuccess) {
            dispatch(setSuccess(response?.data?.message));
        }
    }, [response?.data?.message, dispatch, response.isSuccess]);

    useEffect(() => {
        return () => {
            dispatch(clearMessage());
        };
    }, [dispatch]);

    return (
        <Wrapper>
            <ScreenHeader>
                <Link to="/dashboard/create-advertisement" className="btn-dark">
                    Add Advertisement <i className="bi bi-plus"></i>
                </Link>
            </ScreenHeader>
            {success && <div className="alert-success">{success}</div>}
            {!isFetching ? (
                data?.data?.length > 0 ? (
                    <>
                        <div>
                            <table className="w-full bg-gray-900 rounded-md">
                                <thead>
                                    <tr className="border-b border-gray-800 text-left">
                                        <th className="p-3 uppercase text-sm font-medium text-gray-500">Title</th>
                                        <th className="p-3 uppercase text-sm font-medium text-gray-500">Image</th>
                                        <th className="p-3 uppercase text-sm font-medium text-gray-500">Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data?.data.map((ad) => (
                                        <tr key={ad._id} className="odd:bg-gray-800">
                                            <td className="p-3 capitalize text-sm font-normal text-gray-400">{ad.title}</td>
                                            <td className="p-3">
                                                <img src={ad.image} alt={ad.title} className="w-32 h-16 object-cover" />
                                            </td>
                                            <td className="p-3 capitalize text-sm font-normal text-gray-400">
                                                <button className="btn btn-danger" onClick={() => deleteAd(ad._id)}>
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <Pagination page={parseInt(page)} perPage={data.perPage} count={data.count} path="dashboard/advertisements" />
                    </>
                ) : (
                    <p>No advertisements available.</p>
                )
            ) : (
                <Spinner />
            )}
        </Wrapper>
    );
};

export default Advertisement;