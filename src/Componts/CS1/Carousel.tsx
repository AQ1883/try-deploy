import { Carousel, Typography, Button } from "@material-tailwind/react";

export function CarouselWithContent() {
  return (
    <Carousel autoplay={true} loop={true}>
      <div className="relative h-full w-full">
        <img
          src="https://pbs.twimg.com/media/FrHVDEuXoBIKJ36?format=jpg&name=4096x4096"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              KARTNGO
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              KartNGo store is a cutting-edge, self-service micro-market
              tailored for office settings. Employees can easily access a
              variety of products, such as snacks, beverages, and personal care
              items. Operating 24 hours a day, KartNGo store ensures that
              essentials are always available, enhancing workplace convenience
              at any time.
            </Typography>
            <div className="flex justify-center gap-2">
              <a href="#screen2">
                <Button size="lg" color="white">
                  MORE
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://safainv.sa/storage/2024-10-12/nfzhqcQweAAXMIXFMoTV0oKDBZIPzMqjd0dGTF92.jpg"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              KARTNGO
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              KartNGo store is a cutting-edge, self-service micro-market
              tailored for office settings. Employees can easily access a
              variety of products, such as snacks, beverages, and personal care
              items. Operating 24 hours a day, KartNGo store ensures that
              essentials are always available, enhancing workplace convenience
              at any time.
            </Typography>
            <div className="flex justify-center gap-2">
              <a href="#screen2">
                <Button size="lg" color="white">
                  MORE
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="src\assets\img.jpg"
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              KARTNGO
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              KartNGo store is a cutting-edge, self-service micro-market
              tailored for office settings. Employees can easily access a
              variety of products, such as snacks, beverages, and personal care
              items. Operating 24 hours a day, KartNGo store ensures that
              essentials are always available, enhancing workplace convenience
              at any time.
            </Typography>
            <div className="flex justify-center gap-2">
              <a href="#screen2">
                <Button size="lg" color="white">
                  MORE
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}

export default CarouselWithContent;
