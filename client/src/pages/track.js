import React from 'react';
import { gql, useQuery } from "@apollo/client";
import { Layout, QueryResult } from "../components";
import TrackDetail from "../components/track-detail";

const GET_TRACK = gql`
query Track($trackId: ID!) {
  track(id: $trackId) {
    id
    title
    thumbnail
    length
    modulesCount
    author {
      id
      name
      photo
    }
    modules {
      id
      title
      length
    }
    numberOfViews
    description
  }
}`;

const Track = ({ trackId }) => {
    const { loading, error, data } = useQuery(GET_TRACK, {
        variables: {
            trackId
        }
    });
    return (<Layout>
        <QueryResult loading={loading} error={error} data={data}>
            <TrackDetail track={data?.track} />
        </QueryResult>
    </Layout>)
};

export default Track;
