import React from 'react';
import Header from '../Components/Header/Header';
import {Wrapper} from './page.style';

const Experience = () => {
    const dataExperience = [
        {
          title1: 'SENIOR WEB DEVELOPER',
          title2: 'INTELITEC SOLUTIONS',
          date: 'March 2013 - Present',
          deskripsi: 'Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.',
        },
        {
            title1: 'WEB DEVELOPER',
            title2: 'INTELITEC SOLUTIONS',
            date: 'December 2011 - March 2013',
            deskripsi: 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.',
        },
        {
            title1: 'JUNIOR WEB DESIGNER',
            title2: 'SHOUT! MEDIA PRODUCTIONS',
            date: 'July 2010 - December 2011',
            deskripsi: 'Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.',
        },
        {
            title1: 'WEB DESIGN INTERN',
            title2: 'SHOUT! MEDIA PRODUCTIONS',
            date: 'September 2008 - June 2010',
            deskripsi: 'Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.',
        },
      ]

    return(
        <div>
            <Header head="EXPERIENCE" />
            <br/>
            <Wrapper>
            {
                dataExperience.map((item) => (
                            <>
                                <b>{item.title1}</b><br />
                                <b>{item.title2}</b><br />
                                {item.date}<br />
                                <p>{item.deskripsi}</p>
                                <br></br>
                            </>

                ))
            }
            </Wrapper>
        </div>
    )
};

export default Experience;