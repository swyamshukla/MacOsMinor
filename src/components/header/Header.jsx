import React, { useState } from "react";
import "./Header.css";

{
  /* <div class="menu-apple hidden">
<ul>
<li id="aboutMac">About This Mac</li>
<li>System Settings...</li>
<li>App Store</li>
<li class="divider"></li>
<li>Recent Items </li>
<li class="divider"></li>
<li>Force Quit Finder</li>
<li class="divider"></li>
<li>Sleep</li>
<li>Restart...</li>
<li id="shut">Shut Down...</li>
<li class="divider"></li>
<li>Lock Screen</li>
<li>Log Out swyam shukla...</li>
</ul>
</div> */
}

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  let menuItems = [
    {
      name: <i className="ri-apple-fill"></i>,
      subMenu: [
        "About This Mac",
        "System Settings...",
        "App Store",
        "Recent Items",
        "Force Quit Finder",
        "Sleep",
        "Restart...",
        "Shut Down...",
        "Lock Screen",
        "Log Out swyam shukla...",
      ],
    },
    {
      name: "Finder",
      subMenu: [
  "About Finder",
  "Settings...",
  "Empty Bin...",
  "Services",
  "Hide Finder",
  "Hide Others",
  "Show All"
],
    },
    {
      name: "File",
      subMenu: [
  "New Finder Window",
  "New Folder",
  "New Folder with Selection",
  "New Smart Folder",
  "New Tab",
  "Open",
  "Open With",
  "Close Window",
  "Get Info",
  "Rename",
  "Compress",
  "Duplicate",
  "Make Alias",
  "Quick Look",
  "Print",
  "Share...",
  "Show Original",
  "Add to Dock",
  "Move to Bin",
  "Eject",
  "Tags..."
],
    },
    {
      name: "View",
      subMenu: [
  "Undo Rarama",
  "Retdo",
  "Cut",
  "Copy",
  "Paste",
  "Select All",
  "Show Clipboard",
  "AutoFill",
  "Start Dictation",
  "Emoji & Symbols"
],
    },
    {
      name: "Go",
      subMenu:[
  "as icons",
  "as List",
  "as Columns",
  "as Gallery",
  "Use Stacks",
  "Group Stacks By",
  "Clean Up",
  "Clean Up By",
  "Hide Tab Bar",
  "Show All Tabs",
  "Hide Sidebar",
  "Hide Preview",
  "Hide Toolbar",
  "Hide Path Bar",
  "Hide Status Bar",
  "Customise Toolbar...",
  "Show View Options",
  "Show Preview Options",
  "Enter Full Screen"
],
    },
    {
      name: "Window",
      subMenu: [
  "Back",
  "Forward",
  "Select Startup Disk",
  "Recents",
  "Documents",
  "Desktop",
  "Downloads",
  "Home",
  "Computer",
  "AirDrop",
  "Network",
  "Cloud Drive",
  "Shared",
  "Applications",
  "Utilities",
  "Recent Folders",
  "Go to Folder...",
  "Connect to Server..."
],
    },
    {
      name: "Help",
      subMenu: [
  "Minimise",
  "Zoom",
  "Fill",
  "Carrier",
  "Move & Restore",
  "Full-Screen Tile",
  "Remove Window from Set",
  "Cycle Through Windows",
  "Show Progress Window",
  "Bring All to Front",
  "Show Previous Tab",
  "Show Next Tab",
  "Move Tab to New Window",
  "Merge All Windows"
],
    },
  ];
  return (
    <nav className="apple-font">
      <div className="left-nav">
        {menuItems.map((items, idx) => {
          return (
            <li
              key={idx}
              onMouseEnter={() => setOpenDropdown(idx)}
              onMouseLeave={() => setOpenDropdown(null)}
              className="dropdown"
            >
              {items.name}
              {openDropdown === idx && (
                <ul className="dropdown-menu">
                  {items.subMenu.map((subItem, subIndex) => <div>
<li key={subIndex}>{subItem}</li>
<div className="line"></div>
                  </div>
                    
                    
                  )}
                </ul>
              )}
            </li>
          );
        })}
      </div>

      <div className="right-nav">
        <h5>
          <i className="ri-battery-fill"></i>
        </h5>
        <h5>
          <i className="ri-wifi-off-fill"></i>
        </h5>
        <h5>
          <i className="ri-search-line"></i>
        </h5>
        <h5>
          <i className="ri-toggle-line"></i>
        </h5>
        <h5 id="current-date"></h5>
        <h5 id="current-time"></h5>
      </div>
    </nav>
  );
};

export default Header;
