
import { useEffect, useRef, useState } from 'react';
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import { FiArrowUpRight } from "react-icons/fi";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { BsTypescript } from "react-icons/bs";
import { BiLogoBlender } from "react-icons/bi";
import { FaPlus } from "react-icons/fa6";
import { PiShapesLight } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Lenis from 'lenis';
import { useGSAP } from '@gsap/react';
import { SiGsap } from "react-icons/si";
import { RiVercelLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoNetlify } from "react-icons/bi";
import { FiFigma } from "react-icons/fi";
import { SiMysql } from "react-icons/si";

const H = () => {

  const lenisRef = useRef(null);
  const containerRef = useRef(null);
  const answerCardRef = useRef(null);
  const prevAnswerCardRef = useRef(null);
  const answerElementsRef = useRef([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    // 20ms per increment = 2 seconds to reach 100
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    // Cleanup interval when component unmounts
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      smoothTouch: true,
      touchMultiplier: 1.5,
      wheelMultiplier: 1.2,
    });

    lenisRef.current = lenis;

    // Sync with GSAP
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    lenis.on('scroll', ScrollTrigger.update);

    // Optional: arrow keys smooth scroll
    const handleKeyDown = (e) => {
      const scrollAmount = window.innerHeight * 0.8;
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        lenis.scrollTo(window.scrollY + scrollAmount, { duration: 1.5 });
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        lenis.scrollTo(window.scrollY - scrollAmount, { duration: 1.5 });
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const scrollToPercent = (percent) => {
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const target = (percent / 100) * totalHeight;
    lenisRef.current?.scrollTo(target, { duration: 1.5 }); // Added duration for smooth transition
  };

  const cardSwipe = (key) => {
    const selected = answerElementsRef.current[key];
    if (!selected) return;
    prevAnswerCardRef.current = answerCardRef.current;
    answerCardRef.current = selected;

    // Reset all other cards to original scale (1)
    answerElementsRef.current.forEach((el) => {
    if (el !== selected && el !== prevAnswerCardRef.current) {
      gsap.to(el, {
        x: 0,
        zIndex: 0,
        duration: 0.3,
        ease: 'power2.out'
      });
    }
  });

    // Animate the selected card with a pop effect to a scale slightly above 1
    const tl = gsap.timeline();
  tl
    .to(selected, { transformOrigin:'left', rotate:-45, x: -100, duration: 0.5, ease: 'power2.out' })
    .set(selected, { zIndex: 3 })
    .set(prevAnswerCardRef.current, { zIndex: 2 })
    .to(selected, { rotate:0, x: 0, duration: 0.5, ease: 'power2.out' })
    
};


  const projectsArr = [
    {
      p1:'/sienaProjectPic.jpg',
      p1name:'Animated Website',
      p1Needs:'High performance cinematic website experience',
      url1:'https://sienafilmfoundationproject.netlify.app/',
      p2:'/3dVideoPic.jpg',
      p2name:'3D Video',
      p2Needs:'Dynamic animation in Blender',
      url2:'/animation1.mp4'
    },
    {
      p1:'/p3-19.webp',
      p1name:'Job Portal App',
      p1Needs:'Streamlined job search and hiring',
      url1:'https://github.com/hamzajutt333777-bit/Job_Portal_Project',
      p2:'/productAdPic.jpg',
      p2name:'Product Ad',
      p2Needs:'Engaging digital product promotion video',
      url2:'https://lampad.netlify.app/',
    },
  ]
  const skillsArr = [
    {
      skillName:'React JS',
      skillImg: FaReact,
      skillDescription:'I build fast, interactive UIs using React component architecture and smooth animations.',
    },
    {
      skillName:'Next JS',
      skillImg: SiNextdotjs,
      skillDescription:'I develop full-stack web apps with Next.js server-side rendering and seamless routing.',
    },
    {
      skillName:'Blender',
      skillImg: BsTypescript,
      skillDescription:'I craft striking 3D animations and product visualizations that enhance brand storytelling.',
    },
    {
      skillName:'Typescript',
      skillImg: BiLogoBlender,
      skillDescription:'I write type-safe, maintainable code with TypeScript to ensure early error prevention.',
    },
    {
      skillName:'React JS',
      skillImg: FaReact,
      skillDescription:'I build fast, interactive UIs using React component architecture and smooth animations.',
    },
    {
      skillName:'Next JS',
      skillImg: SiNextdotjs,
      skillDescription:'I develop full-stack web apps with Next.js server-side rendering and seamless routing.',
    },
    {
      skillName:'Blender',
      skillImg: BsTypescript,
      skillDescription:'I craft striking 3D animations and product visualizations that enhance brand storytelling.',
    },
    {
      skillName:'Typescript',
      skillImg: BiLogoBlender,
      skillDescription:'I write type-safe, maintainable code with TypeScript to ensure early error prevention.',
    },
    {
      skillName:'React JS',
      skillImg: FaReact,
      skillDescription:'I build fast, interactive UIs using React component architecture and smooth animations.',
    },
    {
      skillName:'Next JS',
      skillImg: SiNextdotjs,
      skillDescription:'I develop full-stack web apps with Next.js server-side rendering and seamless routing.',
    },
    {
      skillName:'Blender',
      skillImg: BsTypescript,
      skillDescription:'I craft striking 3D animations and product visualizations that enhance brand storytelling.',
    },
    {
      skillName:'Typescript',
      skillImg: BiLogoBlender,
      skillDescription:'I write type-safe, maintainable code with TypeScript to ensure early error prevention.',
    }
  ]

  const toolsArr2 = [{toolName:SiGsap},{toolName:FiFigma},{toolName:SiMysql},{toolName:RiTailwindCssFill},{toolName:RiVercelLine},{toolName:BiLogoNetlify},
  ]

  const questions = [
    {
      qno:'01',
      question:'What is your development approach when starting a new project?',
      answer:'I start by defining goals, mapping the tech stack, building the backend, and then crafting the animated frontend.'
    },
    {
      qno:'02',
      question:'What are you currently learning to enhance your technical skills',
      answer:'I am currently advancing my 3D animation expertise in Blender and strengthening my backend architecture and database optimization skills.'
    },
    {
      qno:'03',
      question:'What is your primary target to achieve by next year',
      answer:'My target is to masterfully create fully immersive, 3D animated full-stack websites and compelling product advertisement campaigns.'
    },
    {
      qno:'04',
      question:'How do you make a 3D animated ad for a client?',
      answer:'I simply listen to their ideas, build the animation in Blender, and then add it to their website.'
    },
    {
      qno:'05',
      question:'What are your biggest strengths and weaknesses?',
      answer:'My strength is creative problem-solving. My weakness is playing games too often, but I am learning to manage time.'
    },
  ]

  const bgColors = [
  'bg-black/100',
  'bg-black/100',
  'bg-black/100',
  'bg-black/100',
  'bg-black/100',
];

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function () {
    // const stairsDiv = gsap.timeline();
    // stairsDiv.to('.stairs', {
    //   y:'-40rem',
    //   delay:2.5,
    //   ease:'power2.inOut',
    //   duration:1.5,
    //   stagger:{
    //     amount:1
    //   }
    // },'a')
    gsap.to('.counterDiv', {opacity:0, duration:1, delay:2, ease:'power2'})
    // stairsDiv.to('.stairsContainer', {display:'none'})

    let mm = gsap.matchMedia();

// 1. Mobile (Phones: up to 767px)
mm.add("(max-width: 767px)", () => {
  // Put your mobile-specific GSAP animation here
  gsap.to('.firstDiv', {
    scrollTrigger: {
      trigger: '.helpPage',
      pin: '.firstDiv',
      start: 'top 0%',
      end: 'top -319%',
    },
  });

  gsap.to('.helpCard1', {
    scrollTrigger: {
      trigger: '.helpPage',
      pin: '.helpCard1',
      start: 'top -78%',
      end: 'top -319%',
      scrub: true
    },
  });

  gsap.to('.helpCard2', {
    scrollTrigger: {
      trigger: '.helpPage',
      pin: '.helpCard2',
      start: 'top -158.3%',
      end: 'top -319%',
    },
  });

  gsap.to('.helpCard3', {
    scrollTrigger: {
      trigger: '.helpPage',
      pin: '.helpCard3',
      start: 'top -238.5%',
      end: 'top -319%',
    },
  });

  gsap.to('.helpCard4', {
    scrollTrigger: {
      trigger: '.helpPage',
      pin: '.helpCard4',
      start: 'top -319%',
      end: 'top -319%',
    },
  });
});

// 2. Tablet (768px to 1024px)
mm.add("(min-width: 768px) and (max-width: 1024px)", () => {
  // Put your tablet-specific GSAP animation here
  gsap.to('.firstDiv', {
    scrollTrigger: {
      trigger: '.helpPage',
      pin: '.firstDiv',
      start: 'top 0%',
      end: 'top -319%',
    },
  });

  gsap.to('.helpCard1', {
    scrollTrigger: {
      trigger: '.helpPage',
      pin: '.helpCard1',
      start: 'top -78%',
      end: 'top -319%',
      scrub: true
    },
  });

  gsap.to('.helpCard2', {
    scrollTrigger: {
      trigger: '.helpPage',
      pin: '.helpCard2',
      start: 'top -158.3%',
      end: 'top -319%',
    },
  });

  gsap.to('.helpCard3', {
    scrollTrigger: {
      trigger: '.helpPage',
      pin: '.helpCard3',
      start: 'top -238.5%',
      end: 'top -319%',
    },
  });

  gsap.to('.helpCard4', {
    scrollTrigger: {
      trigger: '.helpPage',
      pin: '.helpCard4',
      start: 'top -319%',
      end: 'top -319%',
    },
  });
});

// 3. Laptop / Desktop (1025px and above)
mm.add("(min-width: 1025px)", () => {
  // Put your desktop animations here (your complete card sequence)
  gsap.to('.firstDiv', {
    scrollTrigger: {
      trigger: '.helpPage',
      pin: '.firstDiv',
      start: 'top 0%',
      end: 'top -319%',
    },
  });

  gsap.to('.helpCard1', {
    scrollTrigger: {
      trigger: '.helpPage',
      pin: '.helpCard1',
      start: 'top -78%',
      end: 'top -319%',
      scrub: true
    },
  });

  gsap.to('.helpCard2', {
    scrollTrigger: {
      trigger: '.helpPage',
      pin: '.helpCard2',
      start: 'top -158.3%',
      end: 'top -319%',
    },
  });

  gsap.to('.helpCard3', {
    scrollTrigger: {
      trigger: '.helpPage',
      pin: '.helpCard3',
      start: 'top -238.5%',
      end: 'top -319%',
    },
  });

  gsap.to('.helpCard4', {
    scrollTrigger: {
      trigger: '.helpPage',
      pin: '.helpCard4',
      start: 'top -319%',
      end: 'top -319%',
    },
  });
});

    // gsap.to('.firstDiv', {
    //   scrollTrigger: {
    //     trigger: '.helpPage',
    //     pin: '.firstDiv',
    //     start: 'top 0%',
    //     // markers:true,
    //     end: 'top -319%',
    //   },
    // })
    // gsap.to('.helpCard1', {
    //   scrollTrigger: {
    //     trigger: '.helpPage',
    //     pin: '.helpCard1',
    //     start: 'top -78%',
    //     // markers:true,
    //     end: 'top -319%',
    //     scrub:true
    //   },
    // })
    // gsap.to('.helpCard2', {
    //   scrollTrigger: {
    //     trigger: '.helpPage',
    //     pin: '.helpCard2',
    //     start: 'top -158.3%',
    //     // markers:true,
    //     end: 'top -319%',
    //   },
    // })
    // gsap.to('.helpCard3', {
    //   scrollTrigger: {
    //     trigger: '.helpPage',
    //     pin: '.helpCard3',
    //     start: 'top -238.5%',
    //     // markers:true,
    //     end: 'top -319%',
    //   },
    // })
    // gsap.to('.helpCard4', {
    //   scrollTrigger: {
    //     trigger: '.helpPage',
    //     pin: '.helpCard4',
    //     start: 'top -319%',
    //     // markers:true,
    //     end: 'top -319%',
    //   },
    // })


//     gsap.fromTo('.helpCard1',
//   { rotate: 40 }, // 👈 set your original CSS rotation value here
//   {
//     rotate: 0,
//     ease: 'none',
//     scrollTrigger: {
//       trigger: '.helpCard1',
//       start: 'top 120%',
//       end: 'top 15%',
//       scrub: true
//     }
//   }
// );

// gsap.fromTo('.helpCard2',
//   { rotate: -40 },
//   {
//     rotate: 0,
//     ease: 'none',
//     scrollTrigger: {
//       trigger: '.helpCard2',
//       start: 'top 120%',
//       end: 'top 25%',
//       scrub: true
//     }
//   }
// );

// gsap.fromTo('.helpCard3',
//   { rotate: 40 },
//   {
//     rotate: 0,
//     ease: 'none',
//     scrollTrigger: {
//       trigger: '.helpCard3',
//       start: 'top 120%',
//       end: 'top 25%',
//       scrub: true
//     }
//   }
// );

// gsap.fromTo('.helpCard4',
//   { rotate: -40 },
//   {
//     rotate: 0,
//     ease: 'none',
//     scrollTrigger: {
//       trigger: '.helpCard4',
//       start: 'top 120%',
//       end: 'top 25%',
//       scrub: true
//     }
//   }
// );
      gsap.to(containerRef.current, {x:'-100rem',ease:'none', duration:40, repeat:-1, yoyo:true})


  })


  return (
    <div className='potfolio relative w-[80rem] min-h-[39.82rem] bg-black overflow-hidden text-white'>
      <div className="stairsContainer fixed inset-0 z-50 h-screen w-screen flex flex-col items-center justify-center bg-transparent text-white">
        <div className=' absolute top-0 left-0 h-full w-full bg-transparent flex pointer-events-none'>
          <div className='stairs h-full w-1/4 bg-black'></div>
          <div className='stairs h-full w-1/4 bg-black'></div>
          <div className='stairs h-full w-1/4 bg-black'></div>
          <div className='stairs h-full w-1/4 bg-black'></div>
        </div>
        <h1 className="counterDiv text-[15rem] font-extrabold font-mono translate-x-[2rem]">{count}<span className='text-red-600 font-light text-[10rem]'>%</span></h1>
      </div>
      <div className='nav fixed z-10 top-12 left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-full backdrop-blur-[0.1rem] border-gray-500/30 border-[1px] h-12 w-[32rem] flex overflow-hidden bg-gray-400/20'
        data-lenis-prevent
      >
        <div className='navPart1 h-full w-1/2 flex items-center justify-start gap-2'>
          <div className='translate-x-2 h-[80%] w-[14%] rounded-full bg-white overflow-hidden'>
            <img className='h-full w-full object-cover' src="/instaPotfolioPic.jpg" alt="" />
          </div>
          <h1 onClick={() => scrollToPercent(0)} className='translate-x-2 font-bold text-3xl hover:text-red-600 transition-all'>HK.</h1>
        </div>

        <div className='h-full w-1/2 flex items-center justify-center gap-4 font-semibold text-[1.1rem]'>
          {/* ✅ Added onClick handlers */}
          <h1 
            onClick={() => scrollToPercent(9.5)} 
            className='hover:text-red-600 transition-all cursor-pointer'
          >
            Projects
          </h1>
          <h1 
            onClick={() => scrollToPercent(82)} 
            className='hover:text-red-600 transition-all cursor-pointer'
          >
            About
          </h1>
          <div className='h-8 w-20 bg-red-600 flex items-center justify-center rounded-full hover:bg-white hover:text-red-600 transition-all'>
            <h1 
              onClick={() => scrollToPercent(100)} 
              className='cursor-pointer'
            >
              Contact
            </h1>
          </div>
        </div>
      </div>
      <div className='homePart border-b-[1px] border-white/20 bg-red- h-[39.82rem] w-[80rem] flex flex-col items-center justify-center leading-[11.2rem] tracking-[-1.3rem] bg-red-'>
        <h1 className='uppercase text-[18rem] font-semibold text-white translate-y-[2rem]'>think</h1>
        <h1 className='uppercase text-[14rem] font-semibold tracking-[-0.1rem] translate-y-[2rem] text-red-600'>creatively</h1>
        <div className='paragraphDiv h-[16%] w-[80%] bg-red- translate-y-[3rem] tracking-[0.05rem] leading-[1.8rem] text-[1.5rem] font- flex items-center justify-between font-medium '>
          <p>I can Help Brands Turn <br/>Ideas Into Structured <br/>Meaningful Experiences</p>
          <div className='rounded-full h-[46%] font-semibold translate-y-[-1rem] w-[17%] bg-red-600 text-[1.2rem] text-center hover:bg-white hover:text-red-600 transition-all'>
            <h1 className='bookbutton translate-y-[0.5rem] tracking-[0.01rem] '>
              <a href="https://wa.me/+923214325393" target="_blank" rel="noopener noreferrer">
                Book me a call
              </a>
            </h1>
          </div>
        </div>
      </div>
      <div className='projectsPart min-h-[78rem] w-screen bg-blue- '>
        <div className='h-[12rem] w-[38rem] bg-red- font-semibold translate-y-[4rem] translate-x-[5rem] text-[6rem] flex gap-[1.5rem] items-center justify-center'>
          <h1 className=''>Latest</h1>
          <h1 className='text-red- text-red-600'>Projects</h1>
        </div>
        <div className='min-h-[50rem] bg-red- w-full bg-red- flex flex-col gap-[rem] translate-y-[4rem] items-center justify-center shrink-0 '>
          {
            projectsArr.map((item, index)=>{
              return (
                <div key={index} className='h-[28rem] w-[68rem] bg-red- flex items-start justify-center gap-[2rem]'>
                  <div className='group  h-[28rem] w-[31rem] bg-red- rounded-[1.5rem] overflow-hidden'>
                    <div className='h-[23rem] w-full rounded-[1.5rem] overflow-hidden bg-red- border-white border'>
                      <img className='h-full w-full object-cover group-hover:scale-105 transition-all ease-linear duration-200' src={item.p1} alt="" />
                    </div>
                    <div className='h-[5rem] w-full bg-black flex'>
                      <div className=' h-full w-[26rem] bg- flex flex-col items-start justify-center leading-[1.3rem]'>
                        <h1 className='uppercase font-bold font-medium tracking-tighter text-[1.3rem] translate-x-[1.5rem] translate-y-[-0.8rem] opacity-0 group-hover:opacity-100 transition-all duration-200'>{item.p1name}</h1>
                        <h1 className='translate-x-[1.5rem] text-[0.9rem] font-normal translate-y-[-0.8rem] opacity-0 group-hover:opacity-100 transition-all duration-200'>{item.p1Needs}</h1>
                      </div>
                      <div className='h-full w-1/2 bg-red- flex justify-end'>
                        <FiArrowUpRight className='h-[1.2rem] w-[1.2rem] translate-y-[0.6rem] translate-x-[-1.2rem] opacity-0 group-hover:opacity-100 transition-all duration-200'/>
                        <h1 
                        onClick={() => {
                          if (item.url1) {
                            window.open(item.url1, '_blank', 'noopener,noreferrer');
                          }
                        }}
                        className='text-[0.9rem] translate-y-[0.5rem] translate-x-[-1rem] tracking-tigh hover:underline opacity-0 group-hover:opacity-100 transition-all duration-200'>View Project</h1>
                      </div>
                    </div>
                  </div>
                  <div className='group h-[28rem] w-[31rem] bg-red- rounded-[1.5rem] overflow-hidden'>
                    <div className='h-[23rem] w-full rounded-[1.5rem] overflow-hidden bg-red- border-white border'>
                      <img className='h-full w-full object-cover group-hover:scale-105 transition-all ease-linear duration-200 ' src={item.p2} alt="" />
                    </div>
                    <div className='h-[5rem] w-full bg-black flex'>
                      <div className='h-full w-[26rem] bg- flex flex-col items-start justify-center leading-[1.3rem]'>
                        <h1 className='uppercase font-bold font-medium tracking-tighter text-[1.3rem] translate-x-[1.5rem] translate-y-[-0.8rem] opacity-0 group-hover:opacity-100 transition-all duration-200'>{item.p2name}</h1>
                        <h1 className='translate-x-[1.5rem] text-[0.9rem] translate-y-[-0.8rem] opacity-0 group-hover:opacity-100 transition-all duration-200'>{item.p2Needs}</h1>
                      </div>
                      <div className='h-full w-1/2 bg-red- flex justify-end'>
                        <FiArrowUpRight className='h-[1.2rem] w-[1.2rem] translate-y-[0.6rem] translate-x-[-1.2rem] opacity-0 group-hover:opacity-100 transition-all duration-200'/>
                        <h1 
                        onClick={() => {
                          if (item.url2) {
                            window.open(item.url2, '_blank', 'noopener,noreferrer');
                          }
                        }}
                        className='text-[0.9rem] translate-y-[0.5rem] translate-x-[-1rem] tracking-tigh hover:underline opacity-0 group-hover:opacity-100 transition-all duration-200'>View Project</h1>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className='h-[5rem] w-[18rem] bg-red- translate-x-[31rem] translate-y-[4rem] flex gap-[0.2rem] items-center justify-center'>
          <FiArrowUpRight className='h-[1.4rem] w-[1.4rem]'/>
          <h1 className='text-[1.5rem] hover:underline transition-all ease-linear'>View all my projects</h1>
        </div>
      </div>
      <div className='quotePart relative flex items-center justify-center h-[32rem] w-screen bg-red-'>
        <div className='border-white/20 border-b-[1px]  h-[20rem] w-screen bg-black border-y-1 text-center flex items-center justify-center'>
          <RiDoubleQuotesL className='h-[2rem] w-[2rem] absolute top-[12rem] left-[12.5rem]'/>
          <RiDoubleQuotesR className='h-[2rem] w-[2rem] absolute top-[15.5rem] left-[68.5rem]'/>
          <h1 className='font-medium text-[2.6rem]'>My approach is structured. i focused on clarity before<br/>proceed, and that reflects   in every detail. Nothing felt random.</h1>
        </div>
      </div>
      <div className='skillsPart min-h-screen w-screen bg-red- border-white/20 border-b-[1px]'>
        <div className='bg-red- h-[16rem] w-[38rem] bg-red- font-semibold translate-y-[2rem] translate-x-[6rem] text-[6rem] flex flex-col items-start justify-center leading-[6rem] font-semibold'>
          <h1 className=' font-'>Here What My</h1>
          <h1 className='text-red-  text-red-600 font-'>S<span className='text-[4rem]'>kill</span>S<span className='text-[4rem]'>ets</span> Are!</h1>
        </div>
        <div ref={containerRef} className='skillsList h-[28rem] w-full hide-scrollbar bg-red- items-center justify-start flex gap-[2rem]'>
          {
            skillsArr.map((item,index)=>{
              return (
                <div key={index} className='skillList h-[20rem] shrink-0 w-[18rem] border-white border bg-red- rounded-[2rem] backdrop-blur-md border-gray-500/30 bg-gray-950/50 flex flex-col items-center justify-between overflow-hidden'>
                  <div className='h-[6rem] w-full bg-red- flex items-center justify-start gap-[0.5rem]'>
                    <div className='h-[3.2rem] w-[3.2rem] rounded-[10px]   bg-red- overflow-hidden translate-x-[1rem] flex items-center justify-center'>
                      <item.skillImg className="h-[3rem] w-[3rem] text-white" />
                    </div>
                    <div className='h-[4rem] w-[12rem] bg-red- flex flex-col items-start justify-start translate-x-[1.5rem]'>
                      <h1 className='font-medium text-[1.5rem]'>{item.skillName}</h1>
                      <h1 className='translate-y-[-0.5rem]'>Short Desc</h1>
                    </div>
                  </div>
                  <div className='relative h-[10rem] w-full bg-red- flex items-start justify-center'>
                    <RiDoubleQuotesL className='absolute top-[-1.4rem] left-[1rem] h-[1.5rem] w-[1.5rem] text-red-600'/>
                    <div className='translate-y-[-0.2rem] bg-red- h-[8rem] w-[16rem] bg-pink- flex items-start justify-center'>
                      <h1 className='skillInfoh1 translate-x-[0.3rem] font-normal text-[1.2rem] leading-[1.5rem]'>{item.skillDescription}</h1>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
        
      </div>
      <div className='helpPage relative h-[167.6rem] w-screen bg-red- flex border-b-[1px] border-white/20'>
        <div className='firstDiv h-[40rem] w-1/2 bg-red- flex items-center justify-center'>
          <div className='h-[26rem] w-full bg-red- flex flex-col gap-[2rem]'>
            <div className='h-[12rem] w-full bg-red- leading-[5rem] flex items-center justify-center tracking-tighter'>
              <h1 className='font-semibold text-[5.5rem]'>What I Help<br/>You To <span className='text-red-600 uppercase  '>Shape...</span></h1>
            </div>
            <div className='h-[10rem] w-[35rem] bg-red- translate-x-[6rem]'>
              <h1 className='text-[1.5rem]'>Tools I Use</h1>
              <div className='h-[5rem] w-[35rem] bg-red- flex items-center gap-[1rem] '>
                {
                  toolsArr2.map((item,index)=>{
                    return (
                      <div key={index} className='h-[3rem] w-[3rem] rounded-[0.5rem] border-white border-[0.1rem] flex items-center justify-center'>
                        <item.toolName className="h-[2rem] w-[2rem] text-white" />
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
        <div className='secondDiv relative h-[40rem] w-1/2 bg-red- translate-y-[rem]'>
          <div className='helpCard1 border-white border absolute top-[40rem] left-[7rem] h-[15rem] w-[25rem] rounded-[1rem] overflow-hidden bg-black'>
            <div className='bg-red- h-[8rem] w-full'>
              <div className='h-1/2 w-full bg-red- flex'>
                <div className='bg-red- h-full w-[4rem] bg-red- flex items-center justify-center'><PiShapesLight className='h-[3rem] w-[3rem]'/></div>
                <div className='bg-red- h-full text-[2rem] flex items-center justify-start font-bold'>Full-Stack</div>
              </div>
              <div className='h-1/2 w-[20rem] translate-x-[1rem] text-[1.2rem] bg-blue-'>Build complete web apps using Next.js, React, TypeScript, and MySQL. </div>
            </div>
            <div className='h-1/2 w-full bg-red- flex flex-col items-center justify-center gap-[0.4rem]'>
                <div className='h-[2.5rem] w-full bg-red- flex gap-[0.5rem] translate-x-[1rem]'>
                  <h1 className='rounded-full bg-gray-400/20 inline-block px-4 py-1.5 border-[1.5px] border-white '>Auth & DB</h1>
                  <h1 className='rounded-full bg-gray-400/20 inline-block px-4 py-1.5 border-[1.5px] border-white '>Web Apps</h1>
                </div>
                <div className='h-[2.5rem] w-full bg-red- flex gap-[0.5rem] translate-x-[1rem]'>
                  <h1 className='rounded-full bg-gray-400/20 inline-block px-4 py-1.5 border-[1.5px] border-white'>APIs</h1>
                  <h1 className='rounded-full bg-gray-400/20 inline-block px-4 py-1.5 border-[1.5px] border-white'>Performance</h1>
                </div>
            </div>
          </div>
          <div className='helpCard2 border-white border  absolute top-[72rem] left-[7rem] h-[15rem] w-[25rem] rounded-[1rem] overflow-hidden bg-red-600'>
            <div className='bg-red- h-[8rem] w-full'>
              <div className='h-1/2 w-full bg-red- flex'>
                <div className='bg-red- h-full w-[4rem] bg-red- flex items-center justify-center'><PiShapesLight className='h-[3rem] w-[3rem]'/></div>
                <div className='bg-red- h-full text-[2rem] flex items-center justify-start font-bold'>Animations</div>
              </div>
              <div className='h-1/2 w-[20rem] translate-x-[1rem] text-[1.2rem] bg-blue-'>Enhance user experience using GSAP and Tailwind for smooth interactions.</div>
            </div>
            <div className='h-1/2 w-full bg-red- flex flex-col items-center justify-center gap-[0.4rem]'>
                <div className='h-[2.5rem] w-full bg-red- flex gap-[0.5rem] translate-x-[1rem]'>
                  <h1 className='rounded-full bg-gray-400/20 inline-block px-4 py-1.5 border-[1.5px] border-white '>Scroll & UI</h1>
                  <h1 className='rounded-full bg-gray-400/20 inline-block px-4 py-1.5 border-[1.5px] border-white '>Responsive</h1>
                </div>
                <div className='h-[2.5rem] w-full bg-red- flex gap-[0.5rem] translate-x-[1rem]'>
                  <h1 className='rounded-full bg-gray-400/20 inline-block px-4 py-1.5 border-[1.5px] border-white'>Typography</h1>
                  <h1 className='rounded-full bg-gray-400/20 inline-block px-4 py-1.5 border-[1.5px] border-white'>Styling</h1>
                </div>
            </div>
          </div>
          <div className='helpCard3 border-white border absolute top-[104rem] left-[7rem] h-[15rem] w-[25rem] rounded-[1rem] overflow-hidden bg-black'>
            <div className='bg-red- h-[8rem] w-full'>
              <div className='h-1/2 w-full bg-red- flex'>
                <div className='bg-red- h-full w-[4rem] bg-red- flex items-center justify-center'><PiShapesLight className='h-[3rem] w-[3rem]'/></div>
                <div className='bg-red- h-full text-[2rem] flex items-center justify-start font-bold'>3D Visuals</div>
              </div>
              <div className='h-1/2 w-[20rem] translate-x-[1rem] text-[1.2rem] bg-blue-'>Bring websites to life using custom 3D animations from Blender.</div>
            </div>
            <div className='h-1/2 w-full bg-red- flex flex-col items-center justify-center gap-[0.4rem]'>
                <div className='h-[2.5rem] w-full bg-red- flex gap-[0.5rem] translate-x-[1rem]'>
                  <h1 className='rounded-full bg-gray-400/20 inline-block px-4 py-1.5 border-[1.5px] border-white '>Modeling</h1>
                  <h1 className='rounded-full bg-gray-400/20 inline-block px-4 py-1.5 border-[1.5px] border-white '>Ad Videos </h1>
                </div>
                <div className='h-[2.5rem] w-full bg-red- flex gap-[0.5rem] translate-x-[1rem]'>
                  <h1 className='rounded-full bg-gray-400/20 inline-block px-4 py-1.5 border-[1.5px] border-white'>Web 3D</h1>
                  <h1 className='rounded-full bg-gray-400/20 inline-block px-4 py-1.5 border-[1.5px] border-white'>Optimization</h1>
                </div>
            </div>
          </div>
          <div className='helpCard4 border-white border  absolute top-[136rem] left-[7rem] h-[15rem] w-[25rem] rounded-[1rem] overflow-hidden bg-red-600'>
            <div className='bg-red- h-[8rem] w-full'>
              <div className='h-1/2 w-full bg-red- flex'>
                <div className='bg-red- h-full w-[4rem] bg-red- flex items-center justify-center'><PiShapesLight className='h-[3rem] w-[3rem]'/></div>
                <div className='bg-red- h-full text-[2rem] flex items-center justify-start font-bold'>Figma Flow</div>
              </div>
              <div className='h-1/2 w-[20rem] translate-x-[1rem] text-[1.2rem] bg-blue-'>Transform Figma designs into responsive, polished code with pixel-perfect precision.</div>
            </div>
            <div className='h-1/2 w-full bg-red- flex flex-col items-center justify-center gap-[0.4rem]'>
                <div className='h-[2.5rem] w-full bg-red- flex gap-[0.5rem] translate-x-[1rem]'>
                  <h1 className='rounded-full bg-gray-400/20 inline-block px-4 py-1.5 border-[1.5px] border-white '>Design-Code</h1>
                  <h1 className='rounded-full bg-gray-400/20 inline-block px-4 py-1.5 border-[1.5px] border-white '>Libraries</h1>
                </div>
                <div className='h-[2.5rem] w-full bg-red- flex gap-[0.5rem] translate-x-[1rem]'>
                  <h1 className='rounded-full bg-gray-400/20 inline-block px-4 py-1.5 border-[1.5px] border-white'>Prototyping</h1>
                  <h1 className='rounded-full bg-gray-400/20 inline-block px-4 py-1.5 border-[1.5px] border-white'>Collaboration</h1>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className='experience min-h-screen w-screen bg-red- border-b-[1px] border-white/20'>
        <div className='h-[40rem] w-full bg-red- flex'>
          <div className='h-[40rem] w-[40%] bg-red- flex flex-col items-center justify-center'>
            <div className='h-[28rem] w-[25rem] rounded-[1rem] overflow-hidden'>
              <img className='h-full w-full object-cover' src="/instaPotfolioPic.jpg" alt="" />
            </div>
            <div className='h-[8rem] w-[25rem] '>
              <div className='h-[3rem] w-full text-[2.4rem] font-semibold tracking-wider translate-x-[2rem]'>Hamza Khalid</div>
              <div className='h-[5rem] w-full text-[1.1rem] leading-[1.2rem] translate-y-[0.7rem] translate-x-[2rem]'>
                <h1 className=''>Full Stack Developer</h1>
                <h1 className=''>3D Learner</h1>
              </div>
            </div>
          </div>
          <div className='h-full w-[60%] bg-red-'>
            <div className='h-[11rem] w-full bg-red-  translate-y-[3rem]'>
              <div className='h-1/2 w-full bg-red- text-[4rem] font-semibold translate-x-[6rem] text-red-600 font-semibold'>Experiences</div>
              <div className='h-1/2 w-full bg-red- text-[4rem] leading-[4rem] font-semibold translate-x-[6rem]'>That Make Sense...</div>
            </div>
            <div className='h-[25rem] w-[35rem] bg-red- translate-y-[3rem] translate-x-[6rem] text-[1.3rem]'>
              <p className='translate-y-[1rem]'>I hold a Bachelor of Science in Computer Science from the University of Central Punjab and have been actively coding for the past two years, with a recent focus on 3D animation in Blender for the last three months.</p>
              <p className='translate-y-[2rem]'>Primarily self-taught through YouTube tutorials, I combine my technical background with professional freelancing experience as an English translator at Al Nafi Company. Passionate about the Next.js framework, I have built a functional job portal where employers manage postings and applicants apply easily.</p>
              <p className='translate-y-[3rem]'>Additionally, I have replicated a film studio's animated UI and crafted a 3D animated video, aiming to deliver immersive full-stack web applications.</p>
            </div>
          </div>
        </div>
      </div>

      <div className='FAQ h-screen w-[80rem] bg-red- flex border-b-[1px] border-white/20'>
        <div className='h-[40rem] w-[40rem] bg-red- flex flex-col items-center justify-center'>
          <div className='h-[7rem] w-[40rem] bg- text-[5rem] translate-x-[5rem] font-semibold'>FAQs</div>
          <div className='h-[29rem] w-[40rem] bg-red- flex flex-col items-center justify-evenly translate-x-[2rem]'>
            {
              questions.map((item,index)=>{
                return (
                  <div key={index} className='h-[4.5rem] w-[36rem] bg-red- border border-white rounded-[1rem] flex overflow-hidden'>
                    <div className='h-full w-[5rem] bg-red- flex items-center justify-center'>{item.qno}</div>
                    <div className='h-full w-[26rem] bg-red- flex items-center justify-start text-[1.3rem]'>{item.question}</div>
                    <div onClick={() => cardSwipe(index)} className='h-full w-[5rem] bg-red- flex items-center justify-center'><FaPlus /></div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className='h-[40rem] w-[40rem] bg-red- flex flex-col items-center justify-center'>
          <div className='h-[7rem] w-[25rem] bg-red- text-[4rem] tracking-tighter text-red-600 font-semibold flex'>
            <div className='h-full w-[20rem] bg-red-'>Still Not Sure?</div>
            <div className='h-[2rem] w-[7rem] bg-red- translate-y-[3.1rem] text-[1.4rem] tracking-tight text-white'>Book a call</div>
          </div>
          <div className='h-[15rem] w-[25rem] bg-red-  rounded-[1rem] flex translate-y-[-1rem]'>
            {
              questions.map((item,index)=>{
                return (
                  <div key={index} ref={el => answerElementsRef.current[index] = el} className={`absolute top-0 left-0 h-[15rem] w-[25rem] backdrop-blur-[0.1rem] border-white/80 border-[2px]  ${bgColors[index % bgColors.length]}  rounded-[1rem] flex overflow-hidden text-center flex items-center justify-center`}>
                    <div className='text-red-600 absolute top-[0.5rem] left-[0.5rem]'><RiDoubleQuotesL className='h-[1.5rem] w-[1.5rem]'/></div>
                    <div className='text-red-600 absolute top-[13rem] left-[23rem]'><RiDoubleQuotesR className='h-[1.5rem] w-[1.5rem]'/></div>
                    <h1 className='w-[20rem] text-[1.5rem]'>{item.answer}</h1>
                  </div>
                )
              })
            }
            <div className='absolute h-[15rem] w-[25rem] bg-black border-1 border-white rounded-[1rem] z-1 flex items-center justify-center'>
              <div className='text-red-600 absolute top-[0.5rem] left-[0.5rem]'><RiDoubleQuotesL className='h-[1.5rem] w-[1.5rem]'/></div>
              <div className='text-red-600 absolute top-[13rem] left-[23rem]'><RiDoubleQuotesR className='h-[1.5rem] w-[1.5rem]'/></div>
              <h1 className='text-[12rem] translate-y-[-1rem]'>A<span className='text-[2rem] text-red-600'>nswer</span></h1>
            </div>
          </div>
        </div>
      </div>


      <div className='contactPage h-screen w-screen bg-black flex flex-col items-center justify-center'>
        <div className='h-[18rem] w-[70rem] bg-red- border-white border-b-[2px]'>
          <div className='h-[10rem] w-full bg-red- font-semibold leading-[4rem] '>
            <h1 className='text-[4rem]'>Lets <span className='font-mono text-[4rem] tracking-tighter inline-block text-red-600 font-bold'>build</span></h1>
            <h1 className='text-[4rem]'>Incredible Work Together</h1>
          </div>
          <div className='h-[8rem] w-full bg-red- flex items-center justify-center'>
            <div className='h-full w-[30rem] bg-red- flex flex-col items-center justify-center'>
              <div className='h-[1.6rem] w-full bg-red- text-gray-400'>Email</div>
              <div className='h-[1.6rem] w-full bg-red- text-[1.4rem] '>hamzajuttb333777@gmail.com</div>
            </div>
            <div className='h-full w-[20rem] bg-red- flex flex-col items-center justify-center'>
              <div className='h-[1.6rem] w-full bg-red- text-gray-400'>Call me</div>
              <div className='h1div h-[1.6rem] w-full bg-red- text-[1.4rem] text-white pointer-events-none'>
                <h1 className='hover:text-red-600 inline-block transition-all ease-linear duration-100 pointer-events-auto'>
                  <a href="https://wa.me/+923214325393" target="_blank" rel="noopener noreferrer">
                    Book me
                  </a>
                </h1>
              </div>
            </div>
            <div className='h-full w-[20rem] bg-red- flex flex-col items-center justify-center'>
              <div className='h-[1.6rem] w-full bg-red- text-gray-400'>Social</div>
              <div className='h-[1.6rem] w-full bg-red- text-[1.4rem] flex gap-[0.5rem]'>
                <div className='h-[2rem] w-[2rem] bg-red-600 rounded-full flex items-center justify-center hover:bg-white hover:text-red-600 transition-all'>
                  <a href="https://www.linkedin.com/in/yourprofile/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn />
                  </a>
                </div>
                <div className='h-[2rem] w-[2rem] bg-red-600 rounded-full flex items-center justify-center hover:bg-white hover:text-red-600 transition-all'>
                  <a href="https://www.instagram.com/hamza_jutt04/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                  </a>
                </div>
                <div className='h-[2rem] w-[2rem] bg-red-600 rounded-full flex items-center justify-center hover:bg-white hover:text-red-600 transition-all'>
                  <a href="https://github.com/hamzajutt333777-bit" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='h-[18rem] w-[70rem] bg-red-'>
          <div className='h-[6rem] bg-red- flex'>
            <div className='h-full w-[45rem] bg-red-00 flex flex-col items-end justify-end'>
              <div className='h-[2rem] w-full bg-red- text-[1.2rem] text-gray-400'>Menu</div>
              <div className='h-[2rem] w-full bg-red- text-[1.5rem] bg-red- flex gap-[5rem]'>
                <h1 onClick={() => scrollToPercent(34.2)}  className='inline-block hover:text-red-600 transition-all'>Skills</h1>
                <h1 onClick={() => scrollToPercent(44)}  className='inline-block hover:text-red-600 transition-all'>Services</h1>
                <h1 onClick={() => scrollToPercent(91)}  className='inline-block hover:text-red-600 transition-all'>FAQ</h1>
              </div>
            </div>
            <div className='h-full w-[25rem] bg-red-'></div>
          </div>
          <div className='h-[12rem] bg-red- font-bold text-[12rem] tracking-widest text-red-600'><h1 className='translate-y-[-3rem] translate-x-[30rem]'>HAMZA.</h1></div>
        </div>
      </div>
    </div>
  )
}
export default H
