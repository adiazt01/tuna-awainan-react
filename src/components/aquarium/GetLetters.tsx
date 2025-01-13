import { useQuery } from '@tanstack/react-query'
import { Abecedario, Getletters } from '@/services/aquarium'



export function CargarLetters() {

    const { data: ListLetters, error, isLoading } = useQuery({ queryKey: ['especimens'], queryFn: Abecedario });

    if (error) {
        throw error;
    }
    return ListLetters;
}