
import { useEffect, useRef, useState } from 'react';
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import { FiArrowUpRight } from "react-icons/fi";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { BsTypescript } from "react-icons/bs";
import { BiLogoBlender } from "react-icons/bi";
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
    lenisRef.current?.scrollTo(target, { duration: 1.5 });
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
      p1: '/sienaProjectPic.jpg',
      p1name: 'Animated Website',
      p1Needs: 'High performance cinematic website experience',
      url1: 'https://sienafilmfoundationproject.netlify.app/',
      p2: '/3dVideoPic.jpg',
      p2name: '3D Video',
      p2Needs: 'Dynamic animation in Blender',
      url2: '/animation1.mp4'
    },
    {
      p1: '/p3-19.webp',
      p1name: 'Job Portal App',
      p1Needs: 'Streamlined job search and hiring',
      url1: 'https://github.com/hamzajutt333777-bit/Job_Portal_Project',
      p2: '/productAdPic.jpg',
      p2name: 'Product Ad',
      p2Needs: 'Engaging digital product promotion video',
      url2: 'https://lampad.netlify.app/',
    },
  ];
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
      answer:'I will simply listen to their ideas, build the animation in Blender, and then add it to their website.'
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

  gsap.registerPlugin(ScrollTrigger);

//   useGSAP(function () {
//     const stairsDiv = gsap.timeline();
    
//     stairsDiv.to('.stairs', {
//       y: '-100vh',
//       delay: 2.5,
//       ease: 'power2.inOut',
//       duration: 1.5,
//       stagger: { amount: 1 }
//     }, 'a');
    
//     gsap.to('.counterDiv', { opacity: 0, duration: 1, delay: 2, ease: 'power2' });
//     stairsDiv.to('.stairsContainer', { display: 'none' });

//     // --- RESPONSIVE SCROLL ANIMATIONS ---
//     const secondDiv = document.querySelector('.secondDiv');
// const cards = gsap.utils.toArray(['.helpCard1', '.helpCard2', '.helpCard3', '.helpCard4']);
// const firstDiv = document.querySelector('.firstDiv');

// // Calculate the total scroll distance:
// // Total height of the secondDiv (including all cards and gaps) minus viewport height
// const getPinDistance = () => {
//   const totalHeight = secondDiv.scrollHeight;
//   const viewportHeight = window.innerHeight;
//   return Math.max(0, totalHeight - viewportHeight);
// };

// gsap.to(firstDiv, {
//   scrollTrigger: {
//     trigger: secondDiv,
//     start: 'top 70%',
//     end:'top -50%',
//     pin: firstDiv,
//     scrub: true,
//     markers:true
//   }
// })

// // 1. Pin the right column (secondDiv)
// gsap.to(secondDiv, {
//   scrollTrigger: {
//     trigger: secondDiv,
//     start: 'top 50%',
//     end: () => `+=${getPinDistance()}`,
//     pin: true,
//     scrub: 1,
//     anticipatePin: 1,
//     invalidateOnRefresh: true, // Recalculate on resize
//   }
// });

// // 2. Animate cards to stack inside the pinned container
// //    Each card moves up by the total height of previous cards + gaps
// cards.forEach((card, i) => {
//   // Compute the distance to move: sum of heights of all previous cards + their gaps
//   let moveDistance = 0;
//   for (let j = 0; j < i; j++) {
//     const prevCard = cards[j];
//     const gap = parseFloat(getComputedStyle(secondDiv).rowGap || getComputedStyle(secondDiv).gap || 0);
//     moveDistance += prevCard.offsetHeight + gap;
//   }
  
//   // Animate the card's y position from 0 to -moveDistance over the pin duration
//   gsap.fromTo(card,
//     { y: 0 },
//     {
//       y: -moveDistance,
//       ease: 'none',
//       scrollTrigger: {
//         trigger: secondDiv,
//         start: 'top top',
//         end: () => `+=${getPinDistance()}`,
//         scrub: true,
//         invalidateOnRefresh: true,
//       }
//     }
//   );
// });
//     if (containerRef.current) {
//       gsap.to(containerRef.current, { x: '-100rem', ease: 'none', duration: 40, repeat: -1, yoyo: true });
//     }
//     // --- 1. FAQ SECTION ANIMATIONS ---
//     const faqTl = gsap.timeline({
//       scrollTrigger: {
//         trigger: '.FAQ',
//         start: 'top 75%', 
//       }
//     });

