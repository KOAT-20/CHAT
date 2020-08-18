import React from 'react';
import { STabs, STab, STabList,  STabPanel } from './tabs.js';
import Search from '../Search';
import { Chats, Persons } from '../List';

export default function Tabs () {
  return (
    <STabs
      selectedTabClassName='is-selected'
      selectedTabPanelClassName='is-selected'
    >
      <STabList>
        <STab size={6}>
          <h5 style={{marginTop:'10%'}}>
            <i className="far fa-comment"></i>
          </h5>
        </STab>
        <STab size={6}>
          <h5 style={{marginTop:'10%'}}>
            <i className="far fa-user"></i>
          </h5>
        </STab>
      </STabList>
      <STabPanel>
        <Search />
        <Chats />
      </STabPanel>
      <STabPanel>
        <Persons />
      </STabPanel>
    </STabs>
  );
}
