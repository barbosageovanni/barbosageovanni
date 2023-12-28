import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/style.css';
import App from './App';
import QuemSomos from './pages/About/QuemSomos.jsx';
import Home from './Sistema/Home/home.jsx';
import TireSuasDuvidas from './pages/TireSuasDuvidas/TireSuasDuvidas';
import Sistemas from './pages/Sistemas/Sistemas';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


//import Contact from './pages/Contact/contact';
import TrabalheConosco from './pages/TrabalheConosco/TrabalheConosco';
import Blog from './pages/Blog/Blog';
import Banner from './Components/Banner/banner.jsx';
import Login from './Sistema/Login/login.jsx';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Header from './Components/Header/header';
import Footer from './Components/Footer/footer';
import Features from './Components/Features/features.jsx';
import Precos from './Components/Precos/precos.jsx';
import NovaConta from './Sistema/NovaConta/NovaConta.jsx';
import ResetSenha from './Sistema/ResetSenha/resetsenha.jsx';
import Menu from './Sistema/Menu/menu.jsx';
import DiarioEmocional from './Sistema/DiarioEmocional/diarioemocional.jsx';
import GerenciamentoEmocional from './Sistema/GerenciamentoEmocional/gerenciamentoemocional.jsx';
import DiarioTrader from './Sistema/DiarioTrader/diariotrader.jsx';
import Dashboard from './Sistema/Dashboard/dashboard.jsx';
import GerenciamentoRisco from './Sistema/GerenciamentoRisco/gerenciamentorisco.jsx';
import PlanejamentoTrader from './Sistema/PlanejamentoTrader/planejamentotrader.jsx';
import NavbarDiario from './Sistema/DiarioTrader/NavbarDiario.jsx';
import UpdateTradeModal from './Sistema/DiarioTrader/UpdateTradeModal';
import TradeSearch from './Sistema/DiarioTrader/TradeSearch.jsx';
import TradeForm from './Sistema/DiarioTrader/TradeForm.jsx';
import Button from './Sistema/DiarioTrader/Button.jsx';
import Botao from './Sistema/DiarioTrader/Botao.jsx';
import TradeTable from './Sistema/DiarioTrader/TradeTable.jsx';
import 'react-toastify/dist/ReactToastify.css';
import EditModal from './Sistema/DiarioTrader/EditModal.jsx';
import TradeRow from './Sistema/DiarioTrader/TradeRow.jsx';
import UserAdmin from './Sistema/UserAdmin/UserAdmin.jsx';



//import NovoTrader from './Sistema/novotrader/novotrader.jsx';

// Cria uma instância do roteador de navegação usando o createBrowserRouter.

const router = createBrowserRouter([
  {
    path: "*",
    element: <App />,
  },
      {
        path: "/about",
        element: <QuemSomos />,
      },
      {
        path: "/Sistemas",
        element: <Sistemas />,
      },
      {
        path: "/TireSuasDuvidas",
        element: <TireSuasDuvidas />,
      },
      {
        path: "/TrabalheConosco",
        element: <TrabalheConosco />,
      },
      {
        path: "/Blog",
        element: <Blog />,
      },
      {
        path: "/Header",
        element: <Header />,
      },
      {
        path: "/Footer",
        element: <Footer />,
      },
      {
        path: "/Banner",
        element: <Banner />,
      },
      {
        path: "/Features",
        element: <Features />,
      },
      {
        path: "/Precos",
        element: <Precos />,
      },
      {
        path: "/Home",
        element: <Home />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/NovaConta",
        element: <NovaConta />,
      },
       {
        path: "/resetsenha",
        element: <ResetSenha />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/diarioemocional",
        element: <DiarioEmocional />,
      },
      {
        path: "/gerenciamentoemocional",
        element: <GerenciamentoEmocional />,
      },      
      {
        path: "/diarioTrader",
        element: <DiarioTrader />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/gerenciamentoemocional",
        element: <GerenciamentoEmocional />,
      },
      {
        path: "/gerenciamentorisco",
        element: <GerenciamentoRisco />,
      },
      {
        path: "/planejamentotrader",
        element: <PlanejamentoTrader />,
      },
      {
        path: "/navbardiario",
        element: <NavbarDiario />,
      },
      {
        path: "/updatetrademodal",
        element: <UpdateTradeModal />,
      },
      {
        path: "/tradesearch",
        element: <TradeSearch />,
      },
      {
        path: "/tradeform",
        element: <TradeForm />,
      },
      {
        path: "/button",
        element: <Button />,
      },
      {
        path: "/botao",
        element: <Botao />,
      },
      {
        path: "/tradetable",
        element: <TradeTable />,
      },
      {
        path: "/editmodal",
        element: <EditModal />,
      },
      
      {
        path: "/traderow",
        element: <TradeRow />,
      },
      {
        path: "/useradmin",
        element: <UserAdmin />,
      },
      
   
]);

// Renderiza a raiz do aplicativo com o roteador de navegação.

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
);
