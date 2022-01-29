import React, { useState } from 'react';
import LaunchpadTabs from './components/LaunchpadTabs';
import SearchBox from './components/SearchBox';
import MenuItem from './components/MintItem';
import Pagination from './components/Pagination';

const list = [
  {
    title: 'AstroGenetics',
    description: 'AstroGenetics  are 8,888 unique NFT on the NEAR blockchain. 69% of the traits are comm...',
    mintedAmount: '1111',
    price: '1',
    createdBy: 'astrogen.near',
  },
  {
    title: 'AstroGenetics',
    description: 'AstroGenetics  are 8,888 unique NFT on the NEAR blockchain. 69% of the traits are comm...',
    mintedAmount: '1111',
    price: '1',
    createdBy: 'astrogen.near',
  },
  {
    title: 'AstroGenetics',
    description: 'AstroGenetics  are 8,888 unique NFT on the NEAR blockchain. 69% of the traits are comm...',
    mintedAmount: '1111',
    price: '1',
    createdBy: 'astrogen.near',
  },
  {
    title: 'AstroGenetics',
    description: 'AstroGenetics  are 8,888 unique NFT on the NEAR blockchain. 69% of the traits are comm...',
    mintedAmount: '1111',
    price: '1',
    createdBy: 'astrogen.near',
  },
  {
    title: 'AstroGenetics',
    description: 'AstroGenetics  are 8,888 unique NFT on the NEAR blockchain. 69% of the traits are comm...',
    mintedAmount: '1111',
    price: '1',
    createdBy: 'astrogen.near',
  },
  {
    title: 'AstroGenetics',
    description: 'AstroGenetics  are 8,888 unique NFT on the NEAR blockchain. 69% of the traits are comm...',
    mintedAmount: '1111',
    price: '1',
    createdBy: 'astrogen.near',
  }
]

const Launchpad = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [searchText, setSearchText] = useState('');
  return (
    <>
      <div className='mx-4 my-10 w-full max-w-[1440px]'>
        <div className='bg-secondaryDark px-6 lg:px-12 xl:px-24 py-16 lg:py-20'>
          <div className='flex flex-row justify-end'>
            <SearchBox
              searchText={searchText}
              setSearchText={(e) => setSearchText(e.target.value)}
            />
          </div>
          <div className='w-full py-10 overflow-x-auto'>
            <LaunchpadTabs
              setActiveTab={setActiveTab}
              activeTab={activeTab}
            />
          </div>
          <div className='flex flex-row justify-center items-center'>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
              {
                list.map((item, index) => {
                  return (
                    <MenuItem
                      key={index}
                      type={activeTab}
                      item={item}
                    />
                  )
                })
              }
            </div>
          </div>
          <Pagination className={`mt-8`} />
          <div className='flex flex-col justify-center items-center mt-20'>
            <h3 className='text-background'>AstroGen</h3>
            <p className='body2 !text-[#B7B3FF]'>Copyright 2022</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Launchpad;