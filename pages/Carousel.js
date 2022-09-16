import React from 'react';
import Image from 'next/image'
import Carousel from 'react-bootstrap/Carousel';

function Car() {
  return (
    <Carousel>
      <Carousel.Item interval={500}>
        <Image
          className="d-block w-100"
          src="https://i.stack.imgur.com/6BHV4.jpg slide&bg=373940"
          alt="First slide"
          width={1700}
          height={300}
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={800}>
        <Image
          className="d-block w-100"
          src="https://i.ibb.co/d6SdhP6/priscilla-du-preez-Yrg5b-Nx-Ejgk-unsplash.jpg slide&bg=282c34"
          alt="Second slide"
          width={1700}
          height={300}
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Car;