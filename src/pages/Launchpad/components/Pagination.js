import React from 'react';
import LeftArrowPagination from '../../../asset/svg/LeftArrowPagination.svg';
import RightArrowPagination from '../../../asset/svg/RightArrowPagination.svg';

const Pagination = ({className}) => {
  return (
    <div className={`flex flex-row justify-end items-center ${className}`}>
      <div className='flex flex-row justify-center items-center max-w-[300px]'>
        <a href="#" className="mr-4">
          <img src={LeftArrowPagination} className='' />
        </a>
        <a href="#" aria-current="page"
          className="w-[36px] h-[40px] rounded flex flex-row justify-center items-center text-white mx-2 bg-primary"
        > 1 </a>
        <a href="#"
          className="w-[36px] h-[40px] rounded flex flex-row justify-center items-center text-white mx-2"
        > 2 </a>
        <span className="w-[36px] h-[40px] rounded flex flex-row justify-center items-center text-white mx-2">
          ...
        </span>
        <a href="#"
          className="w-[36px] h-[40px] rounded flex flex-row justify-center items-center text-white mx-2"
        > 5 </a>
        <a href="#" className="ml-4">
          <img src={RightArrowPagination} className='' />
        </a>
      </div>
    </div>
  )
}

export default Pagination;