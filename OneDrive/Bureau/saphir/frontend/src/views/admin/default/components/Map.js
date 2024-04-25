import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function Map() {
    const bounds = [
        [41.0, -5.0], 
        [51.0, 10.0]  
    ];

    const [regionsData, setRegionsData] = useState(null);
    const [departmentsData, setDepartmentsData] = useState(null);
    const [selectedOption, setSelectedOption] = useState('');

    useEffect(() => {
        const fetchGeoJSON = async (url, setData) => {
            const response = await fetch(url);
            const data = await response.json();
            setData(data);
        };

        fetchGeoJSON('https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/regions.geojson', setRegionsData);
        fetchGeoJSON('https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements.geojson', setDepartmentsData);
    }, []);

    const handleOptionChange = (option) => {
        setSelectedOption(prevOption => (prevOption === option ? '' : option));
    };
   
    return (
        <div style={{ display: 'flex', height: '550px' }}>
            
            {/* Filters on the left side */}
            <div style={{ width: '20%', marginRight: '10px', padding: '20px' }}> {/* Adjusted width */}
                <div>
                    <input type="radio" id="regions" name="mapType" value="regions" checked={selectedOption === 'regions'} onChange={() => handleOptionChange('regions')} />
                    <label htmlFor="regions"> Régions</label>
                </div>
                <div>
                    <input type="radio" id="departments" name="mapType" value="departments" checked={selectedOption === 'departments'} onChange={() => handleOptionChange('departments')} />
                    <label htmlFor="departments"> Départements</label>
                </div>
                <div>
                    <input type="radio" id="none" name="mapType" value="none" checked={selectedOption === ''} onChange={() => handleOptionChange('')} />
                    <label htmlFor="none"> Aucun</label>
                </div>
            </div>

            {/* Map on the right side */}
            <div style={{ flex: '1', border: '2px solid black', borderRadius: '10px', overflow: 'hidden' }}> 
                <div style={{ height: '100%', width: '100%' }}>
                    <MapContainer
                        center={[46.603354, 1.888334]}
                        zoom={5}
                        style={{ width: '100%', height: '100%' }}
                        maxBounds={bounds}
                        maxBoundsViscosity={1.0}
                        minZoom={5}
                        maxZoom={12}
                    >
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png"
                            attribution='&copy; OpenStreetMap contributors'
                        />
                        {selectedOption === 'regions' && regionsData && <GeoJSON data={regionsData} style={{ fillColor: 'transparent', color: 'lime', weight: 1 }} />}
                        {selectedOption === 'departments' && departmentsData && <GeoJSON data={departmentsData} style={{ fillColor: 'transparent', color: 'lime', weight: 1 }} />}
                    </MapContainer>
                </div>
            </div>
        </div>
    );
}

export default Map;
