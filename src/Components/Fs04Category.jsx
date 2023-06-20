import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import bannerImg1 from './images/banner_1.jpg';
import bannerImg2 from './images/banner_2.jpg';
import bannerImg3 from './images/banner_3.jpg';
import './Fs04Category.scss'

export default function FsCategory() {
    const [isVisible, setIsVisible] = useState(false);
    const [ref, inView] = useInView({ triggerOnce: true });

    useEffect(() => {
        if (inView) {
            setIsVisible(true);
        }
    }, [inView]);

    return (
        <div ref={ref} className={`container-products ${isVisible ? 'fade-in' : ''}`} style={{ display: "flex", justifyContent: "center", gap: "30px", marginTop: "30px", marginBottom: "60px" }}>
            <div className='bg-image'>
                <img src={bannerImg1} className='img-fluid' alt='Sample' />
                <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
                    <div className='d-flex justify-content-center align-items-center h-100'>
                        <p className='text-white mb-0 banner-text' style={{ fontWeight: "bold", fontSize: "30px" }}>WOMEN'S</p>
                    </div>
                </div>
            </div>
            <div className='bg-image'>
                <img src={bannerImg2} className='img-fluid' alt='Sample' />
                <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
                    <div className='d-flex justify-content-center align-items-center h-100'>
                        <p className='text-white mb-0 banner-text' style={{ fontWeight: "bold", fontSize: "30px" }}>ACCESSORIES'S</p>
                    </div>
                </div>
            </div>
            <div className='bg-image'>
                <img src={bannerImg3} className='img-fluid' alt='Sample' />
                <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
                    <div className='d-flex justify-content-center align-items-center h-100'>
                        <p className='text-white mb-0 banner-text' style={{ fontWeight: "bold", fontSize: "30px" }}>MEN'S</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

// import React, { useEffect, useRef, useState } from 'react';
// import { useScrollTrigger } from 'react-scroll-trigger';
// import bannerImg1 from './images/banner_1.jpg';
// import bannerImg2 from './images/banner_2.jpg';
// import bannerImg3 from './images/banner_3.jpg';

// export default function FsCategory() {
//     const [isVisible, setIsVisible] = useState(false);
//     const triggerRef = useRef(null);
//     const trigger = useScrollTrigger({ triggerTarget: triggerRef.current, once: true });

//     useEffect(() => {
//         if (trigger) {
//             setIsVisible(true);
//         }
//     }, [trigger]);

//     return (
//         <div ref={triggerRef} className={`container-products ${isVisible ? 'fade-in' : ''}`} style={{ display: "flex", justifyContent: "center", gap: "30px", marginTop: "30px", marginBottom: "60px" }}>
//             <div className='bg-image'>
//                 <img src={bannerImg1} className='img-fluid' alt='Sample' />
//                 <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
//                     <div className='d-flex justify-content-center align-items-center h-100'>
//                         <p className='text-white mb-0 banner-text' style={{ fontWeight: "bold", fontSize: "30px" }}>WOMEN'S</p>
//                     </div>
//                 </div>
//             </div>
//             <div className='bg-image'>
//                 <img src={bannerImg2} className='img-fluid' alt='Sample' />
//                 <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
//                     <div className='d-flex justify-content-center align-items-center h-100'>
//                         <p className='text-white mb-0 banner-text' style={{ fontWeight: "bold", fontSize: "30px" }}>ACCESSORIES'S</p>
//                     </div>
//                 </div>
//             </div>
//             <div className='bg-image'>
//                 <img src={bannerImg3} className='img-fluid' alt='Sample' />
//                 <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
//                     <div className='d-flex justify-content-center align-items-center h-100'>
//                         <p className='text-white mb-0 banner-text' style={{ fontWeight: "bold", fontSize: "30px" }}>MEN'S</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// import React, { useEffect, useState } from 'react';
// import bannerImg1 from './images/banner_1.jpg';
// import bannerImg2 from './images/banner_2.jpg';
// import bannerImg3 from './images/banner_3.jpg';
// import './Fs04Category.scss';

// export default function FsCategory() {
//     const [fadeIn, setFadeIn] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => {
//             const scrollPosition = window.innerHeight + window.scrollY;
//             const elementPosition = document.querySelector('.container-products').offsetTop;
//             if (scrollPosition > elementPosition) {
//                 setFadeIn(true);
//             }
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     return (
//         <div className={`container-products ${fadeIn ? 'fade-in' : ''}`}>
//             <div className='bg-image'>
//                 <img src={bannerImg1} className='img-fluid' alt='Sample' />
//                 <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
//                     <div className='d-flex justify-content-center align-items-center h-100'>
//                         <p className='text-white mb-0 banner-text' style={{ fontWeight: 'bold', fontSize: '30px' }}>
//                             WOMEN'S
//                         </p>
//                     </div>
//                 </div>
//             </div>
//             <div className='bg-image'>
//                 <img src={bannerImg2} className='img-fluid' alt='Sample' />
//                 <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
//                     <div className='d-flex justify-content-center align-items-center h-100'>
//                         <p className='text-white mb-0 banner-text' style={{ fontWeight: 'bold', fontSize: '30px' }}>
//                             ACCESSORIES'S
//                         </p>
//                     </div>
//                 </div>
//             </div>
//             <div className='bg-image'>
//                 <img src={bannerImg3} className='img-fluid' alt='Sample' />
//                 <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
//                     <div className='d-flex justify-content-center align-items-center h-100'>
//                         <p className='text-white mb-0 banner-text' style={{ fontWeight: 'bold', fontSize: '30px' }}>
//                             MEN'S
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }



// import React from 'react'
// import bannerImg1 from './images/banner_1.jpg'
// import bannerImg2 from './images/banner_2.jpg'
// import bannerImg3 from './images/banner_3.jpg'


// export default function FsCategory() {
    
//     return (
//         <div className='container-products' style={{ display: "flex", justifyContent: "center", gap: "30px", marginTop : "30px", marginBottom: "60px"}}>
//             <div className='bg-image'>
//                 <img src={bannerImg1} className='img-fluid' alt='Sample' />
//                 <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
//                     <div className='d-flex justify-content-center align-items-center h-100'>
//                         <p className='text-white mb-0 banner-text' style={{ fontWeight: "bold", fontSize: "30px" }}>WOMEN'S</p>
//                     </div>
//                 </div>
//             </div>
//             <div className='bg-image'>
//                 <img src={bannerImg2} className='img-fluid' alt='Sample' />
//                 <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
//                     <div className='d-flex justify-content-center align-items-center h-100'>
//                         <p className='text-white mb-0 banner-text' style={{ fontWeight: "bold", fontSize: "30px" }}>ACCESSORIES'S</p>
//                     </div>
//                 </div>
//             </div>
//             <div className='bg-image'>
//                 <img src={bannerImg3} className='img-fluid' alt='Sample' />
//                 <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
//                     <div className='d-flex justify-content-center align-items-center h-100'>
//                         <p className='text-white mb-0 banner-text' style={{ fontWeight: "bold", fontSize : "30px" }}>MEN'S</p>
//                     </div>
//                 </div>
//             </div>
//         </div>

//     )
// }
