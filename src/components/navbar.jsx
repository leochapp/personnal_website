import {useState} from "react";
import {Menu} from "antd";
import {UserOutlined, ControlOutlined, SettingOutlined, CoffeeOutlined} from '@ant-design/icons';


const items = [
  {
    label: 'About me',
    key: 'profile',
    icon: <UserOutlined />,
  },
  {
    label: 'CV',
    key: 'cv',
    icon: <ControlOutlined />,
    disabled: false,
  },
  {
    label: 'Experiences',
    key: 'experiences',
    icon: <SettingOutlined />,
  },
  {
    label: 'Contact',
    icon: <CoffeeOutlined />,
    key: 'contact',
  },

];

function Navbar(){
  const [current, setCurrent] = useState('profile');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (

      <Menu style={{borderRadius:"10px"}} onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items}>

        </Menu>


  );
};



export default Navbar;
