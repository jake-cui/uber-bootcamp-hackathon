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

  return (
    <React.Fragment>
       <AppNavBar 
      title={<img src={logo} style={{height:45}}></img>}
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
            marginBottom: "scale100",
            zIndex: 100
          },
        },
        MainMenuItem: {
          style: {
            color: "white"
          }
        }
      }}
      
    />
{/* second one */}
    <div style={{height:100}}></div>
   <div > 
   <Grid >
      <Cell span={2}><Navigation
      items={[
        {
          title: "Colors",
          itemId: "#colors",
          subNav: [
            { title: "Primary", itemId: "#primary" },
            {
              title: "Shades",
              itemId: "#shades",
              subNav: [
                { title: "Dark", itemId: "#dark" },
                {
                  title: "Disabled",
                  itemId: "#disabled",
                  disabled: true
                }
              ]
            }
          ]
        }
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
    /></Cell>
      <Cell span={10}>
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
    >
      <StyledBody>
        <Input
          ref={passwordRef}
          value={password}
          onChange={event => setNewPassword(event.target.value)}
          overrides={{
            InputContainer: {
              style: ({ $theme }) => ({
                borderColor: $theme.colors[getStrengthColor(strength)],
                borderWidth: $theme.sizing.scale100
              })
            },
            After: () => (
              <Button
                kind={KIND.minimal}
                shape={SHAPE.square}
                onClick={() => setNewPassword()}
              >
                <svg
                  className={useCss({
                    height: theme.sizing.scale800,
                    width: theme.sizing.scale800
                  })}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#aaaaaa"
                    d="M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z"
                  />
                </svg>
              </Button>
            )
          }}
        />
      </StyledBody>
      <StyledAction>
        <div className={useCss({ marginBottom: theme.sizing.scale800 })}>
          <Button
            onClick={copyToClipboard}
            overrides={{
              BaseButton: {
                style: () => ({
                  width: "100%"
                })
              }
            }}
          >
            {copied ? "Copied" : "Copy"}
          </Button>
        </div>
        <Accordion>
          <Panel title="Options">
            <Block marginBottom="scale800">
              <FormControl label="Length">
                <Slider
                  min={4}
                  max={64}
                  value={[length]}
                  onChange={({ value }) => setLength(value[0])}
                />
              </FormControl>
            </Block>
            <Block>
              <FormControl label="Characters">
                <div>
                  <Checkbox
                    checked={uppercase}
                    onChange={() => setUppercase(!uppercase)}
                  >
                    A-Z
                  </Checkbox>
                  <Checkbox
                    checked={numbers}
                    onChange={() => setNumbers(!numbers)}
                  >
                    0-9
                  </Checkbox>
                  <Checkbox
                    checked={symbols}
                    onChange={() => setSymbols(!symbols)}
                  >
                    %@#
                  </Checkbox>
                </div>
              </FormControl>
            </Block>
          </Panel>
        </Accordion>
      </StyledAction>
    </Card>
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

      </Cell>
    </Grid>
    </div>
   
    </React.Fragment>
  );
};

export default App;
