import { Card, Space, Divider } from 'antd';

function EducationCard(){

    return(

        <Space direction="vertical" size={16}>
    <Card
      title={<strong>Education</strong>}
      extra={<a href="#">More</a>}
      style={{
        width: 300,
      }}
    >
      <p><strong>2021-today</strong> - Engineering School    specialization in computer science
</p>
      <p><strong>2021</strong> - High School Diploma</p>
      <Divider>Languages</Divider>
        <p><strong>English</strong> - C1</p>
        <p><strong>Spanish</strong> - A2</p>
        <p><strong>French</strong> - native</p>

    </Card>
    <Card
      title={<strong>Expertise</strong>}
      style={{
        width: 300,
      }}
    >
    <Divider>Informatics</Divider>
            <p><strong>System administration</strong> -  Debian (mail server (postfix), web server (apache2 - nginx), LDAP configuration Phpldapadmin)</p>
            <p><strong>Web </strong>- (html, css, php, python (django rest api), reactJS)</p>
            <p><strong>Data </strong>- (UML, MLD, JSON, Terraform, Phpmyadmin, MySQL, SQLite)</p>
            <p><strong>Languages</strong> - (C, Python, Bash, SQL, PHP, Javascript.)</p>

    </Card>
  </Space>

    );


}
  export default EducationCard;
