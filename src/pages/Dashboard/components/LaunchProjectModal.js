import React, { useState } from 'react';
import Button from '../../../common/Button';
import { XIcon } from '@heroicons/react/outline';
import { useNavigate } from 'react-router-dom';

const LaunchProjectModal = ({ setShowModal }) => {
  const [check, setCheck] = useState(false);
  const navigate = useNavigate();
  return (
    <div className='fixed top-0 left-0 w-full h-full grid place-items-center z-20'>
      <div
        className='fixed top-0 left-0 w-full h-full'
        onClick={() => {
          setShowModal(false);
        }}
        style={{ background: '#373B3D', opacity: ' 0.7' }}
      ></div>
      <div className='relative max-w-2xl bg-background p-3 md:p-14 mx-3 my-8 rounded-md bg-opacity-100 z-10'>
        <button
          className='absolute -top-8 right-1 rounded-full p-1 bg-background text-xs flex place-items-center'
          onClick={() => {
            setShowModal(false);
          }}
        >
          <XIcon className='w-4 text-gray-700' />
        </button>
        <h2 className=''>Before You Launch!</h2>
        <div className='mt-10'>
          <div className='text-secondaryMedium'>
            Please, confirm the details of your generative NFT project before
            moving on to launch. Once you launch and confirm on your the NEAR
            blockchain, you won’t be able to make any changes.
          </div>
          <br />
          <div className='text-secondaryMedium'>
            When you launch your project and minting has begin, the minting
            funds automatically go to your wallet (with a 5% fee to the AstroGen
            wallet).
          </div>
        </div>

        <div className='relative flex items-start mt-5'>
          <div className='flex items-center h-5'>
            <input
              id='comments'
              aria-describedby='comments-description'
              name='comments'
              type='checkbox'
              checked={check}
              onChange={() => {
                setCheck(!check);
              }}
              className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded'
            />
          </div>
          <div className='ml-3'>
            <p id='comments-description' className='body text-secondaryDark'>
              I confirm that I have read, understand, and agree to the above
              policy and procedure for launch of my project.
            </p>
          </div>
        </div>

        <Button
          type='primary'
          className='w-full text-center mt-7'
          disabled={!check}
          onClick={() => {
            navigate('/project-detail');
          }}
        >
          Launch
        </Button>

        <Button
          type='outline'
          className='w-full text-center text-gray-700 border-0 mt-7'
          onClick={() => {
            setShowModal(false);
          }}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default LaunchProjectModal;
