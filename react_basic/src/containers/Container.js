import React, {useState, useEffect, useRef} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import the Dummy datas
import axios from 'axios';
import {docs, accordianData} from './demo_data';

// import Salient Library
import Button from '../utils/Salient/UI/Buttons/Button';
import Card, {CardInfo, CardContent, CardTitle} from '../utils/Salient/UI/Card/Card';
import Accordian, {AccordianItem} from '../utils/Salient/UI/Accordian/Accordian';
import Tab, {TabContent, TabItems} from '../utils/Salient/UI/Tab/Tab';
import Modal from '../utils/Salient/UI/Modal/Modal';
import Breadcrumb from '../utils/Salient/UI/Breadcrumb/Breadcrumb';
import Table, {TableRow} from '../utils/Salient/UI/Table/Table';
import withPagination from '../utils/Salient/UI/Pagination/withPagination';
import Treeview, {TreeItem} from '../utils/Salient/UI/Treeview/Treeview';
import Timeline, {TimelineEvent} from '../utils/Salient/UI/Timeline/Timeline';
import Dropdown, {DropdownItem} from '../utils/Salient/UI/Form/Dropdown';
import FormPrefix from '../utils/Salient/UI/Form/FormPrefix';
import NumericField from '../utils/Salient/UI/Form/NumericField';

// Import Components Build with Salient
import SampleDynamicPaginatedTable from '../components/SampleDynamicPaginatedTable';
import SampleStaticPaginatedTable from '../components/SampleStaticPaginatedTable';
import SampleStaticTable from '../components/SampleStaticTable';

const Container = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const [showModal, setShowModal] = useState(false);
  const [showCount, setShowCount] = useState(5);
  const [check, setCheck] = useState(true);
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

  const testNumericFieldCallback = (returnVal) => {
    console.log(returnVal);
    console.log(testRef);
  }

  const testRef = useRef(null);

  return (
    <div id='page-wrapper'>
      <div className="container-fluid">
        <Card className="card-border">
          <CardInfo>
            <CardTitle>Dynamic Table with Pagination</CardTitle>
            <p>using pagination in custom component</p>
          </CardInfo>
          <CardContent>
            <input type="text" placeholder="search filter..." style={{display:'block', width: '100%', padding: '.4em', marginBottom: '.2em', boxSizing: "border-box"}} onChange={(e) => setTableFilterValue(e.target.value)}/>
            <SampleDynamicPaginatedTable items={filteredTable} itemsPerPage={3} showPageItemsControl={true}/>
          </CardContent>

          <CardInfo>
            <CardTitle>Dynamic Table with Pagination</CardTitle>
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
            <ExternalPaginatedTable items={filteredTable} itemsPerPage={5} draggable={true} showColToggleUI={true} columns={["Type", "Name", "Description", "Tags", "Last Viewed", "Expiration"]} showRowSelector={true}>
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
          <CardInfo>
            <CardTitle>Static Table with Pagination</CardTitle>
          </CardInfo>
          <CardContent>
            <SampleStaticPaginatedTable itemsPerPage={4}/>
          </CardContent>
          <CardInfo>
            <CardTitle>Static Table No Pagination</CardTitle>
          </CardInfo>
          <CardContent>
            <SampleStaticTable />
          </CardContent>
        </Card>

        <Card className='card-flat'>
          <CardInfo>
            <CardTitle>Modal (Click to View)</CardTitle>
          </CardInfo>
          <CardContent>
            <Button type="button" buttonStyle="blueBlur" isBlock={true} expandFull={true} inverseColor={true} onClick={(e) => {e.preventDefault(); setShowModal(true)}}>Show Modal</Button>
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
          <CardInfo justify={true}>
              <CardTitle>Timeline</CardTitle>
              <select value={showCount} onChange={updateShowCount}>
                  <option value="3">3</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="12">12</option>
              </select>
          </CardInfo>
          <CardContent>
            <Timeline 
              showCount={showCount}
              isHorz={true} 
              isLoading={isLoading}
              isStaggered={true}
              centerEvents={true}
              showControls={true}
              isTimelineActive={true}
              activeEventID={3}>
                {data.map((item, index) => (
                    <TimelineEvent 
                    key={item.id} 
                    icon={index === 0 ? 'icon-square' : 'icon-circle'}
                    text={item.text}
                    event={item.thumbnail}/>
                ))}
            </Timeline>
          </CardContent>
        </Card>
       

        <Card className="card-border">
          <CardInfo>
            <CardTitle>Accordian</CardTitle>
          </CardInfo>
          <Accordian activeToggle="single">
              {accordianData.map((item, index) => (
                  <AccordianItem key={index} title={item.title} content={item.content} />
              ))}
          </Accordian>
        </Card>

        <Card className="card-border">
          <CardInfo justify={true}>
              <CardTitle>Tabs</CardTitle>
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
          </CardInfo>

          <Tab sideTabs={isSideTab} activeTabIndex={1}>
            <TabItems tabStyleActive={tabStyle}>
                <li><a>Tab 1</a></li>
                <li><a>Tab 2</a></li>
                <li><a>Tab 3</a></li>
            </TabItems>
            <TabContent>  
                <section className="item" data-title="Tab 1">
                    <div className="item-content">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut dicta neque deleniti dignissimos doloribus asperiores vel velit recusandae quasi? Fugit?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo doloribus quibusdam ratione aliquid ut, dolorem illum velit ad sunt dolorum!</p>
                    </div>
                </section>
                <section className="item" data-title="Tab 2">
                    <div className="item-content">
                        Tab 2 content. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
                    </div>
                </section>
                <section className="item" data-title="Tab 3">
                    <div className="item-content">
                        Tab 3 content. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
                    </div>
                </section>
            </TabContent>
          </Tab>
        </Card>
        
        <Card className="bg-dark card-flat">
          <CardTitle>Block Button</CardTitle>
          <CardContent>
            <Button type="button" buttonStyle="blueBlur" isBlock={true} expandFull={true}>Button1</Button>
            <Button type="button" buttonStyle="blur" isBlock={true} expandFull={true}>Button2</Button>
            <Button type="button" buttonStyle="clear" isBlock={true} expandFull={true}>Button3</Button>
          </CardContent>
        </Card>

        <Card className="card-flat">
          <CardTitle>Checkbox</CardTitle>
            <CardContent>
            <Table columns={['Checkbox Status', 'Display']}>
                <TableRow>
                    <td data-field="Checkbox Status">Enabled</td>
                    <td data-field="Display"><Button type="checkbox"></Button></td>
                </TableRow>
                <TableRow>
                    <td data-field="Checkbox Status">Disabled</td>
                    <td data-field="Display"><Button type="checkbox" disabled={true}></Button></td>
                </TableRow>
              </Table>
            </CardContent>
            <CardTitle>Toggle Switch</CardTitle>
            <CardContent>
              <Table columns={['Slider Mode / Status', 'Display']}>
                <TableRow>
                    <td data-field="Slider Mode">Dark</td>
                    <td data-field="Display"><Button type="switch" sliderMode="dark" onChange={(e) => {setCheck(!check)}} checked={check}></Button></td>
                </TableRow>
                <TableRow>
                    <td data-field="Slider Mode">Forest</td>
                    <td data-field="Display"><Button type="switch" sliderMode="forest" onChange={(e) => {setCheck(!check)}} checked={check}></Button></td>
                </TableRow>
                <TableRow>
                    <td data-field="Slider Mode">Sunset</td>
                    <td data-field="Display"><Button type="switch" sliderMode="sunset" onChange={(e) => {setCheck(!check)}} checked={check}></Button></td>
                </TableRow>
                <TableRow>
                    <td data-field="Slider Mode">Normal</td>
                    <td data-field="Display"><Button type="switch" onChange={(e) => {setCheck(!check)}} checked={check}></Button></td>
                </TableRow>
                <TableRow>
                    <td data-field="Slider Mode">Indigo</td>
                    <td data-field="Display"><Button type="switch" sliderMode="indigo" onChange={(e) => {setCheck(!check)}} checked={check}></Button></td>
                </TableRow>
                <TableRow>
                    <td data-field="Status">Disabled</td>
                    <td data-field="Display"><Button type="switch" disabled={true}></Button></td>
                </TableRow>
              </Table>
            </CardContent>
            <CardTitle>Widget Button</CardTitle>
            <CardContent>
              <Table columns={['Icon', 'Display']}>
                <TableRow>
                    <td data-field="Icon">Left Arrow</td>
                    <td data-field="Display"><Button type="button" buttonType="widget" icon="icon-left-arrow"></Button></td>
                </TableRow>
                <TableRow>
                    <td data-field="Icon">Right Arrow</td>
                    <td data-field="Display"><Button type="button" buttonType="widget" icon="icon-right-arrow"></Button></td>
                </TableRow>
                <TableRow>
                    <td data-field="Icon">Top Arrow</td>
                    <td data-field="Display"><Button type="button" buttonType="widget" icon="icon-top-arrow"></Button></td>
                </TableRow>
                <TableRow>
                    <td data-field="Icon">Bottom Arrow</td>
                    <td data-field="Display"><Button type="button" buttonType="widget" icon="icon-bottom-arrow"></Button></td>
                </TableRow>
                <TableRow>
                    <td data-field="Icon">Tag</td>
                    <td data-field="Display"><Button type="button" buttonType="widget" icon="icon-tag"></Button></td>
                </TableRow>
              </Table>
            </CardContent>
        </Card>
        
        <Card className="card-border">
          <CardInfo>
            <CardTitle>Inverse Buttons</CardTitle>
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
                <CardTitle>Card (Without Animation)</CardTitle>
              </CardInfo>
              <CardContent>Normal card without animation, for more card display option, apply card-flat or card-border class to Card Component</CardContent>
              <CardContent>className='card-border' remove box-shadow and uses border, while className='card-flat' applies a single box-shadow</CardContent>
            </Card>
        
            <Card animation='scale'>
              <CardInfo>
                <CardTitle>Card (With Scale Animation)</CardTitle>
              </CardInfo>
              <CardContent>This card will scale and grow large</CardContent>
            </Card>

            <Card animation='flip-x'>
              <CardInfo>
                <CardTitle>Card (With Flip Animation)</CardTitle>
              </CardInfo>
              <CardContent>This will flip 180 around X-Axis</CardContent>
            </Card>

            <Card animation='flip-y'>
              <CardInfo>
                <CardTitle>Card (With Flip Animation)</CardTitle>
              </CardInfo>
              <CardContent>This will flip 180 around Y-Axis</CardContent>
            </Card>

            <Card animation="tilt">
                <CardInfo>
                  <CardTitle>Card (With Tilt Animation)</CardTitle>
                </CardInfo>
                <CardContent>Note: For Tilt Effect to work properly, card-grid class must be applied on inner div</CardContent>
            </Card>
          </CardContent>
          
        </Card>

        

        <Card className="card-border">
          <CardInfo>
            <CardTitle>Breadcrumbs With Seperator</CardTitle>
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
            <CardTitle>Breadcrumbs Dot Indicator</CardTitle>
          </CardInfo>
          <CardContent>
            <Breadcrumb bcType="dot" centerBc={true}>
              <li><a href="#0"><FontAwesomeIcon icon="house" style={{marginRight: '.6em'}}/>Home</a></li>
              <li><a href="#0">Gallery</a></li>
              <li className="active"><a href="#0">Web</a></li>
              <li><a href="#0">Project</a></li>
            </Breadcrumb>
          </CardContent>
          <CardInfo>
            <CardTitle>Breadcrumbs Basic</CardTitle>
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
            <CardTitle>Breadcrumbs Multi Step with Badge</CardTitle>
          </CardInfo>
          <CardContent>
            <Breadcrumb bcType="multiStep" hasBadge={true} centerBc={true}>
              <li><a href="#0">Home</a></li>
              <li><a href="#0">Gallery</a></li>
              <li className="active"><a href="#0">Web</a></li>
              <li><a href="#0">Project</a></li>
            </Breadcrumb>
          </CardContent>
          <CardInfo>
            <CardTitle>Breadcrumbs Triangle</CardTitle>
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
            <CardTitle>Treeview</CardTitle>
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

        <Card className="card-border">
            <CardInfo>
              <CardTitle>Form Controls</CardTitle>
            </CardInfo>
            <CardContent>
              <CardTitle>Dropdown</CardTitle>
              <Dropdown placeholder="Dropdown" isSearchable={true} inputPrefix={<FormPrefix icon="icon-search"/>} expandFull={true}>
                <DropdownItem value="Test1">Test1</DropdownItem>
                <DropdownItem value="Test2">Test2</DropdownItem>
                <DropdownItem value="Test3">Test3</DropdownItem>
              </Dropdown>
          </CardContent>
          <CardContent>
              <CardTitle>Form Numeric Input</CardTitle>
              <NumericField min={1} max={20} value={5} step={.01} fieldName="Items Per Page" enableSuggestion={true} suggestionLimit={5} callbackFn={testNumericFieldCallback} ref={testRef} fieldControlPlacement="bottom"/>
          </CardContent>
          
        </Card>
      </div>
    </div>
  )
}

export default Container;