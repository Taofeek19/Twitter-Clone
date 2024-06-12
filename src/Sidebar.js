import React from "react";
import "./Sidebar.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutLineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Button } from "@mui/icons-material/";

function Sidebar () {
return (
  <div className="sidebar">
    {/* Twitter icon*/}
    <TwitterIcon />

    <SidebarOption active Icon={HomeIcon} text="Home" />
    <SidebarOption Icon={SearchIcon} text="Explore" />
    <SidebarOption Icon={NotificationsNoneIcon} text="Notification" />
    <SidebarOption Icon={MailOutLineIcon} text="Messages" />
    <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
    <SidebarOption Icon={ListAltIcon} text="Lists" />
    <SidebarOption Icon={PermIdentityIcon} text="Profile" />
    <SidebarOption Icon={MoreHorizIcon} text="More" />


    {/* Button -> Tweet*/}
    <button variant="outlined" className="sidebar__tweet" FullWidth>Tweet

    </button>
  </div>
);
}
 
export default Sidebar


// import React from "react";
// import "./Sidebar.css";
// import TwitterIcon from "@material-ui/icons/Twitter";
// import SidebarOption from "./SidebarOption";
// import HomeIcon from "@material-ui/icons/Home";
// import SearchIcon from "@material-ui/icons/Search";
// import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
// import MailOutlineIcon from "@material-ui/icons/MailOutline";
// import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
// import ListAltIcon from "@material-ui/icons/ListAlt";
// import PermIdentityIcon from "@material-ui/icons/PermIdentity";
// import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
// import { Button } from "@material-ui/core";

// function Sidebar() {
//   return (
//     <div className="sidebar">
//       <TwitterIcon className="sidebar__twitterIcon" />

//       <SidebarOption active Icon={HomeIcon} text="Home" />
//       <SidebarOption Icon={SearchIcon} text="Explore" />
//       <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
//       <SidebarOption Icon={MailOutlineIcon} text="Messages" />
//       <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
//       <SidebarOption Icon={ListAltIcon} text="Lists" />
//       <SidebarOption Icon={PermIdentityIcon} text="Profile" />
//       <SidebarOption Icon={MoreHorizIcon} text="More" />

//       <Button variant="outlined" className="sidebar__tweet" fullWidth>
//         Tweet
//       </Button>
//     </div>
//   );
// }

// export default Sidebar;