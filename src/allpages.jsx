import 'antd/dist/reset.css';
import Profile from './pages/profile';
import {Layout, Button, Col, Row} from "antd";
import Navbar from "./components/navbar";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from "./pages/contact";
import LegalMentions from "./pages/legalMentions";

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
            <Route path='/cv' element={<Contact />} />
            <Route path='/experiences' element={<Contact />} />
            <Route path='/legal' element={<LegalMentions/>} />
          </Routes>
        </Content>
        <Footer className={"footermainpage"} >
          <div>
          <Row justify={"space-between"} style={{ display: 'flex', alignItems: 'center' }}>
            <Col>
          <p style={{ margin: 0 }}>Personnal website ©2023 Created by Léopold Chappuis</p>
              </Col>


            <Col>
          <Button className={"legalmentionsbutton"} href={"/legal"} type="text" block>Legal mentions</Button>
            </Col>
            </Row>
            </div>
        </Footer>
      </Layout>
    </Router>
  );
}

export default LayoutSite;
