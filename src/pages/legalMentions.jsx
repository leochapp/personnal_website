import { List } from 'antd';


function LegalMentions(){

        const data = [
  {
    title: 'Legal Information:',
    description: '',
    content: `Owner status: private
      The Owner is: Léopold Chappuis
      Owner's postal address: rue de la 8e division 60200 Compiègne
      
      The Site Creator is: Léopold Chappuis
      The person responsible for publication is: Léopold Chappuis
      Contact the person responsible for publication: chappuisleopold@gmail.com
      The person responsible for publication is a natural person
      
      The Webmaster is: Léopold Chappuis
      Contact the Webmaster: chappuisleopold@gmail.com
      The host of the site is: Léopold Chappuis, Rue de la 8éme Division 60200 Compiègne`,
  },
  {
    title: 'Presentation and Principle:',
    description: '',
    content: `Hereafter referred to as 'User', any user connecting to and using the site named: lchappuis.fr.
      The site lchappuis.fr includes a set of services, as is, made available to users. It is specified here that users must remain courteous and act in good faith towards other users as well as the webmaster of the site lchappuis.fr. The site lchappuis.fr is regularly updated by Léopold Chappuis.
      Léopold Chappuis strives to provide the most accurate information possible on the lchappuis.fr website (subject to changes made since it was posted), but cannot guarantee the accuracy, completeness, and timeliness of the information disseminated on his site, whether it is his own doing or that of third-party partners who provide him with this information. Consequently, the user acknowledges that he uses this information (for informational purposes only, non-exhaustive, and subject to change) under his exclusive responsibility.`,
  },
  {
    title: 'Accessibility:',
    description: '',
    content: `The lchappuis.fr site is accessible to users 24/7, except in the event of an interruption, scheduled or not, for maintenance or in case of force majeure. In case of unavailability of the service, lchappuis.fr undertakes to do its utmost to restore access to the service and will then endeavor to communicate to users the dates and times of the intervention. As it is subject only to an obligation of means, lchappuis.fr cannot be held responsible for any damage, of any nature whatsoever, resulting from an unavailability of the service.`,
  },
  {
    title: 'Intellectual Property:',
    description: '',
    content: `Léopold Chappuis is the exclusive owner of all intellectual property rights or holds usage rights to all the elements accessible on the site, both on the structure and on the texts, images, graphics, logo, icons, sounds, software...
      Any total or partial reproduction of the lchappuis.fr website, representation, modification, publication, total or partial adaptation of any of these elements, by any means or process used, is prohibited, unless prior written authorization is obtained from Chappuis Léopold, owner of the site at email address: chappuisleopold@gmail.com, failing which it will be considered as an act of infringement and subject to legal proceedings in accordance with the provisions of articles L.335-2 and following of the Intellectual Property Code.`,
  },
   {
    title: 'Hyperlinks and Cookies:',
    description: '',
    content: 'The website lchappuis.fr contains a number of hyperlinks to other sites (partners, information, etc.) established with the authorization of Léopold Chappuis. However, Léopold Chappuis cannot verify the entire content of the sites visited and therefore declines all responsibility in this regard regarding the potential risks of illicit content. The user is informed that during his visits to the lchappuis.fr website, one or more cookies may be automatically installed on his computer through his browser software. A cookie is a block of data that does not allow the user to be identified, but which records information relating to his navigation on the site. The browser software setting allows the user to be informed of the presence of cookies and possibly to refuse them as described at the following address: www.cnil.fr. However, the user can configure his computer s browser to refuse the installation of cookies, knowing that refusing to install a cookie may make it impossible to access certain services. To block cookies, enter "block cookies under IE or firefox" in your search engine and follow the instructions according to your version.'
  },
  {
    title: 'Protection of Property and Persons - Personal Data Management:',
    description: '',
    content: 'In France, personal data is notably protected by law n° 78-87 of January 6, 1978, law n° 2004-801 of August 6, 2004, article L. 226-13 of the Penal Code, and the European Directive of October 24, 1995.On the lchappuis.fr website, Chappuis Léopold does not collect any personal information (in accordance with article 4 of law n°78-17 of January 6, 1978) relating to the user. The lchappuis.fr website is compliant with the GDPR.'
  }



];

        

        return(
            <>
            <div style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "0 20%",
              marginTop: "2.5%",
              marginBottom: "1%",
              backgroundColor:"rgba(90,90,90,.5)",
              padding:"1%",
              borderRadius:"10px",

            }}>

                    <h1>LEGAL MENTIONS :</h1>
                    <h2><p style={{textAlign:"justify"}}>In accordance with the provisions of Articles 6-III and 19 of Law No. 2004-575 of June 21, 2004 for Confidence in the Digital Economy, known as the L.C.E.N., we inform users and visitors of the site: <a href="http://lchappuis.fr" target="_blank">lchappuis.fr</a> of the following information:</p></h2>


                    <List
                            itemLayout="vertical"
                            size="small"
                            pagination={{
                              onChange: (page) => {
                                console.log(page);
                              },
                              pageSize: 3,
                            }}
                            dataSource={data}

                            renderItem={(item) => (
                              <List.Item key={item.title}>
                                <List.Item.Meta
                                  title={<p>{item.title}</p>}
                                  description={item.description}
                                />
                                {item.content}
                              </List.Item>
                            )}
                          />

            </div>
    </>
        );
}


export default LegalMentions;