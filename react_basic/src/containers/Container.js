import React, {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Table, Row, Col } from 'react-bootstrap';
import Timeline from '../components/Timeline/Timeline';
//import TimelineEvents from '../components/Timeline/TimelineEvents';
//import { error } from 'jquery';
import axios from 'axios';
import Button from '../components/Buttons/Button';
import Card from '../components/Card/Card';


const Container = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

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


  let docs = [
    {
      "Type": "excel",
      "Name": "Remaining tasks for this app",
      "Description": "This is a list of all the remaining tasks required to complete this app",
      "Tags": "Responsive, RWD",
      "LastViewed": "an hour ago",
      "Expiration": "Sep 17, 2015"
    },
    {
      "Type": "powerpoint",
      "Name": "EVAMs presentation",
      "Description": "This is presentation for the EVAM occuring later this month",
      "Tags": "EVAM",
      "LastViewed": "a day ago",
      "Expiration": "Sep 08, 2015"
    },
    {
      "Type": "word",
      "Name": "Xmas Party list",
      "Description": "List of all the people who will be attending the holiday party",
      "Tags": "Responsive, RWD",
      "LastViewed": "a few mins ago",
      "Expiration": "Dec 25, 2014"
    }
  ];

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

        <Timeline 
          title="Timeline" 
          showCount={5}
          isHorz={true} 
          isCard={true} 
          flattenCard={true}
          isLoading={isLoading}
          isStaggered={true}
          centerEvents={true}
          showControls={true}>
          <ul>
            {data.map((item, index) => (
              <li key={item.id}>
                <label className={`timeline-event-icon ${index === 0 ? 'icon-square' : 'icon-circle'}`}></label>
                <span className="timeline-event-thumbnail">{item.thumbnail}</span>
                <small>{item.text}</small>
              </li>
            ))}
          </ul>
        </Timeline>

        <Card className="bg-dracula flat-em">
          <div className="card-content">
            <Button type="button" buttonStyle="blueBlur" isBlock={true} expandFull={true}>Button1</Button>
            <Button type="button" buttonStyle="blur" isBlock={true} expandFull={true}>Button2</Button>
            <Button type="button" buttonStyle="clear" isBlock={true} expandFull={true}>Button3</Button>
          </div>
          <div className="card-content">
            <Button type="checkbox"></Button>
            <Button type="checkbox" disabled={true}></Button>
            <Button type="switch"></Button>
            <Button type="switch" disabled={true}></Button>
          </div>
          <div className="card-content">
            <Button type="button" buttonType="widget" icon="leftArrow"></Button>
            <Button type="button" buttonType="widget" icon="rightArrow"></Button>
            <Button type="button" buttonType="widget" icon="topArrow"></Button>
            <Button type="button" buttonType="widget" icon="btmArrow"></Button>
          </div>
        </Card>
        
        <Card className="flat">
          <div className="card-content">
            <Button type="button" buttonStyle="blueBlur" isBlock={false} expandFull={false} inverseColor={true}>Button4</Button>
            <Button type="button" buttonStyle="blueBlur" isBlock={false} expandFull={false}>Button5</Button>
            <Button type="button" buttonStyle="blur" isBlock={false} expandFull={false} inverseColor={true}>Button6</Button>
            <Button type="button" buttonStyle="blur" isBlock={false} expandFull={false}>Button7</Button>
            <Button type="button" buttonStyle="clear" isBlock={false} expandFull={false} inverseColor={true}>Button8</Button>
            <Button type="button" buttonStyle="clear" isBlock={false} expandFull={false}>Button9</Button>
          </div>
        </Card>
        
        
        <Card className="flat">
          <p className="card-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id unde sint accusantium ea deleniti doloremque dicta maxime, nam quia dolor minima quibusdam debitis, quis voluptate in officia temporibus, possimus vel?</p>
          <p className="card-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id unde sint accusantium ea deleniti doloremque dicta maxime, nam quia dolor minima quibusdam debitis, quis voluptate in officia temporibus, possimus vel?</p>
        </Card>
      </div>

    </div>
  )
}

export default Container;