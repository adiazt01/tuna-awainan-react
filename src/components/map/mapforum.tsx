import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';

interface Props{
    forumid
}

const fetchInitialPosition = async () => {
    return { lat: 37.7749, lng: -122.4194 };

};

const fetchPosition = async (forumid) =>{
    const { data, error } = await supabase
    .from("ComentariosForos")
    .select("longitud, latitud, profiles(username)")
    .eq('id_for', forumid);

    if (error) {
        console.error(error);
    }
    return data;
}

const updatePosition = async (position) => {
    return position
}

function LocationMarker(){
    const queryClient = useQueryClient();
    
    const { data: initialPosition, isLoading, error } = useQuery({
        queryKey: ['position'],
        queryFn: fetchInitialPosition,
      });

      const mutation = useMutation({
        mutationFn: updatePosition,
        onSuccess: (newPosition) => {
          queryClient.setQueryData(['position'], newPosition);
        },
      });
    
      useMapEvents({
        click(e) {
          mutation.mutate(e.latlng);
        },
      });
    const position = queryClient.getQueryData(['position']) || initialPosition;

    if (!position) {
        return 0;
    }

    return (
        <Marker position={[position.lat, position.lng]}>
        </Marker>
    );

}

const Map: React.FC<Props> = ({ forumid }) => {
    const { data: location , isLoading, error } = useQuery({
        queryKey: ['location'],
        queryFn: () => fetchPosition(forumid),
    });

    return (
        <MapContainer center={[8.296963, -62.711613]} zoom={13} style={{ width: '600px', height: '400px' }} className='mt-4 mx-auto'>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker></LocationMarker>
        {
          location && location.map((marker, index) => (
            <Marker position={[marker.latitud, marker.longitud]} key={index}>
                <Popup>
                    <h2>
                        {marker.profiles.username}
                    </h2>
                </Popup>
            </Marker>
          ))}   
        </MapContainer>
        
    )
};

export default Map;