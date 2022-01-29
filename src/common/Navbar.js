import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import Hamburger from 'hamburger-react';

import astroGenLogo from '../asset/images/AstroGenLogo.png';
import Button from './Button';

const Navbar = (props) => {
  // const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="bg-primary">
        <div className="bg-primary flex items-center justify-center">
          <div className="w-full max-w-7xl flex relative place-items-center justify-between px-4 lg:px-24 py-2">
            <img src={astroGenLogo} alt="logo" />
            {props.walletConnected ? (
              <Button
                type="solid"
                className="bg-white !text-primary"
                onClick={() => {}}
              >
                Connect Wallet
              </Button>
            ) : (
              <Button
                type="outline"
                className="text-white border-white"
                onClick={() => {}}
              >
                astrogen.near
              </Button>
            )}
            {/* <div className='lg:hidden'> */}
            {/* <Hamburger toggled={isOpen} toggle={setOpen} /> */}
            {/* </div> */}
          </div>
        </div>
        {/* {isOpen ? (
          <div className='h-screen w-full px-14 py-6 bg-white fixed z-20'>
            <Button type='outline' className='w-  full !text-primary' onClick={() => { }}>
              Create NEAR Wallet
            </Button>
          </div>
        ) : null} */}
        <div className="flex justify-center">{props.children}</div>
      </div>
    </>
  );
};

export default Navbar;
