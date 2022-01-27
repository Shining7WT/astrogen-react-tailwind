import React from 'react';
import Button from '../../common/Button';

const ProjectDashboard = () => {
  return (
    <>
     <div className='px-0 md:px-12 lg:px-24 w-full max-w-7xl'>
        <div className='w-full flex justify-end gap-8 py-8 px-4 md:px-0'>
          <div className='block'>
            <Button type='outline' onClick={() => {}}>
                Connect My Wallet
            </Button>
          </div>
        </div>
        <div className='bg-white rounded-md h-[75vh]'>
          <div className='flex flex-col items-center text-center pt-[176px]'>
            <h3 className='pb-2'>Welcome to AstroGen</h3>
            <p className='body2 pb-4'>
                All is set to create your Generative NFT <br /> Collection With Zero Code.
            </p>
            <Button type='solid' onClick={() => {}}>Login With My Wallet</Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectDashboard;