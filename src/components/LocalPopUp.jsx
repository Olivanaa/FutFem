import { Popup } from "react-leaflet";
import { Calendar, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../utils/DataFormato"

export default function LocalPopup({ local }) {
    const navigate = useNavigate()
    const { logradouro, numero, bairro, cidade } = local.local
    const nome = local.nome
    const data = local.data

    const handleClick = () => {
        if (local.tipo.toLowerCase() === "evento") {
            navigate(`/encontro`)
        } else {
            return
        }
    }

    return (
        <Popup>
            <div className="flex flex-col gap-3 p-2">
                <h1 className="text-lg font-bold text-gray-800">{nome}</h1>

                <div className="flex items-start gap-2 text-gray-600 text-sm">
                    <MapPin className="w-4 h-4 flex-shrink-0 mt-1" />
                    <span>{[logradouro, numero, bairro, cidade].filter(Boolean).join(", ")}</span>
                </div>
                {data && <div className="flex items-start gap-2 text-gray-600 text-sm">
                    <Calendar className="w-4 h-4 flex-shrink-0" />
                    <span>{formatDate(data)}</span>
                    </div>}
                

                <div className="flex justify-center mt-3">
                    <button
                        onClick={handleClick}
                        className="px-3 py-1 w-full bg-lilas text-white rounded hover:bg-roxo transition text-sm"
                    >
                        Saiba Mais
                    </button>
                </div>
            </div>
        </Popup >
    )
}