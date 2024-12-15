import React, {useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Table, Row, Col } from 'react-bootstrap';


const Container = () => {
  // useEffect(() => {
  //   if (window.$) {
  //     $('#table').bootstrapTable(); // Ensure jQuery is available before calling bootstrapTable
  //   }
  // }, []);

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
                  {docs.map((row) => (
                    <tr key={row.id}>
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
      </div>

    </div>
  )
}

export default Container;