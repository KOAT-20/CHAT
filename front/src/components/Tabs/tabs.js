import styled from 'styled-components';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

export const ColTab = styled.div`
  height: 100%;
  text-align: center;
  cursor: pointer;
`;

export const STabs = styled(Tabs)`
  font-family: BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 12px;
  width: 100%;
`;

export const STabList = styled(TabList)`
  ${'' /* border: solid red 1px; */}
  list-style-type: none;
  display: flex;
  margin: 0;
  height: 60px;
  background-color: #2979FF;
`;
STabList.tabsRole = 'TabList';

export const STab = styled(Tab)`
  ${'' /* border: solid black 1px; */}
  text-align: center;
  user-select: none;
  cursor: pointer;
  margin-right: 10px;
  margin-left: 0;

  &.is-selected {
    // color: white;
    // background: black;
    border-bottom: 2px solid #FFFFFF;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 0, 255, 0)
  }
  flex: ${(props) => props.size}
`;
STab.tabsRole = 'Tab';

export const STabPanel = styled(TabPanel)`
  display: none;
  height: 85vh;
  padding: 5px;

  &.is-selected {
    display: block;
  }
`;
STabPanel.tabsRole = 'TabPanel';
