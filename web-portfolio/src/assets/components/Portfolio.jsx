import React, { useState } from "react";

const Portfolio = () => {
  const [selectedBox, setSelectedBox] = useState(null);

  const handleClick = (box) => {
    setSelectedBox(box);
  };

  const handleBack = () => {
    setSelectedBox(null);
  };

  const boxes = [
    { 
      id: 1, 
      label1: "Creative", 
      label2: "Portfolio", 
      title: "50+", 
      caption:"Total Design", 
      title2: "", 
      caption2:"", 
      content: "I have been responsible for coordinating divisions with the chairperson and other divisions, managing four internal divisions, and overseeing content planning for events through a social media calendar. Additionally, I have developed event websites, managed social media platforms like Instagram and TikTok, created content writing, and generated ideas for social media and event content, implementing them effectively. I have also handled event documentation publication, ideated and executed designs for social media and event needs (e.g., banners, certificates), and ensured the timely production of after-movies within 24 hours.",
      src: "/img/creative.png",
      tools1: "/img/creative/c-tools1.png",
      tools2: "/img/creative/c-tools2.png",
      tools3: "/img/creative/c-tools3.png",
      tools4: "/img/creative/c-tools4.png",
      tools5: "/img/creative/c-tools5.png"
    },
    { 
      id: 2, 
      label1: "Social Media", 
      label2: "Portfolio", 
      title: "140++", 
      caption:"Total Brief", 
      title2: "5", 
      caption2:"Brands", 
      content: "I have managed social media platforms, overseen posting schedules, and crafted engaging captions. I was responsible for planning content for five local brands, generating creative content ideas, and ensuring a surplus of content resources. Additionally, I have created over 140 briefs and visual copy content, as well as developed comprehensive content calendars to support effective social media strategies.", 
      src: "/img/socmed.png",
      tools1: "/img/social-media/sm-tools1.png",
      tools2: "/img/social-media/sm-tools2.png",
      tools3: "/img/social-media/sm-tools3.png",
      tools4: "/img/social-media/sm-tools4.png",
      tools5: "/img/social-media/sm-tools5.png",
    },
    { 
      id: 3, 
      label1: "UI/UX Designer", 
      label2: "Portfolio", 
      title: "MySkill", 
      caption:"Certificated", 
      title2: "", 
      caption2:"", 
      content: "I am a certified UI/UX designer with skills gained through a comprehensive bootcamp program, currently at an intermediate level. My expertise includes user research, wireframing, prototyping, and designing user interfaces that prioritize functionality and aesthetics. While I am continuously improving my skills, I have a solid understanding of creating user-centered designs and applying industry-standard tools and practices to enhance the digital experience.", 
      src: "/img/uiux.png",
      tools1: "/img/uiux/u-tools1.png",
    },
    { 
      id: 4, 
      label1: "Frontend Dev", 
      label2: "Portfolio", 
      title: "Ex-Intern", 
      caption:"PT. Sarana Pactindo", 
      title2: "", 
      caption2:"", 
      content: "I had the opportunity to work on developing admin websites for a banking system and an internet provider, where I was responsible for ensuring functionality, usability, and seamless integration of features. Over the course of six months, I successfully completed two major projects, demonstrating strong time management and technical skills. My efforts and commitment to delivering high-quality results were recognized, earning me a final grade of A for the projects. This experience not only strengthened my technical expertise but also enhanced my ability to manage complex tasks efficiently.", 
      src: "/img/fe.png",
      tools1: "/img/fe-dev/fe-tools1.png",
      tools2: "/img/fe-dev/fe-tools2.png",
      tools3: "/img/fe-dev/fe-tools3.png",
      tools4: "/img/fe-dev/fe-tools4.png",
      tools5: "/img/fe-dev/fe-tools5.png",
      tools6: "/img/fe-dev/fe-tools6.png",        
    },
  ];

  return (
    <div className=' h-[490px] px-36 grid grid-cols-4 gap-4'>
      {/* Bagian Kiri */}
        {selectedBox === null ? (
          boxes.map((box) => (
            <div
              key={box.id}
              className="border border-aksen rounded my-auto flex flex-col h-80 bg-card p-4 hover:h-[430px] hover:bg-cardHover transition-all duration-500"
              onClick={() => handleClick(box)}
            >
                <div className="triangle-up mx-auto"></div>
                <div className="group relative flex-1 flex flex-col items-center justify-center font-mulish font-bold text-3xl text-text">
                    <div className="absolute transition-opacity duration-200 opacity-100 group-hover:opacity-0">
                        <p className="text-aksen">{box.label1}</p>
                        <p>{box.label2}</p>
                    </div>

                    <div className="absolute transition-opacity duration-200 opacity-0 group-hover:opacity-100">
                    <div className='flex flex-col gap-5'>
                            <div>
                                <p className='font-ovo text-4xl'>{box.title}</p>
                                <p className='font-mulish font-medium text-sm'>{box.caption}</p>
                            </div>
                            <div className='w-20 border border-aksen mx-auto'></div>
                            <div>
                                <p className='font-ovo text-4xl'>{box.title2}</p>
                                <p className='font-mulish font-medium text-sm'>{box.caption2}</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="triangle-down mx-auto"></div>
            </div>
          ))
        ) : (
          <div className="flex flex-col gap-4 my-auto">
            <div className="border border-aksen rounded flex flex-col bg-cardHover p-4 h-80">
            <div className="triangle-up mx-auto"></div>
              <div className="relative flex-1 flex flex-col items-center justify-center font-mulish font-bold text-3xl text-text">
                <p className="text-aksen">{selectedBox.label1}</p>
                <p>{selectedBox.label2}</p>
            </div>
            <div className="triangle-down mx-auto"></div>
            </div>
            <button
              className="px-4 py-2 bg-aksen text-text font-mulish rounded"
              onClick={handleBack}
            >
              Back
            </button>
          </div>
        )}

      {/* Bagian Kanan */}
      {selectedBox !== null && (
        <div className="flex-1 col-span-3 text-text ml-5 my-auto text-start font-mulish">
          <h2 className="text-xl font-bold mb-4">{selectedBox.label1} Projects</h2>
          <div className="flex flex-col-3 text-text text-justify gap-4">
            <img src={selectedBox.src} className="max-h-[340px]" />
            <div className="flex flex-col gap-3">
              <p>{selectedBox.content}</p>
              <p className="font-bold">Tech I Use : </p>
              <div className="flex gap-2">
                <img src={selectedBox.tools1} className="w-10 h-10 rounded"/>
                <img src={selectedBox.tools2} className="w-10 h-10 rounded" style={{ display: selectedBox.tools2 ? "block" : "none" }}/>
                <img src={selectedBox.tools3} className="w-10 h-10 rounded" style={{ display: selectedBox.tools3 ? "block" : "none" }}/>
                <img src={selectedBox.tools4} className="w-10 h-10 rounded" style={{ display: selectedBox.tools4 ? "block" : "none" }}/>
                <img src={selectedBox.tools5} className="w-10 h-10 rounded" style={{ display: selectedBox.tools5 ? "block" : "none" }}/>
                <img src={selectedBox.tools6} className="w-10 h-10 rounded" style={{ display: selectedBox.tools6 ? "block" : "none" }}/>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
