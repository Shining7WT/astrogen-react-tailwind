import React from 'react';
import Logo from '../../../asset/images/Logo.png';
import Button from '../../../common/Button';

const MenuItem = ({ type, item }) => {
  return (
    <div className='px-4 pt-6 pb-4 bg-secondaryMedium w-full max-w-[397px] rounded'>
      <div className='flex flex-row justify-end'>
        <img src={Logo} alt='logo' />
      </div>
      <h3 className='text-white my-2'>{item.title}</h3>
      <p className='body2 !text-[#F6F5FF]'>{item.description}</p>
      <div className='flex flex-col md:flex-row justify-between items-center my-6'>
        {
          type === 1 && <div className='flex-1 flex-col justify-start items-start w-full md:w-auto'>
            <div className='flex-1 flex items-center h-[44px] gap-[8px]'>
              <div className="flex-1 bg-white h-[28px] rounded">
                <div className="bg-gradient-to-b from-from-blue to-to-blue h-[28px] rounded-l" style={{ width: '12%' }}></div>
              </div>
              <div className='w-[46px]'>
                <span className='text-[16px] leading-[28px] text-[#F6F5FF] inline'>12%</span>
              </div>
            </div>
            <h4 className='text-white'>{item.mintedAmount}/8888</h4>
          </div>
        }
        {
          (type === 2 || type === 3) && <div className='flex-1 flex-col justify-start items-start w-full md:w-auto'>
            <p className='label !text-[#E8E6FF]'>Minting Ended</p>
            <h4 className='text-white'>Wed, Dec 29, 2021</h4>
          </div>
        }
        <div className='flex flex-col justify-start items-start pl-0 md:pl-2 xl:pl-12 pt-4 md:pt-0 w-full md:w-auto'>
          <p className='label !text-[#E8E6FF]'>Minting Price</p>
          <h4 className='text-white'>{item.price} NEAR</h4>
        </div>
      </div>
      <p className='body2 !text-[#F6F5FF] mb-6'>Created by: {item.createdBy}</p>
      {
        type === 1 &&
        <Button
          type='solid'
          className="w-full text-[20px]"
          onClick={() => { }}
        >
          Mint
        </Button>
      }
      {
        type === 2 &&
        <div className='h-16 flex flex-row justify-center items-center'>
          <h3 className='text-white'>12h : 25m : 10s</h3>
        </div>
      }
      {
        type === 3 &&
        <Button
          type='solid'
          className="w-full text-[20px] !bg-[#B7B3FF] !border-[#B7B3FF]"
          onClick={() => { }}
        >
          Minting Has Ended
        </Button>
      }
    </div>
  )
}

export default MenuItem;