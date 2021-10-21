import React, { useState } from 'react';
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

const location = {
    lat: 23.869081,
    lng: 90.403068
};

const Direction = ( { origin, destination } ) => {
    const [ response, setResponse ] = useState( null );

    const directionsCallback = res => {
        if ( res !== null ) {
            setResponse( res );
        }
    }

    return (
        <div>
            <LoadScript
                googleMapsApiKey="need google map api key. and this is not free of cost"
            >
                <GoogleMap
                    // required
                    id='direction-example'
                    // required
                    mapContainerStyle={ {
                        height: '50vw',
                        width: '50vh'
                    } }
                    // required
                    zoom={ 14 }
                    // required
                    center={ location }
                >

                    <DirectionsService
                        // required
                        options={ {
                            origin: { origin },
                            destination: { destination },
                            travelMode: "DRIVING"
                        } }
                        // required
                        callback={ directionsCallback }
                    />

                    {
                        response !== null && (
                            <DirectionsRenderer
                                // required
                                options={ {
                                    directions: response
                                } }
                            />
                        )
                    }
                </GoogleMap>
            </LoadScript>
        </div>
    );
};

export default Direction;