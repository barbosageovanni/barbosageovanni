import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';

import { auth } from '../Config/firebase'; // Importa a instância auth
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [sucesso, setSucesso] = useState('');
    const [mensagem, setMensagem] = useState('');

    const LoginUsuario = () => {
        // Validação do formato do email
        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

        if (!emailValido) {
            setMensagem('O email não é válido');
            return;
        }

        if (senha.length < 6) {
            setMensagem('A senha deve ter pelo menos 6 caracteres');
            return;
        }

        signInWithEmailAndPassword(auth, email, senha)
            .then((userCredential) => {
                // Login bem-sucedido
                setSucesso('S');
                setMensagem('');
            })
            .catch((error) => {
                // Erro no login
                setSucesso('N');
                setMensagem('E-mail ou senha inválida.');
            });
    };

    const alterarEmail = (event) => {
        setEmail(event.target.value);
    };

    const alterarSenha = (event) => {
        setSenha(event.target.value);
    };

    return (
        <div className="d-flex align-items-center text-center form-container">
            <form className="form-signin">
                <h6 className="h5 mb-3 fw-normal">Autenticação da conta</h6>

                <div className="form-floating">
                    <input onChange={alterarEmail} type="email" className="form-control" id="floatingInput" placeholder="E-mail" />
                    <label htmlFor="floatingInput">E-mail</label>
                </div>

                <div className="form-floating">
                    <input onChange={alterarSenha} type="password" className="form-control" id="floatingPassword" placeholder="Senha" />
                    <label htmlFor="floatingPassword">Senha</label>
                </div>
                
                <button onClick={LoginUsuario} className="w-100 btn btn-lg btn-primary" type="button">Acessar</button>

                {sucesso === 'N' && <div className="alert alert-danger mt-2" role="alert">E-mail ou senha inválida.</div>}
                {mensagem.length > 0 && <div className="alert alert-danger mt-2" role="alert">{mensagem}</div>}

                <div className="login-links mt-4">
                    <Link to="/resetsenha" className="mx-2">Esqueci minha senha</Link>
                    <Link to="/NovaConta" className="mx-2">Criar uma conta</Link>
                </div>

                <p className="mt-4 mb-4 text-muted">&copy; 2023</p>
            </form>
        </div>
    );
}

export default Login;
