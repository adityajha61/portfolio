import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'

import 'react-vertical-timeline-component/style.min.css'
import { School,Work } from '@mui/icons-material'
function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='violet'>
        <VerticalTimelineElement className='vertical-timeline-element--education' 
        date='2016 - 2018'
        iconStyle={{background:"violet",color: "#fff"}}
        icon={<School />}
        >
          <h3 className='vertical-timeline-element-title'>
            St. Thomas Church School 
          </h3>
          <p>High School</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education' 
        date='2018 - 2022'
        iconStyle={{background:"violet",color: "#fff"}}
        icon={<School />}
        >
          <h3 className='vertical-timeline-element-title'>
            Jadavpur University 
          </h3>
          <p>Bachelor in Engineering</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--work' 
        date='2022 Jan - 2022 June'
        iconStyle={{background:"black",color: "#fff"}}
        icon={<Work />}
        >
          <h3 className='vertical-timeline-element-title'>
            PayU
          </h3>
          <p><b>Intern  </b>Software Engineer Intern</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--work' 
        date='2022 July - Present'
        iconStyle={{background:"black",color: "#fff"}}
        icon={<Work />}
        >
          <h3 className='vertical-timeline-element-title'>
            PayU
          </h3>
          <p><i>Associate Software Engineer</i></p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience
