import { ArrowLeft } from 'lucide-react';
import TabBar from '../components/TabBar';
import './Detalhes.css';
import { useParams } from "react-router-dom";
import { plantas } from './Plants';
import { useNavigate } from 'react-router-dom';

export default function Detalhes() {
    const navigate = useNavigate();

    const { id } = useParams();
    const planta = plantas.find(p => p.id === Number(id));
    if (!planta) {
        return <p>Planta não encontrada.</p>;
    }

    return (
        <div className="detalhes-container">
            <ArrowLeft size={20} className="voltar" onClick={() => navigate("/plantas")} />
            <img src={planta.imagem} alt={planta.nome} className="detalhes-img" />
            <h2 id="detalhe-nome">{planta.nome}</h2>
            <div id="descricao">
                <p>Espécie: {planta.especie}</p>
                <p>Localização: {planta.localizacao}</p>
                <p>Umidade do solo: {planta.umidadeSolo}</p>
                <p>Necessidade de irrigção: {planta.necissidade}</p>
                <p>Última irrigação: {planta.irrigacao}</p>
                <p>Próxima irrigação: {planta.irrigacao}</p>
            </div>
            <p className='fundo esquerda'>{planta.nome}</p>
            <p className='fundo direita'>{planta.nome}</p>
            <TabBar />
        </div>
    );
}