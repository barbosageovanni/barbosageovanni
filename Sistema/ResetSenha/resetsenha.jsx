import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './resetsenha.css';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

function ResetSenha() {
    const [email, setEmail] = useState('');
    const [sucesso, setSucesso] = useState('');
    const [mensagem, setMensagem] = useState('');

    function recuperarSenha() {
        const auth = getAuth();
        sendPasswordResetEmail(auth, email).then(() => {
            setMensagem('');
            setSucesso('Email enviado com sucesso');
        }).catch(erro => {
            setSucesso('');
            setMensagem('Erro ao enviar email: ' + erro.message);
        });
    }

    return (
        <div className="d-flex align-items-center text-center form-container">
            <form className="form-signin">
                <h1 className="h3 mb-3 fw-normal">Recuperar Senha</h1>
                <div className="form-floating">
                    <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="floatingInput" placeholder="E-mail" />
                    <label htmlFor="floatingInput">E-mail</label>
                </div>
                <button onClick={recuperarSenha} className="w-100 btn btn-lg btn-primary mt-3" type="button">Enviar</button>
                {mensagem.length > 0 ? <div className="alert alert-danger mt-2" role="alert">{mensagem}</div> : null}
                {sucesso.length > 0 ? <div className="alert alert-success mt-2" role="alert">{sucesso}</div> : null}
                <div className="login-links mt-5">
                    <Link to="/NovaConta" className="mx-3">Criar uma conta.</Link>
                </div>
                <p className="mt-5 mb-3 text-muted">&copy; 2023</p>
            </form>
        </div>
    );
}

export default ResetSenha;
