import 'antd/dist/reset.css';
import Profile from './pages/profile';
import { Layout, Button, Col, Row, Spin } from "antd";
import Navbar from "./components/navbar";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from "./pages/contact";
import LegalMentions from "./pages/legalMentions";
import { useEffect, useState } from 'react';
import CvPage from "./pages/cpPage";


function LayoutSite() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (document.readyState === 'complete') {
      setIsReady(true);
    } else {
      document.addEventListener('readystatechange', () => {
        if (document.readyState === 'complete') {
          setIsReady(true);
        }
      });
    }
  }, []);

  if (isReady) {
    return (
      <Router>
        <Layout className={"mainpage"}>
          <Header className={"headermainpage"}>
            <Navbar />
          </Header>
          <Content style={{ backgroundColor: "inherit" }}>
            <Routes>
              <Route path='/' element={<Profile />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/cv' element={<CvPage/>} />
              <Route path='/experiences' element={<Contact />} />
              <Route path='/legal' element={<LegalMentions />} />
            </Routes>
          </Content>
          <Footer className={"footermainpage"}>
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
  } else {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Spin size="large" style={{ color: '#ffffff' }} />
      </div>
    );
  }
}

export default LayoutSite;
