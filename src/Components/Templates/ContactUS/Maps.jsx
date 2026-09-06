import "leaflet/dist/leaflet.css"
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import SectionTitle from "../../Common/SectionTitle";
import { CiLocationOn } from "react-icons/ci";

function Maps() {
    const positions = [
        [32.636265748175255, 51.69336793518022]
    ];

    return (
        <div className='my-10 space-y-10'>
            <div className='space-y-10'>
                <MapContainer className="w-full h-125" center={positions[0]} zoom={15} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={positions[0]}>
                        <Popup>
                            دفتر شاپینو - شعبه اصفهان
                        </Popup>
                    </Marker>
                </MapContainer>
                <div>
                    <SectionTitle text="شعبه اصلی: اصفهان"/>
                    <div className="flex-ic mt-5 text-xl text-neutral-600 font-bold gap-2">
                        <CiLocationOn/>
                        <p>
                            اصفهان - آبشار سوم
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Maps