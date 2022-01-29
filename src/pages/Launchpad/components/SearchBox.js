import React from 'react';
import SearchSvg from '../../../asset/svg/Search.svg';

const SearchBox = ({
  searchText,
  setSearchText
}) => {
  return (
    <>
      <div className='relative w-full max-w-[600px] border-[2px] border-white rounded py-[14px] pl-4 md:pl-6 pr-20 md:pr-22'>
        <input 
          className='body2 !text-white bg-transparent focus:outline-none w-full' 
          placeholder='Search by project name, NFT collection, creator'
          onChange={setSearchText}
          value={searchText}
        />
        <div className='absolute top-0 bottom-0 right-0 w-16 h-14 bg-white flex flex-row justify-center items-center'>
          <img src={SearchSvg} />
        </div>
      </div>
    </>
  )
}

export default SearchBox;