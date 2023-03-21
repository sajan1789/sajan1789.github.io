

import React from "react";

import "../CssPages/Stats.css"

const Stats = () => {
  return (
    <div className="Stats" data-aos="fade-up"
    data-aos-offset="-100"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center" >
         <h1>Github Stats</h1>
      <div   className="StatsChild1">
        <a href="https://github.com/sajan1789">
          <img id="github-streak-stats"
            align="left"
            src="https://github-readme-streak-stats.herokuapp.com?user=sajan1789&theme=radical"
          />
        </a>
        <a href="https://github.com/sajan1789">
          <img id="github-stats-card"
            align="left"
            src="https://github-readme-stats.vercel.app/api?username=sajan1789&theme=radical&count_private=true&show_icons=true" //stats
          />
        </a>
        
      </div>
 
      <div className="StatsChild2">
        <a href="https://github.com/sajan1789">  
          <img id="github-top-langs"
            align="center"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=sajan1789&theme=radical"  //launguages
          />
        </a>
       
      </div>
    </div>
  );
};

export default Stats;
