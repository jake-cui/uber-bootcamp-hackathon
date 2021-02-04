import React, { useState, useRef, useEffect } from "react";

import { Button, KIND, SHAPE } from "baseui/button";
import { Card, StyledBody, StyledAction } from "baseui/card";
import { Slider } from "baseui/slider";
import { Input } from "baseui/input";
import { Block } from "baseui/block";
import { Checkbox } from "baseui/checkbox";
import { Accordion, Panel } from "baseui/accordion";
import { useStyletron } from "baseui";
import { FormControl } from "baseui/form-control";
import {AppNavBar, setItemActive} from 'baseui/app-nav-bar';
import {ChevronDown, Delete, Overflow, Upload} from 'baseui/icon';
import logo from "./img/logo.jpg"
import { Navigation } from "baseui/side-navigation";
import {Grid, Cell} from 'baseui/layout-grid';
import './App.css'
import {Heading, HeadingLevel} from 'baseui/heading';

import {FaHome, FaStoreAlt, FaChartLine, FaStarHalfAlt, FaPaste, FaCreditCard,FaTag, FaUserFriends, FaFolder} from 'react-icons/fa';



import zxcvbn from "zxcvbn";
import { generate as generatePassword } from "generate-password";
import copy from "copy-to-clipboard";
import { autoComposeDeep } from "styletron-react";

const getStrengthColor = strength => {
  switch (strength) {
    case 0:
      return "negative400";
    case 1:
      return "warning400";
    case 2:
      return "rating400";
    case 3:
      return "positive200";
    case 4:
      return "positive400";
    default:
      return "primary50";
  }
};

