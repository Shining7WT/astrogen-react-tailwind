import React, { useState } from 'react';
import Button from '../../../common/Button';
import UnauthorizedModal from './UnauthorizedModal';

const Main = ({ setCurrentState }) => {

  const [showModal, setShowModal] = useState(false);

  return (
    <>
     <div className='px-0 md:px-12 lg:px-24 w-full max-w-7xl'>
        <div className='bg-white rounded-md h-[75vh]'>
          <div className='flex flex-col items-center text-center pt-[176px]'>
            <h3 className='pb-2'>Welcome to AstroGen</h3>
            <p className='body2 pb-4'>
                All is set to create your Generative NFT <br /> Collection With Zero Code.
            </p>
            <Button type='solid' onClick={() => setShowModal(true)}>Login With My Wallet</Button>
          </div>
        </div>
      </div>
      { showModal && <UnauthorizedModal setShowModal={setShowModal} /> }
    </>
  )
}

export default Main;