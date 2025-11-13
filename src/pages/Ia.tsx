import { Search } from "lucide-react";
import TabBar from '../components/TabBar';
import { plantas } from './Plants';
import './Ia.css';
import { useState } from "react";

export default function PlantasInfo() {
    const [busca, setBusca] = useState("");

    const plantasFiltradas = plantas.filter((planta) =>
        planta.nome.toLowerCase().includes(busca.toLowerCase())
    );

    return (
        <div className="ia-container">
            <div className="busca-container">
                <input
                    type="text"
                    placeholder="Buscar planta..."
                    value={busca}
                    onChange={(e) => setBusca(e.target.value)}
                    className="input-busca"
                />
                <Search size={20} className="icone-busca" />
            </div>

            <div className="plantasInfo-grid">
                {busca &&
                    plantasFiltradas.map((planta) => (
                        <div key={planta.id} className="plantaInfo-card">
                            <img src={planta.imagemInfo} alt={planta.nome} className="plantaInfo-img" />
                            <div className="ajusteText">
                                <p>{planta.ajusteText}</p>
                            </div>
                            <div className="plantaInfo-texto">
                                <h2 className="plantaInfo-nome">{planta.nome}</h2>
                                <div className="plantaInfo-desc">
                                    <ul>
                                        <li>Precisa de irrigação leve</li>
                                        <li>Umidade suficiente</li>
                                        <li>Próxima irrigação prevista: 00:00 - 00/00</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="grafico-container">
                                <img src={planta.grafico} alt={planta.nome} className="grafico-plantas"></img>
                            </div>
                        </div>
                    ))}
            </div>
            <TabBar/>
        </div>
    );
}