const App = () => {
  const [length, setLength] = useState(32);
  const [uppercase, setUppercase] = useState(true);
  const [copied, setCopied] = useState(false);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(true);
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState(null);
  const passwordRef = useRef(null);

  // Navbar constants
  const [mainItems, setMainItems] = React.useState([
  
    {
      icon: ChevronDown,
      label: 'Sign Out',
      navExitIcon: Delete,
      
    },
  ]);
  const [userItems, setUserItems] = React.useState([
    {icon: Overflow, label: 'Account item1'},
    {icon: Overflow, label: 'Account item2'},
    {icon: Overflow, label: 'Account item3'},
    {icon: Overflow, label: 'Account item4'},
  ]);

  const copyToClipboard = () => {
    copy(password);
    setCopied(true);
  };

  const [activeItemId, setActiveItemId] = React.useState(
    "#primary"
  );

  const setNewPassword = p => {
    const newPassword = p
      ? p
      : generatePassword({ length, numbers, uppercase, symbols });
    const { score } = zxcvbn(newPassword);
    setStrength(score);
    setCopied(false);
    setPassword(newPassword);
  };

  useEffect(() => {
    setNewPassword();
  }, [length, uppercase, symbols, numbers]);
  


  const [useCss, theme] = useStyletron();
  const leftItem = useCss({
    fontSize: "16px", 
    color: "gray",
    marginTop: "30px",
    marginBottom: "30px",
    display: "flex",
    alignItems: "center"});


    
  const rightBorder = useCss({ position: "fixed",left:'30px'});
    const leftBorder = useCss({borderLeft: "1px solid lightgray", paddingLeft: '50px'})

  return (
    <React.Fragment>
       <AppNavBar 
      title={<img src={logo} style={{height:35, position: 'relative', left:'-100px'}}></img>}
      mainItems={mainItems}
      onMainItemSelect={item => {
        setMainItems(prev => setItemActive(prev, item));
      }}
      
      username="Jake Cui"
      userImgUrl="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/15698341_1547099641972103_6718830801661689385_n.jpg?_nc_cat=105&ccb=2&_nc_sid=cdbe9c&_nc_ohc=TOmokYALHRoAX9JU90S&_nc_ht=scontent-sjc3-1.xx&oh=0a58255b0aaaf970a724c49da944d304&oe=6041F349"
      usernameSubtitle="5 Stars"
      userItems={[
        { icon: Overflow, label: "User A" },
        { icon: Overflow, label: "User B" }
      ]}
      onUserItemSelect={item => console.log(item)}
      overrides={{
        Root: {
          style: {
            backgroundColor: "black",
            position: "fixed",
            marginBottom: "scale50",
            zIndex: 100,
            
          },
        },
        Spacing: {
          style: {
            position: 'relative',
            left:'50px'
          }
        },
        MainMenuItem: {
          style: {
            color: "white",
            position: 'relative',
            left:'50px'
          }
        }
      }}
      
    />
{/* second one */}
    <div style={{height:70}}></div>
   <div > 
   <Grid >
      <Cell span={1.5} >
      <div className={rightBorder}>
      <div style={{height:30}}></div>

      {/* <Navigation 
    className={rightBorder} 
      items={[
        {
          title: "Colors",
          icon: ChevronDown,
          itemId: "#colors",
        },
        {
          title: "Analytics",
          icon: ChevronDown,
          itemId: "#colors",
        },

      ]}
      activeItemId={activeItemId}
      onChange={({ item }) =>
        setActiveItemId(item.itemId)
      }
      overrides={{
        Root: {
          style: {
          position: 'fixed'
        }
      }
      }}
    /> */}
    <div className={leftItem}><FaHome/> &emsp;Home </div>
    <div className={leftItem}> <FaStoreAlt></FaStoreAlt> &emsp;Stores </div>
    
    <div className={leftItem}><FaChartLine/> &emsp;Analytics </div>
    <div className={leftItem}><FaStarHalfAlt/> &emsp;Feedback </div>
    <div className={leftItem}><FaPaste/> &emsp;Reports </div>
    <div className={leftItem}><FaCreditCard/> &emsp;Payments </div>
    <div className={useCss({
    fontSize: "16px", 
    color: "green",
    marginTop: "30px",
    marginBottom: "30px",
    display: "flex",
    alignItems: "center"})}><FaTag/> &emsp;Marketing </div>
    <div className={leftItem}><FaUserFriends/> &emsp;Users </div>
    <div className={leftItem}><FaFolder/> &emsp;Documents </div>

    <div className={leftItem}><FaHome/> &emsp;Settings </div>


    </div>
    </Cell>
      <Cell span={10}> 

      <div className={leftBorder}>
      <div style={{height:30}}></div>

      <HeadingLevel>
      <Heading styleLevel={1}>Create a marketing campaign</Heading>
      <Heading styleLevel={4}>Join a pop-up campaign</Heading>

      <Heading styleLevel={6}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas accumsan augue at massa cursus, non tincidunt dolor sagittis. Nunc imperdiet placerat justo sed pharetra. Curabitur quis mi varius, auctor nulla placerat, venenatis augue. In hendrerit fermentum aliquam. Phasellus ultricies lacus non purus sollicitudin euismod. Curabitur aliquam mi et blandit volutpat. Mauris mattis cursus maximus. Aliquam ut cursus sem. Suspendisse lacinia viverra sagittis.

Vivamus ac ultrices metus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus pellentesque, ante ornare ultricies blandit, purus ligula varius lorem, sit amet egestas nulla odio quis neque. Aliquam vitae malesuada felis. Fusce quis nulla quis magna imperdiet commodo fermentum blandit dui. Ut purus erat, commodo quis sapien vitae, cursus mollis libero. Donec consequat eget purus eu lobortis.

Morbi in diam nunc. Curabitur sit amet tellus enim. Nullam eu maximus risus. Sed pharetra felis sed molestie fermentum. Proin dignissim enim id blandit iaculis. Integer dolor lacus, tincidunt ut accumsan semper, sodales sed sem. Suspendisse hendrerit libero enim. Sed vulputate vehicula vulputate. Nullam mattis sapien eu diam lacinia, placerat consectetur arcu vestibulum. Integer interdum bibendum laoreet. Proin lacinia ex eget purus dignissim laoreet. Sed tincidunt mi arcu, vestibulum suscipit mi molestie ut. Cras mattis consectetur viverra. Curabitur tellus turpis, vulputate eu hendrerit quis, venenatis eget odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In quis sapien viverra, ultrices tellus posuere, aliquet tellus.

Vivamus in quam sit amet massa convallis varius. Nunc pretium vitae nunc in rutrum. Maecenas ut dignissim lectus. Curabitur vulputate, justo quis malesuada euismod, turpis sapien vehicula ante, ac pellentesque nunc ligula et arcu. Quisque nulla urna, faucibus eu venenatis eu, placerat vitae enim. Mauris sed urna laoreet, euismod risus nec, sagittis ante. Vivamus vehicula non sem vitae posuere. Nulla finibus est eget tincidunt porta. Sed ultrices, mauris eget ultrices placerat, enim nisi molestie odio, quis aliquam enim odio eu nisl. Maecenas rutrum rutrum fringilla. Duis semper vitae lorem ut commodo. Pellentesque porttitor, libero at rhoncus bibendum, est ex egestas eros, laoreet feugiat ligula leo id diam. Ut ullamcorper euismod mauris, eget fringilla diam volutpat et.

Integer facilisis pharetra massa vel commodo. Nullam tempus ac arcu eget venenatis. Vestibulum massa ante, sagittis vitae euismod sit amet, elementum ac ante. Aliquam erat volutpat. Duis venenatis blandit porta. In cursus nulla sed turpis fermentum, vel feugiat lacus semper. Duis non augue ut ipsum dictum finibus eu eu tellus. Quisque ultricies, nunc eget viverra vestibulum, eros ex laoreet erat, sed posuere purus felis nec tortor. Aenean consequat pulvinar consectetur. Suspendisse potenti. Donec dignissim ex turpis, ut sagittis turpis dictum eu. Vestibulum eu elit id mi iaculis imperdiet a vitae erat.</Heading>


      </HeadingLevel>
      <Card
      overrides={{
        Root: {
          style: {
            left: "50%",
            maxWidth: "420px",
            top: "20px",
            margin: "auto",
            transform: "translate(-50%, 0)",
            width: "95vw"
          }
        }
      }}
    ></Card>
    
   <Card></Card>   <Card></Card>
   <Card></Card>
   <Card></Card>
   <Card></Card>
   <Card></Card>
   <Card></Card>
   <Card></Card>
   <Card></Card>
   <Card></Card>
   <Card></Card>
   <Card></Card>
   <Card></Card>
   <Card></Card>
   <Card></Card>
   <Card></Card>
   <Card></Card>
   <Card></Card>
   <Card></Card>
   <Card></Card>
   <Card></Card>
   <Card></Card>
   <Card></Card>
   <Card></Card>
   <Card></Card>   <Card></Card>
   <Card></Card>
   <Card></Card>
   <Card></Card>
   <Card></Card>
   <Card></Card>
   <Card></Card>
   <Card></Card>
   <Card></Card>
   <Card></Card>
   <Card></Card>
   <Card></Card>
   <Card></Card>
   <Card></Card>
   <Card></Card>
   <Card></Card>
   <Card></Card>
   <Card></Card>
   <Card></Card>
   <Card></Card>
   <Card></Card>
   <Card></Card>
   <Card></Card>
   </div>
      </Cell>
    </Grid>
    </div>
   
    </React.Fragment>
  );
};

export default App;
