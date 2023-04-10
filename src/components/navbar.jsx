import {useState} from "react";
import {Menu} from "antd";
import {UserOutlined, ControlOutlined, SettingOutlined, CoffeeOutlined} from '@ant-design/icons';


const items = [
  {
    label: 'About me',
    key: 'profile',
    icon: <UserOutlined />,
    href:'/',
  },
  {
    label: 'CV',
    key: 'cv',
    icon: <ControlOutlined />,
    href:'/cv',
  },
  {
    label: 'Experiences',
    key: 'experiences',
    icon: <SettingOutlined />,
    href:'/experiences',
  },
  {
    label: 'Contact',
    icon: <CoffeeOutlined />,
    key: 'contact',
    href: '/contact'
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
