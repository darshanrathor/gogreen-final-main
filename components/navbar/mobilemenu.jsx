import Image from "next/image";
import Link from "next/link";

export default function Mobilemenu({ transition, passclose }) {
  return (
    <div
      className={`fixed flex justify-between flex-col bg-[#184029]  z-30 top-0 left-0 w-full h-full transition-all duration-200 ease-linear ${transition}`}
    >
      <div className=" pt-5 flex flex-col gap-5">
        <div className="flex px-5 justify-between items-center ">
          <div className="w-[150px]">
            <Image
              width={100}
              height={60}
              layout="responsive"
              src="/imgs/white.png"
            />
          </div>
          <button
            onClick={passclose}
            className="text-white  hover:bg-[#E6FCE0] hover:text-zinc-800 p-1.5 rounded-full "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="flex divide-y px-5 divide-green-900 flex-col">
          <Navlink
            onclick={passclose}
            text="Clay ganesha"
            link="/clay-ganesha"
          />
          {/*<Navlink
            onclick={passclose}
            text="Paper ganesha"
            link="/paper-ganesha"
  />*/}
          <Navlink
            onclick={passclose}
            text="Plant ganesha"
            link="/plant-ganesha"
          />
          <Navlink onclick={passclose} text="Cart" link="/cart" />
          <Navlink onclick={passclose} text="contact us" link="/contact" />
          {/* <Navlink onclick={passclose} text="Login / signup" link="/login" /> */}
          <div className="pt-10 pb-5">
            <h6 className="text-[#A2F578] md:text-xl text-lg">
              Follow us on :
            </h6>
            <div className="flex mt-4 items-center justify-start gap-x-5 w-full">
              <Link
                legacyBehavior
                href="https://api.whatsapp.com/send?phone=918169882692"
              >
                <a className="">
                  <div className="bg-white group hover:bg-green-500 rounded-full w-10 h-10 flex justify-center items-center   duration-200">
                    <svg
                      className="fill-black group-hover:fill-white w-6 h-6 "
                      id="Layer_1"
                      version="1.1"
                      viewBox="0 0 56.693 56.693"
                    >
                      <g>
                        <path
                          className="st0"
                          d="M46.3802,10.7138c-4.6512-4.6565-10.8365-7.222-17.4266-7.2247c-13.5785,0-24.63,11.0506-24.6353,24.6333   c-0.0019,4.342,1.1325,8.58,3.2884,12.3159l-3.495,12.7657l13.0595-3.4257c3.5982,1.9626,7.6495,2.9971,11.7726,2.9985h0.01   c0.0008,0-0.0006,0,0.0002,0c13.5771,0,24.6293-11.0517,24.635-24.6347C53.5914,21.5595,51.0313,15.3701,46.3802,10.7138z    M28.9537,48.6163h-0.0083c-3.674-0.0014-7.2777-0.9886-10.4215-2.8541l-0.7476-0.4437l-7.7497,2.0328l2.0686-7.5558   l-0.4869-0.7748c-2.0496-3.26-3.1321-7.028-3.1305-10.8969c0.0044-11.2894,9.19-20.474,20.4842-20.474   c5.469,0.0017,10.6101,2.1344,14.476,6.0047c3.8658,3.8703,5.9936,9.0148,5.9914,14.4859   C49.4248,39.4307,40.2395,48.6163,28.9537,48.6163z"
                        />
                        <path
                          className="st0"
                          d="M40.1851,33.281c-0.6155-0.3081-3.6419-1.797-4.2061-2.0026c-0.5642-0.2054-0.9746-0.3081-1.3849,0.3081   c-0.4103,0.6161-1.59,2.0027-1.9491,2.4136c-0.359,0.4106-0.7182,0.4623-1.3336,0.1539c-0.6155-0.3081-2.5989-0.958-4.95-3.0551   c-1.83-1.6323-3.0653-3.6479-3.4245-4.2643c-0.359-0.6161-0.0382-0.9492,0.27-1.2562c0.2769-0.2759,0.6156-0.7189,0.9234-1.0784   c0.3077-0.3593,0.4103-0.6163,0.6155-1.0268c0.2052-0.4109,0.1027-0.7704-0.0513-1.0784   c-0.1539-0.3081-1.3849-3.3379-1.8978-4.5706c-0.4998-1.2001-1.0072-1.0375-1.3851-1.0566   c-0.3585-0.0179-0.7694-0.0216-1.1797-0.0216s-1.0773,0.1541-1.6414,0.7702c-0.5642,0.6163-2.1545,2.1056-2.1545,5.1351   c0,3.0299,2.2057,5.9569,2.5135,6.3676c0.3077,0.411,4.3405,6.6282,10.5153,9.2945c1.4686,0.6343,2.6152,1.013,3.5091,1.2966   c1.4746,0.4686,2.8165,0.4024,3.8771,0.2439c1.1827-0.1767,3.6419-1.489,4.1548-2.9267c0.513-1.438,0.513-2.6706,0.359-2.9272   C41.211,33.7433,40.8006,33.5892,40.1851,33.281z"
                        />
                      </g>
                    </svg>
                  </div>
                </a>
              </Link>
              <Link
                legacyBehavior
                href="https://www.instagram.com/gogreenganesha/"
              >
                <a className="">
                  <div className=" group hover:bg-rose-500 bg-white rounded-full w-10 h-10 flex justify-center items-center  duration-200">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="fill-black group-hover:fill-white"
                    >
                      <path d="M512 256c-69.5 0-78.2.3-105.5 1.5-27.3 1.3-45.8 5.6-62.1 11.9-16.8 6.5-31.1 15.3-45.4 29.5s-23 28.5-29.5 45.4c-6.3 16.3-10.6 34.9-11.9 62.1-1.3 27.3-1.5 36-1.5 105.5s.3 78.2 1.5 105.5c1.3 27.2 5.6 45.8 11.9 62.1 6.5 16.8 15.3 31.1 29.5 45.4 14.2 14.2 28.5 23 45.4 29.5 16.3 6.3 34.9 10.6 62.1 11.9 27.3 1.3 36 1.5 105.5 1.5s78.2-.3 105.5-1.5c27.2-1.3 45.8-5.6 62.1-11.9 16.8-6.5 31.1-15.3 45.4-29.5 14.2-14.2 23-28.5 29.5-45.4 6.3-16.3 10.6-34.9 11.9-62.1 1.3-27.3 1.5-36 1.5-105.5s-.3-78.2-1.5-105.5c-1.3-27.2-5.6-45.8-11.9-62.1-6.5-16.8-15.3-31.1-29.5-45.4-14.2-14.2-28.5-23-45.4-29.5-16.3-6.3-34.9-10.6-62.1-11.9-27.3-1.2-36-1.5-105.5-1.5zm0 46.1c68.3 0 76.5.3 103.5 1.5 25 1.2 38.5 5.3 47.5 8.9 12 4.6 20.5 10.2 29.5 19.1 8.9 9 14.5 17.5 19.1 29.5 3.5 9 7.7 22.5 8.8 47.5 1.2 27 1.5 35.1 1.5 103.5s-.3 76.5-1.6 103.5c-1.3 25-5.5 38.5-9 47.5-4.8 12-10.2 20.5-19.2 29.5-8.9 8.9-17.6 14.5-29.4 19.1-9 3.5-22.7 7.7-47.7 8.8-27.2 1.2-35.2 1.5-103.7 1.5s-76.5-.3-103.7-1.6c-25-1.3-38.7-5.5-47.7-9-12.1-4.8-20.5-10.2-29.4-19.2-9-8.9-14.7-17.6-19.2-29.4-3.5-9-7.7-22.7-9-47.7-1-26.9-1.3-35.2-1.3-103.3 0-68.2.3-76.5 1.3-103.7 1.3-25 5.4-38.7 9-47.7 4.5-12.2 10.2-20.5 19.2-29.5 8.9-8.9 17.3-14.7 29.4-19.2 9-3.5 22.4-7.7 47.4-9 27.2-1 35.2-1.3 103.7-1.3l1 .7zm0 78.4c-72.6 0-131.5 58.9-131.5 131.5S439.4 643.5 512 643.5 643.5 584.6 643.5 512 584.6 380.5 512 380.5zm0 216.8c-47.1 0-85.3-38.2-85.3-85.3s38.2-85.3 85.3-85.3 85.3 38.2 85.3 85.3-38.2 85.3-85.3 85.3zm167.4-221.9c0 17-13.8 30.7-30.7 30.7-17 0-30.7-13.8-30.7-30.7s13.8-30.7 30.7-30.7c16.9-.1 30.7 13.7 30.7 30.7z" />
                    </svg>
                  </div>
                </a>
              </Link>
              <Link
                legacyBehavior
                href="https://www.facebook.com/profile.php?id=100024018794238"
                target="_blank"
              >
                <a className="">
                  <div className="bg-white group hover:bg-blue-500 rounded-full w-10 h-10 flex justify-center items-center duration-200">
                    <svg
                      className="group  fill-black  w-6 h-6 group-hover:fill-white"
                      enableBackground="new 0 0 56.693 56.693"
                      id="Layer_1"
                      version="1.1"
                      viewBox="0 0 56.693 56.693"
                    >
                      <path d="M40.43,21.739h-7.645v-5.014c0-1.883,1.248-2.322,2.127-2.322c0.877,0,5.395,0,5.395,0V6.125l-7.43-0.029  c-8.248,0-10.125,6.174-10.125,10.125v5.518h-4.77v8.53h4.77c0,10.947,0,24.137,0,24.137h10.033c0,0,0-13.32,0-24.137h6.77  L40.43,21.739z" />
                    </svg>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Navlink = ({ text, link, onclick }) => {
  return (
    <Link legacyBehavior href={link}>
      <a
        onClick={onclick}
        className="capitalize  hover:text-[#E6FCE0] py-3.5 text-zinc-200 font-semibold text-2xl duration-100 ease-in"
      >
        {text}
      </a>
    </Link>
  );
};
