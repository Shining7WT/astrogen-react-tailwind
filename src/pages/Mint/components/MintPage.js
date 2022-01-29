import React, { useState } from 'react';
import { ReactComponent as Arrow } from '../../../asset/svg/Arrow.svg';
import NFT from '../../../asset/images/Nft.png';

const MintPage = () => {
  const [handleMint, setHandleMint] = useState(false);
  return (
    <div className='flex flex-col justify-center items-start lg:flex-row'>
      <div className='w-full lg:w-[calc(50%-23px)] px-4 lg:px-[60px] xl:px-[100px] py-[80px] flex flex-col items-center lg:items-start'>
        <div className='max-w-[328px] md:max-w-[398px]'>
          <h1 className='md:text-[40px]'>AstroGenetics</h1>
          <h3 className='text-secondaryMedium mt-6'>
          AstroGenetics  are 8,888 unique NFT items on the NEAR blockchain. 69% of royalties go to holders - let's make it fly together. Mint before it is all gone!! wagmi
          </h3>
          {
            handleMint ?
              <>
                <div className='flex flex-row justify-between items-end text-secondaryMedium my-6 mx-4'>
                  <div className='flex flex-col justify-center items-center'>
                    <p className='body2 !text-secondary mb-4'>Days</p>
                    <h3 className=''>82</h3>
                  </div>:
                  <div className='flex flex-col justify-center items-center'>
                    <p className='body2 !text-secondary mb-4'>Hours</p>
                    <h3 className=''>21</h3>
                  </div>:
                  <div className='flex flex-col justify-center items-center'>
                    <p className='body2 !text-secondary mb-4'>Minutes</p>
                    <h3 className=''>54</h3>
                  </div>:
                  <div className='flex flex-col justify-center items-center'>
                    <p className='body2 !text-secondary mb-4'>Seconds</p>
                    <h3 className=''>34</h3>
                  </div>
                </div>
              </>
              :
              <div
                className='relative w-44 h-44 bg-primary rounded-full flex flex-row justify-center items-center mt-5 cursor-pointer'
                onClick={() => setHandleMint(true)}
              >
                <h3 className='!text-white uppercase'>Mint nft</h3>
                <Arrow className='absolute top-0 bottom-0 my-auto right-[-45px]' />
              </div>
          }
        </div>
      </div>
      <div className='w-full lg:w-[calc(50%-23px)] pt-0 pb-[80px] lg:py-[80px] px-0 md:px-8 lg:px-[40px] xl:px-[80px] flex flex-col items-center lg:items-start'>
        <div className='max-w-[398px]'>
          <img alt="NFT" src={NFT} className="" />
          <div className='bg-white flex flex-col p-4 gap-6'>
            <div>
              <h4 className='!text-secondary'>Minting Price</h4>
              <h3 className=''>1 NEAR</h3>
            </div>
            <div>
              <h4 className='!text-secondary'>AstroGenetics Minted</h4>
              <h3 className=''>1000/8888</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MintPage;