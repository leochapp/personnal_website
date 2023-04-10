import 'antd/dist/reset.css';
import Profile from './pages/profile';
import {Layout} from "antd";
import Navbar from "./components/navbar";
import Sider from "antd/es/layout/Sider";
import {Content, Footer, Header} from "antd/es/layout/layout";

function LayoutSite() {

    return (

      <Layout className={"mainpage"}>
          <Header className={"headermainpage"} > <Navbar /> </Header>
          <Content style={{backgroundColor:"inherit"}}>
              <Profile/>
          </Content>
          <Footer className={"footermainpage"} >Personnal website ©2023 Created by Léopold Chappuis</Footer>
      </Layout>
    )

}



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
export default LayoutSite;
