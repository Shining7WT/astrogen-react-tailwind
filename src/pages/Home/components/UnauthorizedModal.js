import React from 'react';
import Button from '../../../common/Button';
import { ReactComponent as Warning } from '../../../asset/svg/Warn.svg';


const UnauthorizedModal = ({ setShowModal }) => {

    return (
        <div className='fixed top-0 left-0 w-full h-full grid place-items-center z-20'>
            <div className='fixed top-0 left-0 w-full h-full bg-[#373B3D] opacity-70'
                onClick={() => setShowModal(false) }
            ></div>
            <div className='relative max-w-2xl bg-background px-[16px] sm:px-[28px] py-[24px] mx-3 my-8 rounded-md bg-opacity-100 z-10'>
                <div className='flex flex-row gap-[22px]'>
                    <div className='inline pt-[4px]'>
                        <Warning className='w-[20px] h-[20px]'/>
                    </div>
                    <div className='flex-1'>
                        <h3 className='pb-2'>You’re Not Verified</h3>
                        <p className='body2 pb-4'>
                            It seems we do not verify you to use AstroGen or you’re using a 
                            different NEAR wallet than the one you authenticated with. 
                            If that is the case, please login with the wallet you 
                            authenticated with to have exclusive access.
                        </p>
                        <div className='flex flex-col items-end'>
                            <Button type='solid' className='px-4 py-2' onClick={() => setShowModal(false)}>Okay</Button>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UnauthorizedModal;
