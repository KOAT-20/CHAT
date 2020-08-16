import React from 'react';
import { STabs, STab, STabList,  STabPanel } from './tabs.js';

export default function Tabs () {
  return (
    <STabs
      selectedTabClassName='is-selected'
      selectedTabPanelClassName='is-selected'
    >
      <STabList>
        <STab size={4}>
          <h5 style={{marginTop:'10%'}}>
            Tab 1
          </h5>
        </STab>
        <STab size={4}>
          <h5 style={{marginTop:'10%'}}>
            Tab 2
          </h5>
        </STab>
        <STab size={4}>
          <h5 style={{marginTop:'10%'}}>
            Tab 3
          </h5>
        </STab>
      </STabList>
      <STabPanel>Panel 1</STabPanel>
      <STabPanel>Panel 2</STabPanel>
      <STabPanel>Panel 3</STabPanel>
    </STabs>
  );
}
