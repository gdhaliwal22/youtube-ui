import React from "react";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "../components/ChannelRow";
// import VideoRow from "../components/VideoRow";
import "../css/SearchPage.css";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image={
          "https://yt3.ggpht.com/a/AATXAJzNvwShqAXWgyOy3UWrum4dAF49r5jH9PrrBTPiRg=s144-c-k-c0xffffffff-no-rj-mo"
        }
        channelName={"youness"}
        verified
        subs={"234K"}
        noOfVideos={300}
        description={
          "Don't forget to subscribe for more covers and tutorials !"
        }
      />
      <hr />
    </div>
  );
}

export default SearchPage;
