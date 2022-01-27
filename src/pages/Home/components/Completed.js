import React from 'react';
import Button from '../../../common/Button';
import { ReactComponent as Edit } from '../../../asset/svg/Edit.svg';


const Completed = () => {

  const renderProjectCard = (icon) => {
    return (
      <div className='px-[16px] py-[24px] bg-[#37354D] rounded w-full h-fit sm:w-[37%]'>
        {icon && <div className='flex flex-col items-end pb-[20px] pt-[4px]'>
          <Edit />
        </div>}
        <h3 className='text-[#F6F5FF] pb-2'>
          AstroGenetics
        </h3>
        <p className='text-[16px] leading-[28px] pb-[16px] text-[#FFFFFF]'>
          NFT Collection Name  are 8,888 unique NFT name on the NEAR blockchain. 69% ...
        </p>
        <div className='flex flex-row pb-[24px] gap-5'>
          <div className='flex-1 space-y-2'>
            <p className='text-[16px] leading-[28px] text-[#E8E6FF]'>
              Launch Coundown
            </p>
            <p className='text-[18px] leading-[28px] text-[#FFFFFF]'>
              12h : 25m : 10s
            </p>
          </div>
          <div className='flex-1 space-y-2'>
            <p className='text-[16px] leading-[28px] text-[#E8E6FF]'>
              Minting Price
            </p>
            <p className='text-[18px] leading-[28px] text-[#FFFFFF]'>
              1 NEAR
            </p>
          </div>
        </div>
        <div className='w-full'>
          <Button type='solid' className='px-2 py-2 w-full' onClick={() => { }}>View Summary</Button>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className='pb-[32px] px-4 flex flex-col lg:flex-row gap-[24px] lg:pl-[70px] lg:pr-13'>
        {renderProjectCard('icon')}
        {renderProjectCard()}
      </div>
    </>
  )
}

export default Completed;