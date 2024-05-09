import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function Map({ position, info }) {
    return (
        <>
            <MapContainer
                center={[position.lat, position.lng]}
                zoom={13}
                scrollWheelZoom={true}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
                />
                <Marker position={[position.lat, position.lng]}>
                    <Popup>
                        <p>{info?.formatted}</p>
                        {info?.addInfo?.city && (
                            <p>City : {info?.addInfo?.city}</p>
                        )}
                        <p>State : {info?.addInfo?.state}</p>
                        <p>Country : {info?.addInfo?.country}</p>
                    </Popup>
                </Marker>
            </MapContainer>
        </>
    );
}

export default Map;
