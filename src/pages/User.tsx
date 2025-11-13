import { CircleUser, LogOut, Pencil, History, Droplet, Leaf, Check } from 'lucide-react';
import TabBar from '../components/TabBar';
import { useEffect, useState } from 'react';
import './User.css';

export default function User() {
    const [usuario, setUsuario] = useState<{ usuario: string } | null>(null);
    const [editando, setEditando] = useState(false);
    const [novoNome, setNovoNome] = useState('');

    useEffect(() => {
        const dados = localStorage.getItem('usuario');
        if (dados) {
            const user = JSON.parse(dados);
            setUsuario(user);
            setNovoNome(user.usuario);
        }
    }, []);

    function handleLogout() {
        localStorage.removeItem('usuario');
        window.location.href = '/';
    }

    function edit() {
        setEditando(true);
    }

    function salvarNome() {
        if (!novoNome.trim()) return;
        const atualizado = { ...usuario, usuario: novoNome };
        setUsuario(atualizado);
        localStorage.setItem('usuario', JSON.stringify(atualizado));
        setEditando(false);
    }

    return (
        <div className="User-container">
            <div className='logOut'>
                <LogOut size={30} onClick={handleLogout} />
            </div>

            <div className="usuario-foto">
                <CircleUser size={125} color="white" />
                <Pencil size={20} color="white" className='pencil' onClick={edit} />
            </div>

            {editando ? (
                <div className='edit-container'>
                    <input
                        type="text"
                        value={novoNome}
                        onChange={(e) => setNovoNome(e.target.value)}
                        className='edit-input'
                    />
                    <Check size={22} color="white" className='confirm' onClick={salvarNome} />
                </div>
            ) : (
                <p className='userName'>{usuario?.usuario || "Convidado"}</p>
            )}

            <div className='botoes-container'>
                <div className='botoes'>
                    <History size={20} color="#003650" />
                    <p className='botoes-nome'>Histórico de irrigação</p>
                </div>
                <div className='botoes'>
                    <Droplet size={20} color="#003650" />
                    <p className='botoes-nome'>Consumo de água</p>
                </div>
                <div className='botoes'>
                    <Leaf size={20} color="#003650" />
                    <p className='botoes-nome'>Plantas monitoradas</p>
                </div>

                <div className='card-container'>
                    <div className='card-status'>
                        <p className='status-name'>Número de plantas</p>
                        <p className='num plantas'>3</p>
                    </div>
                    <div className='card-status'>
                        <p className='status-name'>Consumo total</p>
                        <p className='num litros'>21</p>
                    </div>
                </div>
            </div>

            <TabBar />
        </div>
    );
}
