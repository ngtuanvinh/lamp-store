import Image from "next/image";
import logo from "@/public/moonlamplogo.png";
import facebook from "@/public/facebook.svg";
import instagram from "@/public/instagram.svg";

const Footer = () => {
  return (
    <footer className="border-t py-8">
      <div className="w-full">
        <div className="flex">
          <div className="w-full">
            <div className="flex flex-col items-center justify-center">
              <Image
                src={logo}
                width={200}
                height={200}
                alt="logo"
                className="mt-2"
              />
              <ul className="flex justify-center mt-8 gap-3">
                <li>
                  <div
                    className="w-11 h-11 rounded flex items-center justify-center 
                  text-lg bg-gray-100 text-secondary hover:text-white hover:bg-primary transition-all"
                  >
                    <Image
                      src={facebook}
                      width={25}
                      height={25}
                      alt="facebook"
                    />
                  </div>
                </li>
                <li>
                  <div
                    className="w-11 h-11 rounded flex items-center justify-center 
                  text-lg bg-gray-100 text-secondary hover:text-white hover:bg-primary transition-all"
                  >
                    <Image
                      src={instagram}
                      width={25}
                      height={25}
                      alt="facebook"
                    />
                  </div>
                </li>
              </ul>
              <p className="mt-8">© Copyright All Rights Reserved </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
