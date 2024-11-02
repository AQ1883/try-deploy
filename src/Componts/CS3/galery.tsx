import {
  Card,
  CardBody,
  CardHeader,
  Carousel,
  Typography,
} from "@material-tailwind/react";

export function Galery() {
  return (
    <Carousel autoplay={true} loop={true} className="rounded-xl">
    <div className="flex justify-around">
      <Card className="w-[24rem] overflow-hidden">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 rounded-none"
          >
            <img
              src="https://pbs.twimg.com/media/GZjt0_CW0AAtEZM?format=jpg&name=large"
              alt="ui/ux review check"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h4" color="blue-gray">
              Safa Project - Jeddah
            </Typography>
          </CardBody>
        </Card>
        <Card className="w-[24rem] overflow-hidden">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none"
        >
          <img
            src="https://media.licdn.com/dms/image/v2/D4D22AQFqGomEwQrYDQ/feedshare-shrink_800/feedshare-shrink_800/0/1694530531754?e=2147483647&v=beta&t=sA9HgcQyd9Tl95kr6kpEH9g4NKlngd5EKJvZ9ZUAEr8"
            alt="ui/ux review check"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h4" color="blue-gray">
          Cruise - Jeddah
          </Typography>
        </CardBody>
      </Card>
      <Card className="w-[24rem] overflow-hidden">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none"
        >
          <img
            src="https://media.licdn.com/dms/image/v2/C5622AQGC9rk-Bbyesg/feedshare-shrink_800/feedshare-shrink_800/0/1677768155266?e=2147483647&v=beta&t=dAkXeHjk_VnIQVNVvXjzk52gElHUkv89D_P0yFVAod8"
            alt="ui/ux review check"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h4" color="blue-gray">
            Aramco - Ras Tanura
          </Typography>
        </CardBody>
      </Card>
    </div>
    <div className="flex justify-around">
      <Card className="w-[24rem] overflow-hidden">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 rounded-none"
          >
            <img
              src="https://pbs.twimg.com/media/FFm2GC0XoAEI4Ul.jpg:large"
              alt="ui/ux review check"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h4" color="blue-gray">
              Basix - Jeddah 
            </Typography>
          </CardBody>
        </Card>
        <Card className="w-[24rem] overflow-hidden">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none"
        >
          <img
            src="https://pbs.twimg.com/media/Fp6DBW4XsAsQSpv?format=jpg&name=large"
            alt="ui/ux review check"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h4" color="blue-gray">
          Dar AL Riyadh - Riyadh
          </Typography>
        </CardBody>
      </Card>
      <Card className="w-[24rem] overflow-hidden">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none"
        >
          <img
            src="https://media.licdn.com/dms/image/v2/D4D22AQEukNpVLXYQDA/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1697117866814?e=1733356800&v=beta&t=ZNAWnJfWibRbglQuFBX8-XmAwJvij0C22-LRanavWwU"
            alt="ui/ux review check"
          />
        </CardHeader>
        <CardBody >
          <Typography variant="h4" color="blue-gray">
            Aramco - Yanbu
          </Typography>
        </CardBody>
      </Card>
    </div>
  </Carousel>
  );
}

export default Galery;
