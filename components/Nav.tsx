import { Menu, Transition } from "@headlessui/react";
import React, { useEffect, useRef, useState } from "react";
import MenuButton from "./MenuButton";
import { Tween, Reveal } from "react-gsap";
import { useLocomotiveScroll } from "react-locomotive-scroll";

const Nav = ({ data }: any) => {
  const { scroll } = useLocomotiveScroll();
  const [scrollInit, setscrollInit] = useState(false);
  const [onTop, setonTop] = useState(true);
  const ref = useRef<HTMLElement>(null);

  const goToWork = (event: React.MouseEvent) => {
    event.preventDefault();
    scroll && scroll.scrollTo("#work");
  };
  const goToAbout = (event: React.MouseEvent) => {
    event.preventDefault();
    scroll && scroll.scrollTo("#about");
  };
  const goToContact = (event: React.MouseEvent) => {
    event.preventDefault();
    scroll && scroll.scrollTo("#contact");
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (scroll)
        if (!scrollInit) {
          scroll.on("scroll", (args: any) => {
            if (args.scroll.y >= 100) {
              setonTop(false);
            } else {
              setonTop(true);
            }
          });
          setscrollInit(true);
        }
    }
  }, [scroll]);

  useEffect(() => {
    if (onTop) {
      if (ref.current) {
        ref.current.style.transform = " none";
      }
    } else {
      if (ref.current) {
        ref.current.style.transform = " translate(0px, -5rem)";
        ref.current.style.transitionDuration = "500ms";
        ref.current.style.transitionProperty = "transform";
        ref.current.style.transitionTimingFunction =
          "cubic-bezier(0.4, 0, 0.2, 1)";
      }
    }
  }, [onTop]);

  return (
    <Reveal>
      <Tween
        from={{ opacity: 0, y: "-1rem" }}
        to={{ opacity: 1, y: "0rem" }}
        duration={1}
      >
        <nav ref={ref} className={`relative overflow-hidden`}>
          <div className={`font-medium text-3xl `}>{data.logo}</div>
          <div className={`menu relative flex justify-center items-center`}>
            <Menu>
              <Menu.Button className="absolute right-[-3px] z-20 m-0 mt-[0.15rem]">
                {({ open }) => <MenuButton open={open} />}
              </Menu.Button>
              <Transition
                enter="transition duration-1000 ease-out"
                enterFrom="transform translate-x-full opacity-90"
                enterTo="transform translate-x-0 opacity-100"
                leave="transition duration-600 ease-in"
                leaveFrom="transform scale-100 translate-x-0 opacity-100"
                leaveTo="transform scale-95 translate-x-full opacity-0"
                className="lg:relative lg:w-full lg:h-auto lg:right-12  fixed top-0  right-0 w-screen h-screen bg-black z-10"
              >
                <Menu.Items className="flex lg:flex-row lg:gap-0 flex-col justify-center items-center h-full gap-10 ">
                  <Menu.Item>
                    <button className="nav-link text-xl" onClick={goToWork}>
                      {data.linkFirst}
                    </button>
                  </Menu.Item>
                  <Menu.Item>
                    <button className="nav-link text-xl" onClick={goToAbout}>
                      {data.linkSecond}
                    </button>
                  </Menu.Item>
                  <Menu.Item>
                    <button className="nav-link text-xl" onClick={goToContact}>
                      {data.linkThird}
                    </button>
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </nav>
      </Tween>
    </Reveal>
  );
};

export default Nav;
