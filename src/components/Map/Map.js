import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
    width: '50vw',
    height: '50vh'
};

const location = {
    lat: 23.869081,
    lng: 90.403068
};

const Map = () => {
    return (
        <div>
            <LoadScript
                googleMapsApiKey="need google map api key. and this is not free of cost"
            >
                <GoogleMap
                    mapContainerStyle={ containerStyle }
                    center={ location }
                    zoom={ 14 }
                >
                    { /* Child components, such as markers, info windows, etc. */ }
                    <></>
                </GoogleMap>
            </LoadScript>
        </div>
    );
};

export default Map;