"use client";
import React, { useEffect } from 'react'
import {useInView} from "react-intersection-observer"
import { experiencesData } from "@/lib/data";
import SectionHeading from './section-heading'
import { VerticalTimeline, VerticalTimelineElement }  from "react-vertical-timeline-component";
import { useActiveSectionContext } from "@/context/active-section-context";
import "react-vertical-timeline-component/style.min.css";



export default function Experience() {
  const {ref, inView} = useInView({
    threshold:0.5,
  });
  const {setActiveSection, timeOfLastClick} = useActiveSectionContext();
    
  useEffect(() => {
    if(inView&& Date.now() - timeOfLastClick>1000) {
      setActiveSection("Expériences")
    }
  }, [inView, setActiveSection, timeOfLastClick])
  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28" >
        <SectionHeading>Mes expériences</SectionHeading>
        <VerticalTimeline lineColor="">
            {experiencesData.map((item, index) => (
                        <VerticalTimelineElement key={index} visible={inView} 
                        contentStyle={{
                          background: "#f3f4f6",
                          boxShadow : "none",
                          border: "1px solid rgba(0,0,0,0.05)",
                          textAlign:"left",
                          padding:"1.3rem 2rem"
                        }}
                        contentArrowStyle={{
                          borderRight: "0.4rem solid #9ca3af"
                        }}
                        date={item.date}
                        icon={item.icon}
                        iconStyle={{
                          background: "white",
                          fontSize: "1.5rem",

                        }}
                        >
                            <h3 className="font-semibold capitalize"> {item.title} </h3>
                            <p className="font-normal !mt-0"> {item.location} </p>
                            <p className="!mt-1 !font-normal text-gray-700"> {item.description} </p>

                        </VerticalTimelineElement>
                ))
            }
        </VerticalTimeline>
    </section>

  )
}
