import { Search } from "lucide-react";
import TabBar from '../components/TabBar';
import milho from '../assets/milho.jpeg';
import cana from '../assets/cana.jpg';
import milhoInfo from '../assets/milhoInfo.jpg';
import canaInfo from '../assets/canaInfo.jpg';
import milhoGraf from '../assets/graficoMilho.png';
import canaGraf from '../assets/graficoCana.png';
import './Plants.css';
import { useState } from "react";

export const plantas = [
  {
    id: 1,
    nome: "Milho",
    imagem: milho,
    imagemInfo: milhoInfo,
    ajusteText: "Últimos dias foram secos, ajuste automático em +10% de água",
    grafico: milhoGraf,
  },
  {
    id: 2,
    nome: "Cana-de-açúcar",
    imagem: cana,
    imagemInfo: canaInfo,
    ajusteText: "Últimos dias foram secos, ajuste automático em +20% de água",
    grafico: canaGraf,
  },
];

export default function Plantas() {
  const [busca, setBusca] = useState("");

  const plantasFiltradas = plantas.filter((planta) =>
    planta.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="plantas-container">
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

      <div className="plantas-grid">
        {plantasFiltradas.map((planta) => (
          <div key={planta.id} className="planta-card">
            <img src={planta.imagem} alt={planta.nome} className="planta-img" />
            <h2 className="planta-nome">{planta.nome}</h2>
          </div>
        ))}
      </div>
      <div id="criarPlanta">
        <p>+</p>
      </div>
      <TabBar />
    </div>
  );
}
