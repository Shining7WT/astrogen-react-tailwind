import React from 'react';
import Button from '../../common/Button';
import MintPage from './components/MintPage';

const Mint = () => {
  return (
    <>
      <div className='w-full mt-0 md:mt-6'>
        <div className='lg:hidden w-full flex justify-end gap-8 py-8 px-4 md:px-0'>
          <div className='block'>
            <Button type='solid' onClick={() => { }}>
              Connect My Wallet
            </Button>
          </div>
        </div>
        <div className='bg-primary w-full min-h-screen'>
          <MintPage />
        </div>
      </div>
    </>
  )
}

export default Mint;