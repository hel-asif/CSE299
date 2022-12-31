import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';



    export const shazamCoreApi = createApi({
        reducerPath: 'shazamCoreApi',
        baseQuery: fetchBaseQuery({
            baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
            prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '2f4ef92eafmsh63633f84a66ea23p178c4ajsnf28d7c23d9ab');
            return headers;
        },
     }),
     endpoints: (builder) => ({
      
        getTopCharts: builder.query({query: ()=> '/charts/world'}),
        getSongDetails: builder.query({query: ({songid})=>`/tracks/details?track_id=${songid}` }),
        getSongRelated: builder.query({query: ({songid})=>`/tracks/related?track_id=${songid}` }),
        getSongsBySearch: builder.query({query: (searchTerm)=>`/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}` }),

     }),
    });

    export const {

        useGetTopChartsQuery,
        useGetSongDetailsQuery,
        useGetSongRelatedQuery,
        useGetSongsBySearchQuery,
    } = shazamCoreApi;

   