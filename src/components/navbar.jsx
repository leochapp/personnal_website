import {useState} from "react";
import {Menu} from "antd";
import {UserOutlined, ControlOutlined, SettingOutlined, CoffeeOutlined} from '@ant-design/icons';
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
    navigate(e.item.props.href);
  };

  return (
    <Menu style={{borderRadius:"10px"}} onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items}>
    </Menu>
  );
};

export default Navbar;
