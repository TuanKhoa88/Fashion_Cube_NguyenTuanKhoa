import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import imagesSlide1 from './images/slider_1.jpg'
import imagesSlide2 from './images/slider_2.jpg'
import imagesSlide3 from './images/slider_3.jpg'
import Button from 'react-bootstrap/Button';



function FsCarosel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={imagesSlide1}
                    alt="First slide"
                    style={{width: "100%", height: "500px"}}
                />
                <Carousel.Caption style={{ textAlign: "left", marginLeft: "0" }}>
                    <div >
                        <h6 style={{ color: "black" }}>SPRING / SUMMER COLLECTION 2017</h6>
                        <h2 style={{ color: "black", fontSize: "70px" }}>Get up to 30% Off</h2>
                        <h2 style={{ color: "black", fontSize: "70px" }}>New Arrivals</h2>
                    </div>
                    <Button variant="danger" style={{ marginTop: "30px" }}><h5 >Shop Now</h5></Button>{' '}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={imagesSlide2}
                    alt="First slide"
                    style={{ width: "100%", height: "500px" }}
                />
                <Carousel.Caption style={{ textAlign: "left", marginLeft: "0" }}>
                    <div >
                        <h6 style={{ color: "black" }}>SPRING / SUMMER COLLECTION 2017</h6>
                        <h2 style={{ color: "black", fontSize: "70px" }}>Get up to 30% Off</h2>
                        <h2 style={{ color: "black", fontSize: "70px" }}>New Arrivals</h2>
                    </div>
                    <Button variant="danger" style={{ marginTop: "30px" }}><h5 >Shop Now</h5></Button>{' '}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={imagesSlide3}
                    alt="First slide"
                    style={{ width: "100%", height: "500px" }}
                />
                <Carousel.Caption style={{ textAlign: "left", marginLeft: "0" }}>
                    <div >
                        <h6 style={{ color: "black" }}>SPRING / SUMMER COLLECTION 2017</h6>
                        <h2 style={{ color: "black", fontSize: "70px" }}>Get up to 30% Off</h2>
                        <h2 style={{ color: "black", fontSize: "70px" }}>New Arrivals</h2>
                    </div>
                    <Button variant="danger" style={{ marginTop: "30px" }}><h5 >Shop Now</h5></Button>{' '}
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    );
}

export default FsCarosel;