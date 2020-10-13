import React from 'react';
import '../content/css/App.css';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import Productos from './Productos.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      tabs:[
        "Precio País",
        "Costo",
        "Excepciones"
      ]
    };
  }

  setSelected (tab){
    console.log(tab);
  };
  
  render(){
    return (
      <div>
        <Tabs defaultActiveKey="0" onSelect={this.setSelected}>
        {
          this.state.tabs.map((tab,index)=>{
            return <Tab eventKey={index} title={tab} key={index}>
              <Productos></Productos>
            </Tab>;
          })
        }
        </Tabs>
      </div>
    );
  }
}

export default App;
