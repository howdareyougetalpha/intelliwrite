import React from "react";
import ProtoTypes from "prop-types";
import bg from "@/assets/img/bg/testimonial-bg.jpeg";
import Slider from "../common/Slider";
import TestimonialCard from "../cards/TestimonialCard";
import authorImg from "@/assets/img/avatar/av-5.png";
import authorImg2 from "@/assets/img/avatar/av-6.png";
import authorImg3 from "@/assets/img/avatar/av-7.png";
import authorImg4 from "@/assets/img/avatar/av-8.png";

function Testimonials({ className }) {
  return (
    <section
      className={`aai-testimonials pb-120 ${className}`}
      style={{ background: `url(${bg.src}) no-repeat center center/cover` }}
    >
      <div className="row justify-content-center">
        <div className="col-xl-8">
          <div className="aai-section-title mb-3 text-center mb-5">
            <h2 className="section-title">Meet our Happy Clients</h2>
          </div>
        </div>
      </div>

      <Slider
        spaceBetween={30}
        centeredSlides={true}
        className="testimoniaslSlider mb-4"
        freeMode={true}
        speed={10000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView={1}
        allowTouchMove={false}
        breakpoints={{
          1: {
            slidesPerView: 1.1,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 2.5,
          },
          1200: {
            slidesPerView: 3,
          },
          1400: {
            slidesPerView: 3.5,
          },
          1600: {
            slidesPerView: 4,
          },
          1900: {
            slidesPerView: 4.5,
          },
        }}
      >
        <TestimonialCard
          desc="They not only understand what I say but read between the lines and also give me ideas of my own."
          authorName="Kristin Watson"
          authorDesc="Medical Assistant"
          authorImg={authorImg}
        />
        <TestimonialCard
          desc="They not only understand what I say but read between the lines and also give me ideas of my own."
          authorName="Brooklyn Simmons"
          authorDesc="President of Sales"
          authorImg={authorImg2}
        />
        <TestimonialCard
          desc="They not only understand what I say but read between the lines and also give me ideas of my own."
          authorName="Annette Black"
          authorDesc="Nursing Assistant"
          authorImg={authorImg3}
        />
        <TestimonialCard
          desc="They not only understand what I say but read between the lines and also give me ideas of my own."
          authorName="Floyd Miles"
          authorDesc="Dog Trainer"
          authorImg={authorImg4}
        />
        <TestimonialCard
          desc="They not only understand what I say but read between the lines and also give me ideas of my own."
          authorName="Esther Howard"
          authorDesc="Nursing Assistant"
          authorImg={authorImg}
        />
        <TestimonialCard
          desc="They not only understand what I say but read between the lines and also give me ideas of my own."
          authorName="Kristin Watson"
          authorDesc="Medical Assistant"
          authorImg={authorImg}
        />
        <TestimonialCard
          desc="They not only understand what I say but read between the lines and also give me ideas of my own."
          authorName="Brooklyn Simmons"
          authorDesc="President of Sales"
          authorImg={authorImg2}
        />
        <TestimonialCard
          desc="They not only understand what I say but read between the lines and also give me ideas of my own."
          authorName="Annette Black"
          authorDesc="Nursing Assistant"
          authorImg={authorImg3}
        />
        <TestimonialCard
          desc="They not only understand what I say but read between the lines and also give me ideas of my own."
          authorName="Floyd Miles"
          authorDesc="Dog Trainer"
          authorImg={authorImg4}
        />
        <TestimonialCard
          desc="They not only understand what I say but read between the lines and also give me ideas of my own."
          authorName="Esther Howard"
          authorDesc="Nursing Assistant"
          authorImg={authorImg}
        />
      </Slider>
      <Slider
        spaceBetween={30}
        centeredSlides={true}
        className="testimoniaslSliderTwo"
        freeMode={true}
        speed={8000}
        autoplay={{
          delay: 0,
          reverseDirection: true,
          disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView={1}
        allowTouchMove={false}
        breakpoints={{
          1: {
            slidesPerView: 1.1,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 2.5,
          },
          1200: {
            slidesPerView: 3,
          },
          1400: {
            slidesPerView: 3.5,
          },
          1600: {
            slidesPerView: 4,
          },
          1900: {
            slidesPerView: 4.5,
          },
        }}
      >
        <TestimonialCard
          desc="They not only understand what I say but read between the lines and also give me ideas of my own."
          authorName="Kristin Watson"
          authorDesc="Medical Assistant"
          authorImg={authorImg}
        />
        <TestimonialCard
          desc="They not only understand what I say but read between the lines and also give me ideas of my own."
          authorName="Brooklyn Simmons"
          authorDesc="President of Sales"
          authorImg={authorImg2}
        />
        <TestimonialCard
          desc="They not only understand what I say but read between the lines and also give me ideas of my own."
          authorName="Annette Black"
          authorDesc="Nursing Assistant"
          authorImg={authorImg3}
        />
        <TestimonialCard
          desc="They not only understand what I say but read between the lines and also give me ideas of my own."
          authorName="Floyd Miles"
          authorDesc="Dog Trainer"
          authorImg={authorImg4}
        />
        <TestimonialCard
          desc="They not only understand what I say but read between the lines and also give me ideas of my own."
          authorName="Esther Howard"
          authorDesc="Nursing Assistant"
          authorImg={authorImg}
        />
        <TestimonialCard
          desc="They not only understand what I say but read between the lines and also give me ideas of my own."
          authorName="Kristin Watson"
          authorDesc="Medical Assistant"
          authorImg={authorImg}
        />
        <TestimonialCard
          desc="They not only understand what I say but read between the lines and also give me ideas of my own."
          authorName="Brooklyn Simmons"
          authorDesc="President of Sales"
          authorImg={authorImg2}
        />
        <TestimonialCard
          desc="They not only understand what I say but read between the lines and also give me ideas of my own."
          authorName="Annette Black"
          authorDesc="Nursing Assistant"
          authorImg={authorImg3}
        />
        <TestimonialCard
          desc="They not only understand what I say but read between the lines and also give me ideas of my own."
          authorName="Floyd Miles"
          authorDesc="Dog Trainer"
          authorImg={authorImg4}
        />
        <TestimonialCard
          desc="They not only understand what I say but read between the lines and also give me ideas of my own."
          authorName="Esther Howard"
          authorDesc="Nursing Assistant"
          authorImg={authorImg}
        />
      </Slider>
    </section>
  );
}
Testimonials.propTypes = {
  className: ProtoTypes.string,
};
export default Testimonials;
