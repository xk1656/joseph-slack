import React, { useState, useEffect } from "react";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import SidebarOption from "./SidebarOption/SidebarOption.component";
import { useStateValue } from "../../provider/provider";
import db from "../../firebase/firebase";
import {
  InsertComment,
  Inbox,
  Drafts,
  BookmarkBorder,
  PeopleAlt,
  Apps,
  FileCopy,
  ExpandMore,
  Add,
} from "@material-ui/icons";
import "./Sidebar.styles.scss";

const Sidebar = () => {
  const [channels, setChannels] = useState([]);
  const [{ user }] = useStateValue();
  useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      )
    );
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2>Joseph Channel</h2>
          <h3>
            <FiberManualRecordIcon />
            {user?.displayName}
          </h3>
        </div>
        <CreateIcon />
      </div>

      <SidebarOption title="Thread" Icon={InsertComment} />
      <SidebarOption title="Mentions & reactions" Icon={Inbox} />
      <SidebarOption title="Saved items" Icon={Drafts} />
      <SidebarOption title="Channel browser" Icon={BookmarkBorder} />
      <SidebarOption title="People & user groups" Icon={PeopleAlt} />
      <SidebarOption title="Apps" Icon={Apps} />
      <SidebarOption title="File browser" Icon={FileCopy} />
      <hr />
      <SidebarOption title="Channels" Icon={ExpandMore} />
      <hr />
      <SidebarOption title="Add channel" addChannelOption Icon={Add} />
      {channels.map((channel) => (
        <SidebarOption title={channel.name} id={channel.id} key={channel.id} />
      ))}
    </div>
  );
};

export default Sidebar;
