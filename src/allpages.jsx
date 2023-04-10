import 'antd/dist/reset.css';
import Profile from './pages/profile';
import { Layout } from "antd";
import Navbar from "./components/navbar";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from "./pages/contact";

function LayoutSite() {
  return (
    <Router>
      <Layout className={"mainpage"}>
        <Header className={"headermainpage"} >
          <Navbar />
        </Header>
        <Content style={{ backgroundColor: "inherit" }}>
          <Routes>
            <Route path='/' element={<Profile />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </Content>
        <Footer className={"footermainpage"} >
          Personnal website ©2023 Created by Léopold Chappuis
        </Footer>
      </Layout>
    </Router>
  );
}

export default LayoutSite;