//     faqTl.from('.faq-title', { y: 50, opacity: 0, duration: 0.8, ease: 'power3.out' })
//          .from('.faq-question', { x: -50, opacity: 0, stagger: 0.1, duration: 0.6, ease: 'power2.out' }, '-=0.4')
//          .from('.faq-subtitle', { y: 30, opacity: 0, duration: 0.6, ease: 'power3.out' }, '-=0.4')
//          .from('.faq-answer-card', { scale: 0.8, opacity: 0, stagger: 0.1, duration: 0.6, ease: 'back.out(1.5)' }, '-=0.4');

//     // --- 2. CONTACT PAGE ANIMATIONS ---
//     const contactTl = gsap.timeline({
//       scrollTrigger: {
//         trigger: '.contactPage',
//         start: 'top 75%',
//       }
//     });

//     contactTl.from('.contact-heading', { y: 50, opacity: 0, stagger: 0.15, duration: 0.8, ease: 'power3.out' })
//              .from('.contact-info', { y: 30, opacity: 0, stagger: 0.1, duration: 0.6, ease: 'power2.out' }, '-=0.4')
//              .from('.contact-footer-text', { y: 150, opacity: 0, duration: 1, ease: 'power4.out' }, '-=0.2');
// });

  useGSAP(function () {
    const stairsDiv = gsap.timeline();
    stairsDiv.to('.stairs', {
      y:'-100vh',
      delay:2.5,
      ease:'power2.inOut',
      duration:1.5,
      stagger:{
        amount:1
      }
    },'a')
    gsap.to('.counterDiv', {opacity:0, duration:1, delay:2, ease:'power2'})
    stairsDiv.to('.stairsContainer', {display:'none'})

    let mm = gsap.matchMedia();

mm.add("(max-width: 767px)", () => {
  gsap.to('.firstDiv', {scrollTrigger: {trigger: '.firstDiv',start: 'top 2%',endTrigger: '.helpCard4',end: 'top 50%',pin: true,pinSpacing: false,},});
  const cards = ['.helpCard1', '.helpCard2', '.helpCard3', '.helpCard4'];

  cards.forEach((card) => {
    gsap.to(card, {scrollTrigger: {trigger: card,start: 'top 50%',endTrigger: '.helpCard4',end: 'top 50%',pin: true,pinSpacing: false, },});
    gsap.from(card,{rotate:45,scrollTrigger: {trigger: card,start: 'top 100%', end:'top 60%', scrub:true}})
  });});

mm.add("(min-width: 768px) and (max-width: 1024px)", () => {
  gsap.to('.firstDiv', {scrollTrigger: {trigger: '.firstDiv',start: 'top -10%',endTrigger: '.helpCard4',end: 'top 55%',pin: true,pinSpacing: false,},});
  const cards = ['.helpCard1', '.helpCard2', '.helpCard3', '.helpCard4'];

  cards.forEach((card) => {
    gsap.to(card, {scrollTrigger: {trigger: card,start: 'top 45%',endTrigger: '.helpCard4',end: 'top 45%',pin: true,pinSpacing: false, },});
    gsap.from(card,{rotate:45,scrollTrigger: {trigger: card,start: 'top 100%', end:'top 55%', scrub:true}})
  });});

mm.add("(min-width: 1025px)", () => {
  gsap.to('.firstDiv', {scrollTrigger: {trigger: '.firstDiv',start: 'top 10%',endTrigger: '.helpCard4',end: 'top 20%',pin: true,pinSpacing: false,},});
  const cards = ['.helpCard1', '.helpCard2', '.helpCard3', '.helpCard4'];

  cards.forEach((card) => {
    gsap.to(card, {scrollTrigger: {trigger: card,start: 'top 30%',endTrigger: '.helpCard4',end: 'top 30%',pin: true,pinSpacing: false, },});
    gsap.from(card,{rotate:45,scrollTrigger: {trigger: card,start: 'top 100%', end:'top 40%', scrub:true}})

  });});

      gsap.to(containerRef.current, {x:'-100rem',ease:'none', duration:40, repeat:-1, yoyo:true})


  })

  return (
    <div className='potfolio relative w-full min-h-screen bg-black overflow-hidden text-white'>

      <div className="stairsContainer fixed inset-0 z-50 h-screen w-screen flex flex-col items-center justify-center bg-transparent text-white">
        <div className='absolute top-0 left-0 h-full w-full bg-transparent flex pointer-events-none'>
          <div className='stairs h-full w-1/4 bg-black scale-x-[1.02]'></div>
          <div className='stairs h-full w-1/4 bg-black scale-x-[1.02]'></div>
          <div className='stairs h-full w-1/4 bg-black scale-x-[1.02]'></div>
          <div className='stairs h-full w-1/4 bg-black scale-x-[1.02]'></div>
        </div>
        <h1 className="counterDiv flex items-baseline text-[25vw] md:text-[15rem] font-extrabold font-mono z-10">
          {count}
          <span className='text-red-600 font-light text-[15vw] md:text-[10rem]'>%</span>
        </h1>
      </div>

      {/* 2. Responsive Navigation */}
      <div className='nav fixed z-40 top-6 md:top-12 left-1/2 -translate-x-1/2 rounded-full backdrop-blur-md border border-gray-500/30 h-14 w-[90%] max-w-lg flex items-center justify-between px-4 overflow-hidden bg-gray-400/10 shadow-lg'
        data-lenis-prevent
      >
        <div className='flex items-center gap-3 h-full'>
          <div className='h-[70%] aspect-square rounded-full bg-white overflow-hidden'>
            <img className='h-full w-full object-cover' src="/instaPotfolioPic.jpg" alt="Profile" />
          </div>
          <h1 onClick={() => scrollToPercent(0)} className='font-bold text-xl md:text-2xl hover:text-red-600 transition-colors cursor-pointer'>HK.</h1>
        </div>

        <div className='flex items-center gap-4 md:gap-6 font-semibold text-sm md:text-base'>
          <h1 onClick={() => scrollToPercent(9.5)} className='hover:text-red-600 transition-colors cursor-pointer'>Projects</h1>
          <h1 onClick={() => scrollToPercent(78.5)} className='hover:text-red-600 transition-colors cursor-pointer sm:block'>About</h1>
          <button 
            onClick={() => scrollToPercent(100)} 
            className='h-9 px-4 md:px-5 bg-red-600 text-white rounded-full hover:bg-white hover:text-red-600 transition-colors'
          >
            Contact
          </button>
        </div>
      </div>

      {/* 3. Hero Section (Home Part) */}
      <div className='homePart relative min-h-screen w-full flex flex-col items-center justify-center pt-24 pb-12 border-b border-white/20 px-4 md:px-8'>
        
        {/* Responsive Huge Typography */}
        <h1 className='uppercase text-[22vw] lg:text-[16rem] xl:text-[18rem] font-bold text-white leading-none tracking-tighter'>
          think
        </h1>
        <h1 className='uppercase text-[25vw] translate-y-[-1rem] lg:text-[12rem] xl:text-[14rem] font-bold text-red-600 leading-none tracking-tighter -mt-2 md:-mt-6 lg:-mt-10'>
          creatively
        </h1>

        {/* Hero Paragraph & Button stacked on mobile, inline on PC */}
        <div className='flex flex-col md:flex-row items-center justify-between w-full max-w-5xl mt-12 md:mt-24 gap-8 md:gap-4'>
          <p className='text-center md:text-left text-lg md:text-2xl font-medium tracking-wide leading-snug text-gray-200 lg:translate-y-[-7rem]'>
            I can Help Brands Turn <br className="hidden md:block"/>Ideas Into Structured <br className="hidden md:block"/>Meaningful Experiences
          </p>
          <a 
            href="https://wa.me/+923214325393" 
            target="_blank" 
            rel="noopener noreferrer"
            className='flex items-center lg:translate-y-[-8rem] justify-center h-14 px-8 rounded-full bg-red-600 text-white font-semibold text-lg hover:bg-white hover:text-red-600 transition-all shadow-lg shrink-0'
          >
            Book me a call
          </a>
        </div>
      </div>
      <div className='projectsPart min-h-screen w-full flex flex-col items-center pt-20 pb-20 px-4 md:px-8'>
        <div className='flex items-center gap-4 text-5xl md:text-7xl lg:text-[6rem] font-semibold mb-16 md:mb-24 text-center'>
          <h1>Latest</h1>
          <h1 className='text-red-600'>Projects</h1>
        </div>
        <div className='w-full max-w-7xl flex flex-col gap-12 lg:gap-16 items-center'>
          {projectsArr.map((item, index) => (
            // Flex column on mobile, row on desktop
            <div key={index} className='flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 w-full'>
              
              {/* Project Card 1 */}
              <div className='group w-full lg:w-[32rem] flex flex-col rounded-3xl overflow-hidden'>
                <div className='h-64 md:h-[23rem] w-full rounded-3xl overflow-hidden border border-white/20 relative bg-zinc-900'>
                  <img className='h-full w-full object-cover group-hover:scale-105 transition-transform duration-300 ease-out' src={item.p1} alt={item.p1name} />
                </div>
                
                {/* Details box - Always visible on mobile, fades in on Desktop hover */}
                <div className='h-24 w-full bg-black flex items-center justify-between px-4 lg:px-6 opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <div className='flex flex-col justify-center leading-tight'>
                    <h1 className='uppercase font-bold tracking-tight text-lg md:text-xl'>{item.p1name}</h1>
                    <p className='text-sm text-gray-400 mt-1'>{item.p1Needs}</p>
                  </div>
                  <button 
                    onClick={() => item.url1 && window.open(item.url1, '_blank', 'noopener,noreferrer')}
                    className='flex items-center gap-1 group/btn hover:text-red-500 transition-colors shrink-0'
                  >
                    <FiArrowUpRight className='text-xl group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1 transition-transform' />
                    <span className='text-sm md:text-base underline underline-offset-4 decoration-transparent group-hover/btn:decoration-current transition-colors'>
                      View Project
                    </span>
                  </button>
                </div>
              </div>

              {/* Project Card 2 */}
              <div className='group w-full lg:w-[32rem] flex flex-col rounded-3xl overflow-hidden'>
                <div className='h-64 md:h-[23rem] w-full rounded-3xl overflow-hidden border border-white/20 relative bg-zinc-900'>
                  <img className='h-full w-full object-cover group-hover:scale-105 transition-transform duration-300 ease-out' src={item.p2} alt={item.p2name} />
                </div>
                
                {/* Details box - Always visible on mobile, fades in on Desktop hover */}
                <div className='h-24 w-full bg-black flex items-center justify-between px-4 lg:px-6 opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <div className='flex flex-col justify-center leading-tight'>
                    <h1 className='uppercase font-bold tracking-tight text-lg md:text-xl'>{item.p2name}</h1>
                    <p className='text-sm text-gray-400 mt-1'>{item.p2Needs}</p>
                  </div>
                  <button 
                    onClick={() => item.url2 && window.open(item.url2, '_blank', 'noopener,noreferrer')}
                    className='flex items-center gap-1 group/btn hover:text-red-500 transition-colors shrink-0'
                  >
                    <FiArrowUpRight className='text-xl group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1 transition-transform' />
                    <span className='text-sm md:text-base underline underline-offset-4 decoration-transparent group-hover/btn:decoration-current transition-colors'>
                      View Project
                    </span>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
        <button className='flex items-center justify-center gap-2 mt-16 md:mt-24 group hover:text-red-500 transition-colors'>
          <FiArrowUpRight className='text-2xl group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform' />
          <h1 className='text-xl md:text-2xl font-medium underline decoration-transparent group-hover:decoration-current underline-offset-8 transition-colors'>
            View all my projects
          </h1>
        </button>
      </div>

      {/* 5. Quote Section */}
      <div className='quotePart relative flex items-center justify-center min-h-[40vh] md:min-h-[32rem] w-full'>
        <div className='w-full border-y md:border-y-0 md:border-b border-white/20 bg-black py-16 md:py-0 md:h-[20rem] flex items-center justify-center px-6 md:px-12'>
          
          {/* Relative wrapper keeps the quotes anchored to the text on ALL screen sizes */}
          <div className='relative max-w-4xl mx-auto text-center'>
            <RiDoubleQuotesL className='h-8 w-8 md:h-10 md:w-10 absolute -top-6 -left-4 md:-top-10 md:-left-12 text-red-600' />
            
            <h1 className='font-medium text-2xl md:text-4xl lg:text-[2.6rem] leading-snug md:leading-tight'>
              My approach is structured. I focused on clarity before
              <br className="hidden md:block"/> proceed, and that reflects in every detail. Nothing felt random.
            </h1>
            
            <RiDoubleQuotesR className='h-8 w-8 md:h-10 md:w-10 absolute -bottom-6 -right-4 md:-bottom-10 md:-right-12 text-red-600' />
          </div>

        </div>
      </div>

      {/* 6. Skills Section */}
      <div className='skillsPart min-h-screen w-full border-white/20 border-b-[1px] flex flex-col justify-center py-16 overflow-hidden'>
        
        {/* Responsive Heading */}
        <div className='px-4 md:px-12 lg:px-24 mb-12 md:mb-20 flex flex-col items-start justify-center leading-none font-semibold'>
          <h1 className='text-5xl md:text-7xl lg:text-[6rem] tracking-tight'>Here What My</h1>
          <h1 className='text-red-600 text-5xl md:text-7xl lg:text-[6rem] flex items-baseline tracking-tight'>
            S<span className='text-3xl md:text-5xl lg:text-[4rem]'>kill</span>S<span className='text-3xl md:text-5xl lg:text-[4rem]'>ets</span> Are!
          </h1>
        </div>

        {/* GSAP Scrolling Container */}
        <div ref={containerRef} className='skillsList w-full flex items-center justify-start gap-6 px-4 md:px-12'>
          {skillsArr.map((item, index) => {
            return (
              // Card Item
              <div 
                key={index} 
                className='skillList h-[20rem] w-[16rem] md:w-[18rem] shrink-0 border border-white/20 rounded-[2rem] backdrop-blur-md bg-gray-950/50 flex flex-col items-start justify-start p-6 overflow-hidden transition-colors hover:bg-gray-900/80'
              >
                
                {/* Card Header (Icon + Name) */}
                <div className='w-full flex items-center justify-start gap-4 mb-6'>
                  <div className='h-12 w-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0'>
                    <item.skillImg className="h-7 w-7 text-white" />
                  </div>
                  <div className='flex flex-col items-start justify-center'>
                    <h1 className='font-medium text-xl leading-tight'>{item.skillName}</h1>
                    <h1 className='text-sm text-gray-400 mt-1'>Short Desc</h1>
                  </div>
                </div>

                {/* Card Body (Description) */}
                <div className='relative w-full flex-1'>
                  <RiDoubleQuotesL className='absolute -top-2 -left-2 h-5 w-5 text-red-600 opacity-60' />
                  <div className='w-full h-full pt-4 px-2'>
                    <p className='font-normal text-base md:text-[1.1rem] leading-relaxed text-gray-300'>
                      {item.skillDescription}
                    </p>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>

      {/* 7. Help / Services Section */}
      <div className='helpPage relative w-full flex flex-col lg:flex-row border-b border-white/20 bg-black'>
        
        {/* Left Div (CSS Sticky keeps this pinned gracefully on desktop) */}
        <div className='firstDiv w-full lg:w-1/2 lg:h-screen bg-red- flex flex-col justify-center items-center lg:items-start px-6 md:px-12 lg:pl-24 py-20 lg:py-0'>
          
          <h1 className='font-semibold text-5xl md:text-7xl bg-red- lg:text-[5.5rem] leading-tight lg:leading-[6rem] tracking-tighter mb-12 text-center lg:text-left'>
            What I Help<br />
            You To <span className='text-red-600 uppercase'>Shape...</span>
          </h1>
          
          <div className='w-full max-w-md flex flex-col items-center lg:items-start'>
            <h1 className='text-xl md:text-2xl mb-6'>Tools I Use</h1>
            <div className='flex flex-wrap justify-center lg:justify-start gap-0.5 bg-red-'>
              {toolsArr2.map((item, index) => {
                return (
                  <div key={index} className='h-12 w-12 md:h-14 md:w-14 rounded-xl border border-white/50 bg-white/5 flex items-center justify-center transition-transform hover:scale-110'>
                    <item.toolName className="h-6 w-6 md:h-8 md:w-8 text-white" />
                  </div>
                )
              })}
            </div>
          </div>

        </div>

        {/* Right Div (Scrolling & Stacking Cards) */}
        {/* gap-[30vh] creates the large scrolling distance between each card natively */}
        <div className='secondDiv w-full lg:w-1/2 bg-red- flex flex-col items-center justify-start pb-[20vh] lg:pb-[40vh] px-4 pt-10 lg:pt-[20vh] gap-[25vh] lg:gap-[35vh]'>
          
          {/* Card 1 */}
          <div className='helpCard1 w-full max-w-[25rem] opacity- rounded-2xl overflow-hidden bg-black border border-white/30 shadow-2xl flex flex-col transform-gpu'>
            <div className='p-2 md:p-8 border-b border-white/20 bg-amber-'>
              <div className='flex items-center gap-4 mb-4'>
                <div className='h-12 w-12 flex items-center justify-center'><PiShapesLight className='h-10 w-10 text-white'/></div>
                <h1 className='text-2xl md:text-3xl font-bold'>Full-Stack</h1>
              </div>
              <p className='text-gray- text-sm md:text-lg leading-relaxed'>Build complete web apps using Next.js, React, TypeScript, and MySQL.</p>
            </div>
            <div className='p-2 bg-red- flex flex-wrap gap-6'>
              <span className='rounded-full bg-gray-800/50 px-4 py-1.5 border border-white/30 text-sm'>Auth & DB</span>
              <span className='rounded-full bg-gray-800/50 px-4 py-1.5 border border-white/30 text-sm'>Web Apps</span>
              <span className='rounded-full bg-gray-800/50 px-4 py-1.5 border border-white/30 text-sm'>APIs</span>
              <span className='rounded-full bg-gray-800/50 px-4 py-1.5 border border-white/30 text-sm'>Performance</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className='helpCard2 w-full max-w-[25rem] opacity- rounded-2xl overflow-hidden bg-red-600 border border-white/30 shadow-2xl flex flex-col transform-gpu'>
            <div className='p-2 md:p-8 border-b border-white/20'>
              <div className='flex items-center gap-4 mb-4'>
                <div className='h-12 w-12 flex items-center justify-center'><PiShapesLight className='h-10 w-10 text-white'/></div>
                <h1 className='text-2xl md:text-3xl font-bold'>Animations</h1>
              </div>
              <p className='text-white/90 text-sm md:text-lg leading-relaxed'>Enhance user experience using GSAP and Tailwind for smooth interactions.</p>
            </div>
            <div className='p-2 bg-red- flex flex-wrap gap-6'>
              <span className='rounded-full bg-white/10 px-4 py-1.5 border border-white/50 text-sm'>Scroll & UI</span>
              <span className='rounded-full bg-white/10 px-4 py-1.5 border border-white/50 text-sm'>Responsive</span>
              <span className='rounded-full bg-white/10 px-4 py-1.5 border border-white/50 text-sm'>Typography</span>
              <span className='rounded-full bg-white/10 px-4 py-1.5 border border-white/50 text-sm'>Styling</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className='helpCard3 w-full max-w-[25rem] opacity- rounded-2xl overflow-hidden bg-black border border-white/30 shadow-2xl flex flex-col transform-gpu'>
            <div className='p-2 md:p-8 border-b border-white/20'>
              <div className='flex items-center gap-4 mb-4'>
                <div className='h-12 w-12 flex items-center justify-center'><PiShapesLight className='h-10 w-10 text-white'/></div>
                <h1 className='text-2xl md:text-3xl font-bold'>3D Visuals</h1>
              </div>
              <p className='text-gray-300 text-sm md:text-lg leading-relaxed'>Bring websites to life using the custom 3D animations from Blender tool.</p>
            </div>
            <div className='p-2 bg- flex flex-wrap gap-6'>
              <span className='rounded-full bg-gray-800/50 px-4 py-1.5 border border-white/30 text-sm'>Modeling</span>
              <span className='rounded-full bg-gray-800/50 px-4 py-1.5 border border-white/30 text-sm'>Ad Videos</span>
              <span className='rounded-full bg-gray-800/50 px-4 py-1.5 border border-white/30 text-sm'>Web 3D</span>
              <span className='rounded-full bg-gray-800/50 px-4 py-1.5 border border-white/30 text-sm'>Optimization</span>
            </div>
          </div>

          {/* Card 4 */}
          <div className='helpCard4 w-full max-w-[25rem] rounded-2xl overflow-hidden bg-red-600 border border-white/30 shadow-2xl flex flex-col transform-gpu'>
            <div className='p-2 md:p-8 border-b border-white/20'>
              <div className='flex items-center gap-4 mb-4'>
                <div className='h-12 w-12 flex items-center justify-center'><PiShapesLight className='h-10 w-10 text-white'/></div>
                <h1 className='text-2xl md:text-3xl font-bold'>Figma Flow</h1>
              </div>
              <p className='text-white/90 text-sm md:text-lg leading-relaxed'>Transform Figma designs into responsive, polished code with pixel-perfect precision.</p>
            </div>
            <div className='p-2 bg-red- flex flex-wrap gap-6'>
              <span className='rounded-full bg-white/10 px-4 py-1.5 border border-white/50 text-sm'>Design-Code</span>
              <span className='rounded-full bg-white/10 px-4 py-1.5 border border-white/50 text-sm'>Libraries</span>
              <span className='rounded-full bg-white/10 px-4 py-1.5 border border-white/50 text-sm'>Prototyping</span>
              <span className='rounded-full bg-white/10 px-4 py-1.5 border border-white/50 text-sm'>Collaboration</span>
            </div>
          </div>

        </div>
      </div>

      {/* 8. Experience Section */}
      <div className='experience min-h-screen w-full border-b border-white/20 flex flex-col lg:flex-row bg-black'>
        
        {/* Left Profile Column */}
        <div className='w-full lg:w-2/5 flex flex-col items-center justify-center py-16 lg:py-24 px-6 lg:border-r border-white/10'>
          
          <div className='w-full max-w-[20rem] md:max-w-[22rem] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl mb-8 border-white/10'>
            <img className='h-full w-full object-cover' src="/instaPotfolioPic.jpg" alt="Hamza Khalid" />
          </div>
          
          <div className='w-full max-w-[20rem] md:max-w-[22rem] text-center lg:text-left'>
            <h1 className='text-4xl md:text-5xl font-semibold tracking-wide mb-3'>Hamza Khalid</h1>
            <div className='text-lg md:text-xl text-gray-400 font-medium leading-snug'>
              <h1>Full Stack Developer</h1>
              <h1>3D Learner</h1>
            </div>
          </div>
        </div>

        {/* Right Text Column */}
        <div className='w-full lg:w-3/5 flex flex-col justify-center px-6 md:px-12 lg:px-20 py-12 lg:py-24'>
          
          <div className='mb-12'>
            <h1 className='text-5xl md:text-7xl lg:text-[5rem] font-semibold text-red-600 leading-none mb-2'>Experiences</h1>
            <h1 className='text-5xl md:text-7xl lg:text-[5rem] font-semibold leading-none'>That Make Sense...</h1>
          </div>
          
          <div className='w-full max-w-3xl text-base md:text-lg lg:text-xl text-gray-300 font-medium leading-relaxed flex flex-col gap-6'>
            <p>
              I hold a Bachelor of Science in Computer Science from the University of Central Punjab and have been actively coding for the past two years, with a recent focus on 3D animation in Blender for the last three months.
            </p>
            <p>
              Primarily self-taught through YouTube tutorials, I combine my technical background with professional freelancing experience as an English translator at Al Nafi Company. Passionate about the Next.js framework, I have built a functional job portal where employers manage postings and applicants apply easily.
            </p>
            <p>
              Additionally, I have replicated a film studio's animated UI and crafted a 3D animated video, aiming to deliver immersive full-stack web applications.
            </p>
          </div>

        </div>
      </div>
      
      {/* --- FAQ SECTION --- */}
      <div className='FAQ min-h-screen w-full text-white bg-black flex flex-col md:flex-row border-b-[1px] border-white/20 py-10 md:py-0'>
        
        {/* Left Side: Questions */}
        <div className='w-full md:w-1/2 flex flex-col items-center justify-start md:justify-center px-4 md:px-0'>
          <div className='w-full max-w-[36rem] text-[3rem] md:text-[5rem] font-semibold mb-6 md:mb-10 text-center md:text-left'>
            FAQs
          </div>
          
          <div className='w-full max-w-[36rem] flex flex-col gap-1'>
            {questions.map((item, index) => {
              return (
                <div onClick={() => cardSwipe(index)} key={index} className='min-h-[4.5rem] w-full border border-white rounded-[1rem] flex overflow-hidden'>
                  <div className='w-[15%] md:w-[5rem] flex items-center justify-center font-bold text-lg border-r border-white/20'>
                    {item.qno}
                  </div>
                  <div className='w-[70%] md:w-[26rem] flex items-center justify-start text-[1rem] md:text-[1.3rem] p-3'>
                    {item.question}
                  </div>
                  {/* <div 
                    className='w-[15%] md:w-[5rem] flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors border-l border-white/20'
                  >
                    <FaPlus />
                  </div> */}
                </div>
              )
            })}
          </div>
        </div>

        {/* Right Side: Answers */}
        <div className='md:translate-y-[-rem] sm:translate-y-[-3rem] w-full md:w-1/2 flex flex-col items-center justify-center mt-16 md:mt-0 px-4 md:px-0'>
          
          
          <div className='relative h-[15rem] w-full max-w-[25rem] rounded-[1rem] flex items-center justify-center lg:translate-y-[7rem] md:translate-y-[5rem]'>
            {questions.map((item, index) => {
              return (
                <div 
                  key={index} 
                  ref={el => answerElementsRef.current[index] = el} 
                  className={`absolute top-0 left-0 h-full w-full backdrop-blur-[0.1rem] border-white/80 border-[2px] ${bgColors[index % bgColors.length]} rounded-[1rem] flex flex-col items-center justify-center text-center p-6 z-[-1]`}
                >
                  <RiDoubleQuotesL className='text-red-600 absolute top-[1rem] left-[1rem] h-[1.5rem] w-[1.5rem]'/>
                  <RiDoubleQuotesR className='text-red-600 absolute bottom-[1rem] right-[1rem] h-[1.5rem] w-[1.5rem]'/>
                  <h1 className='w-[90%] text-[1.1rem] md:text-[1.5rem]'>{item.answer}</h1>
                </div>
              )
            })}
            {/* Base "Answer" Placeholder Card */}
            <div className='absolute top-0 left-0 h-full w-full bg-black border-[1px] border-white rounded-[1rem] z-[1] flex items-center justify-center overflow-hidden'>
              <RiDoubleQuotesL className='text-red-600 absolute top-[1rem] left-[1rem] h-[1.5rem] w-[1.5rem]'/>
              <RiDoubleQuotesR className='text-red-600 absolute bottom-[1rem] right-[1rem] h-[1.5rem] w-[1.5rem]'/>
              <h1 className='text-[5rem] md:text-[9rem] font-bold '>
                A<span className='text-[1.5rem] md:text-[2rem] text-red-600'>nswer</span>
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* --- CONTACT PAGE --- */}
      <div className='contactPage min-h-screen w-full bg-black text-white flex flex-col items-center justify-center py-16 md:py-0'>
        
        {/* Top Info Section */}
        <div className='w-[80%] md:w-[57rem] lg:w-[70rem] max-w-full bg-red- border-white border-b-[2px] pb-10 md:pb-0'>
          <div className='w-full bg-red- font-semibold leading-[3rem] md:leading-[4rem] text-center md:text-left mb-10 md:mb-0 md:h-[10rem] flex flex-col justify-center'>
            <h1 className='text-[3rem] md:text-[4rem]'>
              Lets <span className='font-mono tracking-tighter inline-block text-red-600 font-bold'>build</span>
            </h1>
            <h1 className='text-[2.2rem] md:text-[4rem]'>Incredible Work Together</h1>
          </div>
          
          <div className='w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 md:h-[8rem] pb-6 md:pb-0'>
            <div className='flex flex-col items-center md:items-start justify-center'>
              <div className='text-gray-400 mb-1 text-[1rem] md:text-[1.2rem]'>Email</div>
              <div className='text-[1.1rem] md:text-[1.4rem] break-all'>hamzajuttb333777@gmail.com</div>
            </div>
            
            <div className='flex flex-col items-center md:items-start justify-center'>
              <div className='text-gray-400 mb-1 text-[1rem] md:text-[1.2rem]'>Call me</div>
              <div className='text-[1.1rem] md:text-[1.4rem] pointer-events-none'>
                <h1 className='hover:text-red-600 transition-all ease-linear duration-100 pointer-events-auto'>
                  <a href="https://wa.me/+923214325393" target="_blank" rel="noopener noreferrer">
                    Book me
                  </a>
                </h1>
              </div>
            </div>
            
            <div className='flex flex-col items-center md:items-start justify-center'>
              <div className='text-gray-400 mb-2 text-[1rem] md:text-[1.2rem]'>Social</div>
              <div className='text-[1.4rem] flex gap-[1rem]'>
                <div className='h-[2.5rem] w-[2.5rem] md:h-[2rem] md:w-[2rem] bg-red-600 rounded-full flex items-center justify-center hover:bg-white hover:text-red-600 transition-all cursor-pointer'>
                  <a href="https://www.linkedin.com/in/yourprofile/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                </div>
                <div className='h-[2.5rem] w-[2.5rem] md:h-[2rem] md:w-[2rem] bg-red-600 rounded-full flex items-center justify-center hover:bg-white hover:text-red-600 transition-all cursor-pointer'>
                  <a href="https://www.instagram.com/hamza_jutt04/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                </div>
                <div className='h-[2.5rem] w-[2.5rem] md:h-[2rem] md:w-[2rem] bg-red-600 rounded-full flex items-center justify-center hover:bg-white hover:text-red-600 transition-all cursor-pointer'>
                  <a href="https://github.com/hamzajutt333777-bit" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer Section */}
        <div className=' md:w-[57rem] sm:w-[60rem] lg:w-[70rem] max-w-full pt-10 md:pt-0 bg-red-'>
          <div className='w-full flex flex-col md:flex-row md:h-[6rem]'>
            <div className='w-full md:w-1/2 flex flex-col items-center md:items-start justify-end gap-2 mb-8 md:mb-0'>
              <div className='text-[1rem] md:text-[1.2rem] text-gray-400'>Menu</div>
              <div className='text-[1.2rem] md:text-[1.5rem] flex gap-[2rem] md:gap-[5rem]'>
                <h1 onClick={() => scrollToPercent(36)} className='cursor-pointer hover:text-red-600 transition-all'>Skills</h1>
                <h1 onClick={() => scrollToPercent(45.3)} className='cursor-pointer hover:text-red-600 transition-all'>Services</h1>
                <h1 onClick={() => scrollToPercent(88.5)} className='cursor-pointer hover:text-red-600 transition-all'>FAQ</h1>
              </div>
            </div>
          </div>
          
          <div className='w-full md:translate-y-[6rem] lg:translate-y-[2rem] flex justify-center md:justify-end md:h-[12rem] font-bold tracking-widest text-red-600 overflow-hidden leading- mt-10 md:mt-0'>
            <h1 className='text-[3rem] lg:text-[5rem] md:text-[4rem] text-center uppercase lg:translate-y-[5rem] font-extrabold tracking-[0.1rem]'>Let<span className='text-[2rem] translate-x-[-0.5rem] inline-block'>s</span> connect</h1>
          </div>
        </div>
        
      </div>
    </div>
  )
}
export default H
