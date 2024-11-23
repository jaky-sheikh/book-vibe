import React from 'react';
import bannerImg from '../../assets/books.jpg';
const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-[500px] rounded-2xl mb-10">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={bannerImg}
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>
      <br />
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;