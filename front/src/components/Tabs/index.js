import React from 'react';
import { STabs, STab, STabList,  STabPanel } from './tabs.js';

export default function Tabs () {
  return (
    <STabs
      selectedTabClassName='is-selected'
      selectedTabPanelClassName='is-selected'
    >
      <STabList>
        <STab size={6}>
          <h5 style={{marginTop:'10%'}}>
            <i class="far fa-comment"></i>
          </h5>
        </STab>
        <STab size={6}>
          <h5 style={{marginTop:'10%'}}>
            <i class="far fa-user"></i>
          </h5>
        </STab>
      </STabList>
      <STabPanel>Panel 1</STabPanel>
      <STabPanel>Panel 2</STabPanel>
    </STabs>
  );
}
