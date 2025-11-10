import React, { useState } from 'react';
import logo from '../assets/logo.png'
import './Login.css';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log ("Login: ", {email, senha})
        navigate('/home');
    };

    return (
        <div className="login-container">
            <div id="logo">
                <img src={logo} className="logo" alt="FluvIA logo" />
                <h1 id="nomeLogo">FluvIA</h1>
            </div>

            <div className="login-box">
                <h2 id="loginTitulo">Login</h2>

                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        required
                    />
                    <div className="login-links">
                        <a href="#">Esqueci minha senha</a>
                        <a href="#">Não possuo cadastro</a>
                    </div>

                    <button type="submit">Entrar</button>
                </form>
            </div>
        </div>
    );
}