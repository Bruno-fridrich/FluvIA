import './Home.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import imgPlant from '../assets/plant.png';
import TabBar from '../components/TabBar';
import { plantas } from './Plants';
import { useNavigate } from "react-router-dom";

export default function Home() {
    const data = [
        { hora: '07h', mm: 5.1 },
        { hora: '08h', mm: 5.3 },
        { hora: '09h', mm: 5.2 },
        { hora: '10h', mm: 5.4 },
        { hora: '11h', mm: 5.5 },
        { hora: '12h', mm: 5.4 },
        { hora: '13h', mm: 5.6 },
        { hora: '14h', mm: 5.8 },
        { hora: '15h', mm: 6.0 },
    ];

    const navigate = useNavigate();

    function handleClick(id: number) {
        navigate(`/plantas/${id}`);
    }

    return (
        <div className="home-container">
            <div id="home-img">
                <img src={imgPlant} alt="Logo FluvIA" className="home-logo" />
                <div className="img-text">
                    <p className="parabens">Parabéns!</p>
                    <p className="economia">Você já economizou 10L de água!</p>
                </div>
            </div>
            <div id="carrossel">
                {plantas.map((planta) => (
                    <div key={planta.id}>
                        <img src={planta.imagemInfo} alt={planta.nome} className='plantHome' onClick={() => handleClick(planta.id)}/>
                    </div>
                ))}
            </div>
            <div className="chart-container">
                <ResponsiveContainer width="100%" height={200}>
                    <LineChart data={data} margin={{ top: 7, right: 7, left: -30, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="hora" />
                        <YAxis domain={[5, 6]} tickCount={6} label={{ value: 'mm', angle: -90, position: 'insideTop' }} />
                        <Line type="monotone" dataKey="mm" stroke="#005577" strokeWidth={3} dot={{ r: 5, fill: 'white', strokeWidth: 2 }} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div id="aviso">
                <p>3 plantas ainda precisam de irrigação hoje</p>
            </div>
            <TabBar />
        </div>
    );
}
