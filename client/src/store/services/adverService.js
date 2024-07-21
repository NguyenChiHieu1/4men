import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/",
    prepareHeaders: (headers, { getState }) => {
        const reducers = getState();
        const token = reducers?.authReducer?.adminToken;
        headers.set("authorization", token ? `Bearer ${token}` : "");
        return headers;
    },
});

const adverService = createApi({
    reducerPath: 'adverService',
    baseQuery,
    tagTypes: ["Advertisement"],
    endpoints: (builder) => ({
        getAdvertisement: builder.query({
            query: () => '/get-advertise',
            providesTags: ["Advertisement"],
        }),
        createAdvertisement: builder.mutation({
            query: (formData) => ({
                url: 'create-advertise',
                method: 'POST',
                body: formData,
            }),
            invalidatesTags: ["Advertisement"],
        }),
        deleteAdvertisement: builder.mutation({
            query: (id) => ({
                url: `delete-advertise/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ["Advertisement"],
        }),
    }),
});

export const { useGetAdvertisementQuery, useCreateAdvertisementMutation, useDeleteAdvertisementMutation } = adverService;
export default adverService;
