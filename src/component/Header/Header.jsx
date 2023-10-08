const Header = () => {
  return (
    <div>
      <div className="carousel w-full max-h-[485px] rounded">
        <div id="slide1" className="carousel-item relative w-full ">
          <div
            className="hero lg:h-[485px]"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/gmb0dmF/alvin-mahmudov-9-Xfc-Bxf-uo-unsplash.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-2xl md:text-5xl font-bold">
                  Join Us as We Say I Do
                </h1>
                <p className="mb-5">
                  Two hearts, two lives, one love story. Please join us as we
                  embark on this beautiful journey together
                </p>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className=" md:btn md:glass">
              ❮
            </a>
            <a href="#slide2" className="md:btn md:glass">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div
            className="hero "
            style={{
              backgroundImage:
                "url(https://i.ibb.co/W0DsWdR/boss-baby-birthday-pic.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-2xl md:text-5xl font-bold">
                  Another Year of Joy
                </h1>
                <p className="mb-5">
                  Today, we celebrate another year of your incredible journey,
                  filled with laughter, love, and countless memories. Happy
                  Birthday!
                </p>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="md:btn md:glass">
              ❮
            </a>
            <a href="#slide3" className="md:btn  md:glass">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div
            className="hero "
            style={{
              backgroundImage:
                "url(https://i.ibb.co/K9sb7hM/wedding-venue1.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-2xl md:text-5xl font-bold">
                  Elevating Spaces with Elegance
                </h1>
                <p className="mb-5">
                  Transforming every space into a masterpiece of beauty and
                  creativity. Your vision, our decoration.
                </p>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="md:btn md:glass">
              ❮
            </a>
            <a href="#slide4" className="md:btn md:glass">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <div
            className="hero "
            style={{
              backgroundImage:
                "url(https://i.ibb.co/SQ1SPPR/thomas-william-OAVqa8h-Qv-WI-unsplash.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-2xl md:text-5xl font-bold">
                  Crafting Enchanting Environments
                </h1>
                <p className="mb-5">
                  Bringing dreams to life, one decoration at a time. Let your
                  imagination flourish in our beautifully adorned spaces.
                </p>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="md:btn md:glass">
              ❮
            </a>
            <a href="#slide1" className="md:btn md:glass">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
