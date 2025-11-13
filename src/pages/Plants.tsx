import { Search } from "lucide-react";
import TabBar from '../components/TabBar';
import milho from '../assets/milho.jpeg';
import cana from '../assets/cana.jpg';
import feijao from '../assets/feijao.jpg';
import milhoInfo from '../assets/milhoInfo.jpg';
import canaInfo from '../assets/canaInfo.jpg';
import feijaoInfo from '../assets/feijaoInfo.jpg'
import milhoGraf from '../assets/graficoMilho.png';
import canaGraf from '../assets/graficoCana.png';
import feijaoGraf from '../assets/graficoFeijao.png';
import './Plants.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const plantas = [
  {
    id: 1,
    nome: "Milho",
    imagem: milho,
    imagemInfo: milhoInfo,
    ajusteText: "Últimos dias foram secos, ajuste automático em +10% de água",
    grafico: milhoGraf,
    especie: "Zea mays",
    localizacao: "Lote X",
    umidadeSolo: "36%",
    necissidade: "Suficiente",
    irrigacao: "00:00 00/00"
  },
  {
    id: 2,
    nome: "Cana-de-açúcar",
    imagem: cana,
    imagemInfo: canaInfo,
    ajusteText: "Últimos dias foram secos, ajuste automático em +20% de água",
    grafico: canaGraf,
    especie: "Zea Saccharum officinarum",
    localizacao: "Lote X",
    umidadeSolo: "40%",
    necissidade: "Suficiente",
    irrigacao: "00:00 00/00"
  },
  {
    id: 3,
    nome: "Feijão",
    imagem: feijao,
    imagemInfo: feijaoInfo,
    ajusteText: "Últimos dias foram secos, ajuste automático em +7% de água",
    grafico: feijaoGraf,
    especie: "Phaseolus vulgaris",
    localizacao: "Lote X",
    umidadeSolo: "35%",
    necissidade: "Moderada",
    irrigacao: "00:00 00/00"
  }
];

export default function Plantas() {
  const [busca, setBusca] = useState("");

  const navigate = useNavigate();

  function handleClick(id: number) {
    navigate(`/plantas/${id}`);
  }

  const [plantasAtivas, setPlantasAtivas] = useState(plantas.slice(0, 2));
  const [mostrandoSelecao, setMostrandoSelecao] = useState(false);

  function adicionarPlanta(plantaId: number) {
    const plantaSelecionada = plantas.find(p => p.id === plantaId);
    if (plantaSelecionada && !plantasAtivas.some(p => p.id === plantaId)) {
      setPlantasAtivas([...plantasAtivas, plantaSelecionada]);
    }
    setMostrandoSelecao(false);
  }

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
        {plantasAtivas
          .filter((planta) => planta.nome.toLowerCase().includes(busca.toLowerCase()))
          .map((planta) => (
            <div key={planta.id} className="planta-card" onClick={() => handleClick(planta.id)}>
              <img src={planta.imagem} alt={planta.nome} className="planta-img" />
              <h2 className="planta-nome">{planta.nome}</h2>
            </div>
          ))}
      </div> 
      <div id="criarPlanta" onClick={() => setMostrandoSelecao(true)}>
        <p>+</p>
      </div>
      {mostrandoSelecao && (
        <div className="modal-selecao">
          <h3>Escolha uma planta</h3>
          <div className="opcoes-plantas">
            {plantas.map((p) => (
              <div key={p.id} className="opcao" onClick={() => adicionarPlanta(p.id)}>
                <img src={p.imagem} alt={p.nome} className="plantasImagem"/>
                <p className="nomeImg">{p.nome}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      <TabBar />
    </div>
  );
}
