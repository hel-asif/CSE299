import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';



    export const shazamCoreApi = createApi({
        reducerPath: 'shazamCoreApi',
        baseQuery: fetchBaseQuery({
            baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
            prepareHeaders: (headers) => {headers.set('X-RapidAPI-Key',
            '81a7ace48amsh64cd2b1a994cd42p1318f9jsn5ef10d5a97eb')
            return headers;
        },
     }),
     endpoints: (builder) => ({
        getTopCharts: builder.query({query: ()=> '/charts/world'})
     }),
    });

    export const{
        useGetTopChartsQuery,
    } = shazamCoreApi;