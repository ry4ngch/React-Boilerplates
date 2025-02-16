import React, {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Table, Row, Col } from 'react-bootstrap';
import Timeline from '../components/Timeline/Timeline';
//import TimelineEvents from '../components/Timeline/TimelineEvents';
//import { error } from 'jquery';
import axios from 'axios';
import Button from '../components/Buttons/Button';
import Card from '../components/Card/Card';
import Accordian from '../components/Accordian/Accordian';
import Tab from '../components/Tab/Tab';
import {docs, accordianData} from './demo_data';
import Modal from '../components/Modal/Modal';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import Treeview from '../components/Treeview/Treeview';

const Container = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:8080/assets/timeline_data.json')
      .then((response) => {
        setData(response.data.data || []);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching data", error);
        setIsLoading(false);
      });
  }, []);

  const [check, setCheck] = useState(false);
  const [isSideTab, setTabType] = useState(false);
  const [tabStyle, setTabStyle] = useState("underline");

  return (
    <div id='page-wrapper'>
      <div className="container-fluid">
        <Row>
          <Col xs md lg="12">
            <h2>Documents</h2>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col xs md lg="12">
            <div className="docs-table">
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th data-field="Type">Type</th>
                    <th data-field="Name">Name</th>
                    <th data-field="Description">Description</th>
                    <th data-field="Tags">Tags</th>
                    <th data-field="LastViewed">Last Viewed</th>
                    <th data-field="Expiration">Expiration</th>
                  </tr>
                </thead>
                <tbody>
                  {docs.map((row, index) => (
                    <tr key={index}>
                      <td><FontAwesomeIcon icon={"file-"+row.Type}></FontAwesomeIcon></td>
                      <td>{row.Name} app</td>
                      <td>{row.Description}</td>
                      <td>{row.Tags}</td>
                      <td>{row.LastViewed}</td>
                      <td>{row.Expiration}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>

        <Card className='card-flat'>
          <div className="card-info">
            <p className="card__title">Modal (Click to View)</p>
          </div>
          <div className="card-content">
            <Button type="button" buttonStyle="blueBlur" isBlock={true} expandFull={true} inverseColor={true} onClick={() => setShowModal(true)}>Show Modal</Button>
          </div>
        </Card>
        

        <Modal title="Header" showModal={showModal} onCloseModal={(e) => {e.preventDefault(); setShowModal(false)}} className="light-theme" hasSections={true} onModalBlur={() => setShowModal(false)}>
          <section className='center-content'>
                  Section 1
          </section>
          <section className='fit-content'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste corporis sunt culpa illum assumenda ex iusto totam mollitia facere. Libero deserunt natus ea ad sint ex voluptates repellendus architecto tenetur!
          </section>
          <section className='fit-content'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem facere fuga rerum. Voluptate molestiae assumenda dicta velit perferendis exercitationem ratione eligendi amet, modi soluta praesentium fugit, quidem alias voluptatum illo iure. Beatae nobis ipsam dolor quam, ex, nesciunt ea pariatur in quas quo debitis, corrupti illum provident laborum cum expedita!
          </section>
        </Modal>

        <Card className="card-border">
          <div className="card-content">
            <Timeline 
              title="Timeline" 
              showCount={5}
              isHorz={true} 
              isLoading={isLoading}
              isStaggered={true}
              centerEvents={true}
              showControls={true}
              data={data}
              isTimelineActive={true}
              activeEventID={3}>
            </Timeline>
          </div>
        </Card>
       

        <Card className="card-border">
          <div className="card-info">
            <p className="card__title">Accordian</p>
          </div>
          <Accordian data={accordianData} activeToggle="single"/>
        </Card>

        <Card className="card-border">
          <div className="card-info">
            <div className="card-justify">
              <p className="card__title">Tabs</p>
              <div>
                <select onChange={(e) => setTabType(e.target.value==='true')} defaultValue={false}>
                    <option value={true}>Side Tab</option>
                    <option value={false}>Vertical Tab</option>
                </select>
                <select onChange={(e) => setTabStyle(e.target.value)}>
                    <option value="underline">Underline</option>
                    <option value="box">Box</option>
                </select>
              </div>
              
            </div>
          </div>
          <Tab sideTabs={isSideTab} tabStyleActive={tabStyle}/>
        </Card>
        
        <Card className="bg-dark card-flat">
          <div className="card-info">
            <p className="card__title">Block Button</p>
          </div>
          <div className="card-content">
            <Button type="button" buttonStyle="blueBlur" isBlock={true} expandFull={true}>Button1</Button>
            <Button type="button" buttonStyle="blur" isBlock={true} expandFull={true}>Button2</Button>
            <Button type="button" buttonStyle="clear" isBlock={true} expandFull={true}>Button3</Button>
          </div>
          <div className="card-info">
            <p className="card__title">Toggle Switch and CheckBox</p>
          </div>
          <div className="card-content">
            <Button type="checkbox"></Button>
            <Button type="checkbox" disabled={true}></Button>
            <Button type="switch" onChange={(e) => {setCheck(!check)}} checked={check}></Button>
            <Button type="switch" disabled={true}></Button>
          </div>
          <div className="card-info">
            <p className="card__title">Widget Button</p>
          </div>
          <div className="card-content">
            <Button type="button" buttonType="widget" icon="leftArrow"></Button>
            <Button type="button" buttonType="widget" icon="rightArrow"></Button>
            <Button type="button" buttonType="widget" icon="topArrow"></Button>
            <Button type="button" buttonType="widget" icon="btmArrow"></Button>
          </div>
        </Card>
        
        <Card className="card-border">
          <div className="card-info">
            <p className="card__title">Inverse Buttons</p>
          </div>
          <div className="card-content">
            <Button type="button" buttonStyle="blueBlur" isBlock={false} expandFull={false} inverseColor={true}>Button4</Button>
            <Button type="button" buttonStyle="blueBlur" isBlock={false} expandFull={false}>Button5</Button>
            <Button type="button" buttonStyle="blur" isBlock={false} expandFull={false} inverseColor={true}>Button6</Button>
            <Button type="button" buttonStyle="blur" isBlock={false} expandFull={false}>Button7</Button>
            <Button type="button" buttonStyle="clear" isBlock={false} expandFull={false} inverseColor={true}>Button8</Button>
            <Button type="button" buttonStyle="clear" isBlock={false} expandFull={false}>Button9</Button>
          </div>
        </Card>
        
        
        <Card className="card-border">
          <div className="card-content">
            <Card>
              <div className="card-info">
                <p className="card__title">Card (Without Animation)</p>
              </div>
              <p className="card-content">Normal card without animation, for more card display option, apply card-flat or card-border class to Card Component</p>
              <p className="card-content">className='card-border' remove box-shadow and uses border, while className='card-flat' applies a single box-shadow</p>
            </Card>
        
            <Card animation='scale'>
              <div className="card-info">
                <p className="card__title">Card (With Scale Animation)</p>
              </div>
              <p className="card-content">This card will scale and grow large</p>
            </Card>

            <Card animation='flip-x'>
              <div className="card-info">
                <p className="card__title">Card (With Flip Animation)</p>
              </div>
              <p className="card-content">This will flip 180 around X-Axis</p>
            </Card>

            <Card animation='flip-y'>
              <div className="card-info">
                <p className="card__title">Card (With Flip Animation)</p>
              </div>
              <p className="card-content">This will flip 180 around Y-Axis</p>
            </Card>

            <Card animation="tilt">
              <div className="card-grid">
                <div className="card-info">
                  <p className="card__title">Card (With Tilt Animation)</p>
                </div>
                <p className="card-content">Note: For Tilt Effect to work properly, card-grid class must be applied on inner div</p>
              </div>
            </Card>
          </div>
          
        </Card>

        

        <Card className="card-border">
          <div className="card-info">
            <p className="card__title">Breadcrumbs (Light Background)</p>
          </div>
          <div className="card-content">
            <Breadcrumb className="light-bc" hasBadge={true}>
              <a href="#" className="active">Browse</a>
              <a href="#">Compare</a>
              <a href="#">Order Confirmation</a>
              <a href="#">Checkout</a>
            </Breadcrumb>
          </div>
          <div className="card-info">
            <p className="card__title">Breadcrumbs (Dark Background)</p>
          </div>
          <div className="card-content">
            <Breadcrumb hasBadge={true}>
              <a href="#" className="active">Browse</a>
              <a href="#">Compare</a>
              <a href="#">Order Confirmation</a>
              <a href="#">Checkout</a>
            </Breadcrumb>
          </div>
          <div className="card-info">
            <p className="card__title">Breadcrumbs (Transparent Background)</p>
          </div>
          <div className="card-content">
            <Breadcrumb className="transparent-bc" hasBadge={true}>
              <a href="#" className="active">Browse</a>
              <a href="#">Compare</a>
              <a href="#">Order Confirmation</a>
              <a href="#">Checkout</a>
            </Breadcrumb>
          </div>
          <div className="card-info">
            <p className="card__title">Breadcrumbs (Flat Background: No Box Shadow), No Badge</p>
          </div>
          <div className="card-content">
            <Breadcrumb className="flat-bc" hasBadge={false}>
              <a href="#" className="active">Browse</a>
              <a href="#">Compare</a>
              <a href="#">Order Confirmation</a>
              <a href="#">Checkout</a>
            </Breadcrumb>
          </div>
        </Card>
        

        <Card className="card-border bg-dark" style={{marginTop: '10px'}}>
          <div className="card-info">
            <p className="card__title">Treeview</p>
          </div>
          <div className="card-content">
            <Treeview/>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default Container;