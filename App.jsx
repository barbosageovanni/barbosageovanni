import React from "react";
//import Header from "./Components/Header/header";
//import Footer from "./Components/Footer/footer";
import Banner from "./Components/Banner/banner";
//import Features from "./Components/Features/features";
import Precos from "./Components/Precos/precos";
import Login from "./Sistema/Login/login";
import { Route, Routes } from "react-router-dom";
import Home from "./Sistema/Home/home.jsx";

import QuemSomos from './pages/About/QuemSomos.jsx';
import NovaConta from "./Sistema/NovaConta/NovaConta.jsx";
import ResetSenha from "./Sistema/ResetSenha/resetsenha.jsx";
import Menu from "./Sistema/Menu/menu.jsx";
import Sistemas from "./pages/Sistemas/Sistemas.jsx";
import GerenciamentoEmocional from "./Sistema/GerenciamentoEmocional/gerenciamentoemocional.jsx";
import DiarioEmocional from "./Sistema/DiarioEmocional/diarioemocional.jsx";
import DiarioTrader from "./Sistema/DiarioTrader/diariotrader.jsx";
import Dashboard from "./Sistema/Dashboard/dashboard.jsx";
import GerenciamentoRisco from "./Sistema/GerenciamentoRisco/gerenciamentorisco.jsx";
import PlanejamentoTrader from "./Sistema/PlanejamentoTrader/planejamentotrader.jsx";
import NavbarDiario from "./Sistema/DiarioTrader/NavbarDiario.jsx";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import UpdateTradeModal from "./Sistema/DiarioTrader/UpdateTradeModal";
import { UserProvider } from './UserContext';
import TradeSearch from "./Sistema/DiarioTrader/TradeSearch.jsx";
import TradeForm from "./Sistema/DiarioTrader/TradeForm.jsx";
import Button from "./Sistema/DiarioTrader/Button.jsx";
import Botao from "./Sistema/DiarioTrader/Botao.jsx";
import TradeTable from "./Sistema/DiarioTrader/TradeTable.jsx";
import 'react-toastify/dist/ReactToastify.css';
import EditModal from "./Sistema/DiarioTrader/EditModal.jsx";
import TradeRow from "./Sistema/DiarioTrader/TradeRow.jsx";
import UserAdmin from "./Sistema/UserAdmin/UserAdmin.jsx";


//import NovoTrader from "./Sistema/novotrader/novotrader.jsx";


function App() {


    return ( 

 

        <UserProvider>
            
     
        
        <Routes>
            <Route path="/" element={<Banner />} />,
            <Route path="/Home" element={<Home />} />,
            <Route path="/Login" element={<Login />} />,
            <Route path="/About" element={<QuemSomos />} />,
            <Route path="/NovaConta" element={<NovaConta />} />,
            <Route path="/resetsenha" element={<ResetSenha />} />,       
            <Route path="/menu" element={<Menu />} />,
            <Route path="/Sistemas" element={<Sistemas />} />,
            <Route path="/precos" element={<Precos />} />,
            <Route path="/GerenciamentoEmocional" element={<GerenciamentoEmocional />} />,
            <Route path="DiarioEmocional" element={<DiarioEmocional />} />,
            <Route path="DiarioTrader" element={<DiarioTrader />} />,
            <Route path="DashBoard" element={<Dashboard />} />,
            <Route path="gerenciamentoemocional" element={<GerenciamentoEmocional />} />,
            <Route path="gerenciamentorisco" element={<GerenciamentoRisco />} />,
            <Route path="planejamentotrader" element={<PlanejamentoTrader />} />,
            <Route path="navbardiario" element={<NavbarDiario />} />,
            <Route path="updatetrademodal" element={<UpdateTradeModal />} />,
            <Route path="tradesearch" element={<TradeSearch />} />,
            <Route path="tradeform" element={<TradeForm />} />,
            <Route path="button" element={<Button />} />,
            <Route path="botao" element={<Botao />} />,
            <Route path="tradetable" element={<TradeTable />} />,
            <Route path="editmodal" element={<EditModal />} />,
            <Route path="traderow" element={<TradeRow />} />,
            <Route path="useradmin" element={<UserAdmin />} />,
            
            
            


        </Routes>
    
        </UserProvider>

    );
}

export default App
