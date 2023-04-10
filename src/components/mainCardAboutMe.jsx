import { FacebookOutlined,InstagramOutlined ,LinkedinOutlined } from '@ant-design/icons';
import { Avatar,Card, Col, Row, Button,Space } from 'antd';


const { Meta } = Card;

function MainCard(){


    return(
        <Space direction="vertical" size="large" style={{ display: 'flex' }}>

    <Row xs={2} sm={2}/>
    <Row>

        <Col xs={2} sm={6} />
      <Col>
  <Card
    style={{ width: 300, backgroundColor:"#C4A287"}}
    cover={
      <img
        alt="example"
        src="https://lchappuis.fr/pub/profile.ico"
      />
    }
    actions={[
      <a href={"https://www.linkedin.com/in/l%C3%A9opold-chappuis-840303215/"}><LinkedinOutlined  /></a>,
      <a href={"https://www.facebook.com/leopold.chappuis/"}><FacebookOutlined  /></a>,
      <a href={"https://www.instagram.com/leopold.chappuis/"}><InstagramOutlined /></a>,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://lchappuis.fr/pub/profile.ico" />}
      title="Léopold Chappuis"
      description="Engineering student"
    />
  </Card>
      </Col>

  <Col>
    <Card title={<b>Myself</b>} bordered={true} style={{ width: 300 }}>
        <p>Who I am and what I'm doing.</p>
        <Space wrap>
        <Button className={"mainbutton"} href={"https://lchappuis.fr"} type="primary">CV</Button>
        <Button className={"mainbutton"} href={"https://lchappuis.fr"} type="primary">Experiences</Button>
        </Space>
        <br/>
        <br/>
        <p>I'm currently studying computer science in an french engineering school nammed "Université de Technologie de Compiègne"</p>
    </Card>
  </Col>

    <Col/>
    </Row>

        </Space>

    );

}


export default MainCard;