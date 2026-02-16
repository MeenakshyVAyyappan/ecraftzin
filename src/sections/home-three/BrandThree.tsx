import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
// Image imports
import brand1 from '../../assets/images/brand/brand-1-1.png';
import brand2 from '../../assets/images/brand/brand-1-2.png';
import brand3 from '../../assets/images/brand/brand-1-3.png';
import brand4 from '../../assets/images/brand/brand-1-4.png';
import brand5 from '../../assets/images/brand/brand-1-5.png';
import brand6 from '../../assets/images/brand/brand-1-6.png';
import brand7 from '../../assets/images/brand/brand-1-7.png';
import brand8 from '../../assets/images/brand/brand-1-8.png';
import brand9 from '../../assets/images/brand/brand-1-9.png';
import brand10 from '../../assets/images/brand/brand-1-10.png';

// Brand data array
const brandData = [
    { id: 1, image: brand1, alt: 'Brand 1' },
    { id: 2, image: brand2, alt: 'Brand 2' },
    { id: 3, image: brand3, alt: 'Brand 3' },
    { id: 4, image: brand4, alt: 'Brand 4' },
    { id: 5, image: brand5, alt: 'Brand 5' },
    { id: 6, image: brand6, alt: 'Brand 6' },
    { id: 7, image: brand7, alt: 'Brand 7' },
    { id: 8, image: brand8, alt: 'Brand 8' },
    { id: 9, image: brand9, alt: 'Brand 9' },
    { id: 10, image: brand10, alt: 'Brand 10' },
];

const BrandThree: React.FC = () => {
    return (
        <section className="brand-one">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-3 col-lg-4 col-md-5">
                        <div className="brand-one__left">
                            <p className="brand-one__text">
                                We have <span>Been Thriving In</span> <br />10 Years
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-9 col-lg-8 col-md-7">
                        <div className="brand-one__right">
                            <div className="brand-one__carousel ">
                                <Swiper
                                    className='project-carousel'
                                    modules={[Autoplay]}
                                    spaceBetween={2}
                                    slidesPerView={3}
                                    loop={true}
                                    autoplay={{
                                        delay: 4000,
                                        disableOnInteraction: false,
                                        pauseOnMouseEnter: false,
                                    }}
                                    speed={1000}
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 1,
                                        },
                                        768: {
                                            slidesPerView: 2,
                                        },
                                        1024: {
                                            slidesPerView: 3,
                                        },
                                    }}
                                >
                                    {brandData.map((brand) => (
                                        <SwiperSlide key={`project-${brand?.id}`}>
                                            <div className="item" >
                                                <div className="brand-one__single" >
                                                    <div className="brand-one__img">
                                                        <img src={brand.image} alt={brand.alt} />
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrandThree;