import React, {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import the Dummy datas
import axios from 'axios';
import {docs, accordianData} from './demo_data';

// Import Components Build with Salient
import Timeline from '../components/Timeline/Timeline';
import Button from '../utils/Salient/UI/Buttons/Button';
import Card, {CardInfo, CardContent} from '../utils/Salient/UI/Card/Card';
import Accordian, {AccordianItem} from '../utils/Salient/UI/Accordian/Accordian';
import Tab, {TabContent, TabItems} from '../components/Tab/Tab';
import Modal from '../utils/Salient/UI/Modal/Modal';
import Breadcrumb from '../utils/Salient/UI/Breadcrumb/Breadcrumb';
import Treeview, {TreeItem} from '../components/Treeview/Treeview';
import DynamicPaginatedTable from '../components/SampleDynamicTable';
import SampleStaticTable from '../components/SampleStaticTable';
import Table, {TableRow} from '../utils/Salient/UI/Table/Table';
import withPagination from '../utils/Salient/UI/Pagination/withPagination';

const Container = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const [showModal, setShowModal] = useState(false);
  const [showCount, setShowCount] = useState(5);
  const [check, setCheck] = useState(false);
  const [isSideTab, setTabType] = useState(false);
  const [tabStyle, setTabStyle] = useState("underline");
  const [tableFilterValue, setTableFilterValue] = useState();
  const ExternalPaginatedTable = withPagination()(Table);

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

  
  const updateShowCount = (event) => {
    setShowCount(parseInt(event.target.value, 10));
  }

  // generic helper function for any filtering
  function filterData(data, keyword) {
      if (!Array.isArray(data)) return [];

      if (!keyword) return data; // Return all rows if keyword is empty

      const lowerKeyword = keyword.toLowerCase();

      return data.filter(item => {
          if (typeof item !== 'object' || item === null) return false;

          return Object.values(item).some(value => {
              if (value == null) return false; // Skip null or undefined values
              return value.toString().toLowerCase().includes(lowerKeyword);
          });
      });
  }

  // filtered table
  const filteredTable = filterData(docs, tableFilterValue);

  return (
    <div id='page-wrapper'>
      <div className="container-fluid">
        <Card className="card-border">
          <CardInfo>
            <p className="card__title">Dynamic Table with Pagination</p>
            <p>using pagination in custom component</p>
          </CardInfo>
          <CardContent>
            <input type="text" placeholder="search filter..." style={{display:'block', width: '100%', padding: '.4em', marginBottom: '.2em', boxSizing: "border-box"}} onChange={(e) => setTableFilterValue(e.target.value)}/>
            <DynamicPaginatedTable items={filteredTable} itemsPerPage={3}/>
          </CardContent>
        </Card>

        <Card className="card-border">
          <CardInfo>
            <p className="card__title">Dynamic Table with Pagination</p>
            <p>using pagination externally</p>
            <p>Note: The following props are pass to the Table component from this external paginated component</p>
            <ul style={{listStyle: 'none'}}>
              <li>&#10148; draggable</li>
              <li>&#10148; showColToggleUI</li>
              <li>&#10148; columns</li>
              <li>&#10148; data</li>
            </ul>
          </CardInfo>
          <CardContent>
            <input type="text" placeholder="search filter..." style={{display:'block', width: '100%', padding: '.4em', marginBottom: '.2em', boxSizing: "border-box"}} onChange={(e) => setTableFilterValue(e.target.value)}/>
            <ExternalPaginatedTable items={filteredTable} itemsPerPage={5} draggable={true} showColToggleUI={true} columns={["Type", "Name", "Description", "Tags", "Last Viewed", "Expiration"]} data={filteredTable}>
            {(paginatedItems) =>
              (Array.isArray(paginatedItems) ? paginatedItems : []).map((row, index) => (
                <TableRow key={index}>
                  <td data-field="Type"><FontAwesomeIcon icon={"file-"+row.Type}></FontAwesomeIcon></td>
                  <td data-field="Name">{row.Name} app</td>
                  <td data-field="Description">{row.Description}</td>
                  <td data-field="Tags">{row.Tags}</td>
                  <td data-field="Last Viewed">{row.LastViewed}</td>
                  <td data-field="Expiration">{row.Expiration}</td>
                </TableRow>
              ))
            }
            </ExternalPaginatedTable>
          </CardContent>
        </Card>

        <Card className="card-border">
          <CardInfo>
            <p className="card__title">Static Table with Pagination</p>
          </CardInfo>
          <CardContent>
            <SampleStaticTable itemsPerPage={4} />
          </CardContent>
        </Card>

        <Card className='card-flat'>
          <CardInfo>
            <p className="card__title">Modal (Click to View)</p>
          </CardInfo>
          <CardContent>
            <Button type="button" buttonStyle="blueBlur" isBlock={true} expandFull={true} inverseColor={true} onClick={() => setShowModal(true)}>Show Modal</Button>
          </CardContent>
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
          <CardInfo>
            <div className="card-justify">
              <h3 className="card__title"><FontAwesomeIcon icon="history"></FontAwesomeIcon>Timeline</h3>
              <select value={showCount} onChange={updateShowCount}>
                  <option value="3">3</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="12">12</option>
              </select>
            </div>
          </CardInfo>
          <CardContent>
            <Timeline 
              showCount={showCount}
              isHorz={true} 
              isLoading={isLoading}
              isStaggered={true}
              centerEvents={true}
              showControls={true}
              data={data}
              isTimelineActive={true}
              activeEventID={3}>
            </Timeline>
          </CardContent>
        </Card>
       

        <Card className="card-border">
          <CardInfo>
            <p className="card__title">Accordian</p>
          </CardInfo>
          <Accordian activeToggle="single">
              {accordianData.map((item, index) => (
                  <AccordianItem key={index} title={item.title} content={item.content} />
              ))}
          </Accordian>
        </Card>

        <Card className="card-border">
          <CardInfo>
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
          </CardInfo>

          <Tab sideTabs={isSideTab}>
            <TabItems tabStyleActive={tabStyle}>
                <li><a href="#tab1" className="active">Tab 1</a></li>
                <li><a href="#tab2">Tab 2</a></li>
                <li><a href="#tab3">Tab 3</a></li>
            </TabItems>
            <TabContent>  
                <section id="tab1" className="item active" data-title="Tab 1">
                    <div className="item-content">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut dicta neque deleniti dignissimos doloribus asperiores vel velit recusandae quasi? Fugit?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo doloribus quibusdam ratione aliquid ut, dolorem illum velit ad sunt dolorum!</p>
                    </div>
                </section>
                <section id="tab2" className="item" data-title="Tab 2">
                    <div className="item-content">
                        Tab 2 content. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
                    </div>
                </section>
                <section id="tab3" className="item" data-title="Tab 3">
                    <div className="item-content">
                        Tab 3 content. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
                    </div>
                </section>
            </TabContent>
          </Tab>
        </Card>
        
        <Card className="bg-dark card-flat">
          <CardInfo>
            <p className="card__title">Block Button</p>
          </CardInfo>
          <CardContent>
            <Button type="button" buttonStyle="blueBlur" isBlock={true} expandFull={true}>Button1</Button>
            <Button type="button" buttonStyle="blur" isBlock={true} expandFull={true}>Button2</Button>
            <Button type="button" buttonStyle="clear" isBlock={true} expandFull={true}>Button3</Button>
          </CardContent>
          <CardInfo>
            <p className="card__title">Toggle Switch and CheckBox</p>
          </CardInfo>
          <div className="card-content">
            <Button type="checkbox"></Button>
            <Button type="checkbox" disabled={true}></Button>
            <Button type="switch" onChange={(e) => {setCheck(!check)}} checked={check}></Button>
            <Button type="switch" disabled={true}></Button>
          </div>
          <CardInfo>
            <p className="card__title">Widget Button</p>
          </CardInfo>
          <CardContent>
            <Button type="button" buttonType="widget" icon="leftArrow"></Button>
            <Button type="button" buttonType="widget" icon="rightArrow"></Button>
            <Button type="button" buttonType="widget" icon="topArrow"></Button>
            <Button type="button" buttonType="widget" icon="btmArrow"></Button>
          </CardContent>
        </Card>
        
        <Card className="card-border">
          <CardInfo>
            <p className="card__title">Inverse Buttons</p>
          </CardInfo>
          <CardContent>
            <Button type="button" buttonStyle="blueBlur" isBlock={false} expandFull={false} inverseColor={true}>Button4</Button>
            <Button type="button" buttonStyle="blueBlur" isBlock={false} expandFull={false}>Button5</Button>
            <Button type="button" buttonStyle="blur" isBlock={false} expandFull={false} inverseColor={true}>Button6</Button>
            <Button type="button" buttonStyle="blur" isBlock={false} expandFull={false}>Button7</Button>
            <Button type="button" buttonStyle="clear" isBlock={false} expandFull={false} inverseColor={true}>Button8</Button>
            <Button type="button" buttonStyle="clear" isBlock={false} expandFull={false}>Button9</Button>
          </CardContent>
        </Card>
        
        
        <Card className="card-border">
          <CardContent>
            <Card>
              <CardInfo>
                <p className="card__title">Card (Without Animation)</p>
              </CardInfo>
              <p className="card-content">Normal card without animation, for more card display option, apply card-flat or card-border class to Card Component</p>
              <p className="card-content">className='card-border' remove box-shadow and uses border, while className='card-flat' applies a single box-shadow</p>
            </Card>
        
            <Card animation='scale'>
              <CardInfo>
                <p className="card__title">Card (With Scale Animation)</p>
              </CardInfo>
              <p className="card-content">This card will scale and grow large</p>
            </Card>

            <Card animation='flip-x'>
              <CardInfo>
                <p className="card__title">Card (With Flip Animation)</p>
              </CardInfo>
              <p className="card-content">This will flip 180 around X-Axis</p>
            </Card>

            <Card animation='flip-y'>
              <CardInfo>
                <p className="card__title">Card (With Flip Animation)</p>
              </CardInfo>
              <p className="card-content">This will flip 180 around Y-Axis</p>
            </Card>

            <Card animation="tilt">
              <div className="card-grid">
                <CardInfo>
                  <p className="card__title">Card (With Tilt Animation)</p>
                </CardInfo>
                <p className="card-content">Note: For Tilt Effect to work properly, card-grid class must be applied on inner div</p>
              </div>
            </Card>
          </CardContent>
          
        </Card>

        

        <Card className="card-border">
          <CardInfo>
            <p className="card__title">Breadcrumbs With Seperator</p>
          </CardInfo>
          <CardContent>
            <Breadcrumb separator="/">
              <li><a href="#0"><FontAwesomeIcon icon="house" style={{marginRight: '.6em'}}/>Home</a></li>
              <li><a href="#0">Gallery</a></li>
              <li className="active"><a href="#0">Web</a></li>
              <li><a href="#0">Project</a></li>
            </Breadcrumb>
          </CardContent>
          <CardInfo>
            <p className="card__title">Breadcrumbs Dot Indicator</p>
          </CardInfo>
          <CardContent>
            <Breadcrumb bcType="dot">
              <li><a href="#0"><FontAwesomeIcon icon="house" style={{marginRight: '.6em'}}/>Home</a></li>
              <li><a href="#0">Gallery</a></li>
              <li className="active"><a href="#0">Web</a></li>
              <li><a href="#0">Project</a></li>
            </Breadcrumb>
          </CardContent>
          <CardInfo>
            <p className="card__title">Breadcrumbs Basic</p>
          </CardInfo>
          <CardContent>
            <Breadcrumb>
              <li><a href="#0"><FontAwesomeIcon icon="house" style={{marginRight: '.6em'}}/>Home</a></li>
              <li><a href="#0">Gallery</a></li>
              <li className="active"><a href="#0">Web</a></li>
              <li><a href="#0">Project</a></li>
            </Breadcrumb>
          </CardContent>
          <CardInfo>
            <p className="card__title">Breadcrumbs Multi Step with Badge</p>
          </CardInfo>
          <CardContent>
            <Breadcrumb bcType="multiStep" hasBadge={true}>
              <li><a href="#0" data-badge="1">Home</a></li>
              <li><a href="#0" data-badge="2">Gallery</a></li>
              <li className="active"><a href="#0">Web</a></li>
              <li><a href="#0">Project</a></li>
            </Breadcrumb>
          </CardContent>
          <CardInfo>
            <p className="card__title">Breadcrumbs Triangle</p>
          </CardInfo>
          <CardContent>
            <Breadcrumb bcType="triangle">
              <li><a href="#0"><FontAwesomeIcon icon="house" style={{marginRight: '.6em'}}/>Home</a></li>
              <li><a href="#0">Gallery</a></li>
              <li className="active"><a href="#0">Web</a></li>
              <li><a href="#0">Project</a></li>
            </Breadcrumb>
          </CardContent>
        </Card>

        <Card className="card-border bg-dark" style={{marginTop: '10px'}}>
          <CardInfo>
            <p className="card__title">Treeview</p>
          </CardInfo>
          <CardContent>
            <Treeview>
              <TreeItem text='Item 1' subtext="(with levels)">
                <li><span>1.1</span></li>
                <li><span>1.2</span></li>
              </TreeItem>
              <TreeItem text='Item 2' subtext="(multilevel)">
                <li><span>2.1</span></li>
                <TreeItem text="2.2">
                  <li><span>2.2.1</span></li>
                  <li><span>2.2.2</span></li>
                  <TreeItem text="2.2.3" subtext="(we can continue adding levels)">
                    <li><span>2.2.3.1</span></li>
                    <li><span>2.2.3.2</span></li>
                  </TreeItem>
                </TreeItem>
              </TreeItem>
              <TreeItem text='Item 3' subtext="(No Level)"/>
            </Treeview>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Container;