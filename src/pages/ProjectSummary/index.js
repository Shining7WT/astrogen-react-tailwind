import React, { useState } from 'react';
import Button from '../../common/Button';
import logo from '../../asset/images/Logo.png';
import { useNavigate } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const ProjectSummary = () => {

    const navigate = useNavigate();
    const [showToast, setShowToast] = useState(0);

    const renderToast = () => {
        return (
            <div className='flex flex-col items-end pt-2'>
                <div id="toast-success" class="flex items-center w-fit max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
                    <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    </div>
                    <div class="ml-3 text-sm font-normal">Copied!</div>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className='px-0 md:px-12 lg:px-24 w-full max-w-7xl'>
                <div className='w-full flex justify-between gap-8 py-8 px-4 md:px-0'>
                    <div className='justify-start'>
                        <Button type='solid' onClick={() => navigate('/')}>
                            Back
                        </Button>
                    </div>
                    <div className='justify-end'>
                        <Button type='outline' onClick={() => { }}>
                            astrogen.near
                        </Button>
                    </div>
                </div>
                <div className='bg-white rounded-md'>
                    <div className='px-4 lg:px-14 flex flex-col lg:flex-row gap-8 lg:gap-16'>
                        <div className='pt-[40px] lg:max-w-sm'>
                            <h3 className='pb-2'>Project Summary</h3>
                            <p className='body2'>
                                This page gives you an insight into the your project summary.
                            </p>
                        </div>
                        <div className='flex flex-col lg:min-w-350px lg:mt-10 sm:pl-4'>
                            <h3 className='pb-2 invisible'>Project Summary</h3>
                            <div className='flex flex-col space-y-2'>
                                <p className='body2 !text-[#818181]'>NFT Collection Name</p>
                                <p className='body1 !text-[#565379]'>AstroGenetics</p>
                            </div>
                            <div className='pt-[24px] space-y-2'>
                                <p className='body2 !text-[#818181]'>NFT Total Supply</p>
                                <p className='body1 !text-[#565379]'>8888</p>
                            </div>
                            <div className='pt-[24px] space-y-2'>
                                <p className='body2 !text-[#818181]'>Collection Description</p>
                                <p className='body1 !text-[#565379]'>
                                    NFT Collection Name  are 6,969 unique piggies on the NEAR blockchain. 69% of royalties go to holders - let's make it fly together.
                                </p>
                            </div>
                            <div className='pt-[24px] space-y-2'>
                                <p className='body2 !text-[#818181]'>Mint Amount</p>
                                <p className='body1 !text-[#565379]'>1 NEAR</p>
                            </div>
                            <div className='pt-[24px] space-y-2'>
                                <p className='body2 !text-[#818181]'>Collection Thumbnail</p>
                                <img src={logo} className='w-[64px] h-[64px]' alt='logo' />
                            </div>
                            <div className='pt-[24px] space-y-2'>
                                <p className='body2 !text-[#818181]'>Public Launch Date</p>
                                <p className='body1 !text-[#565379]'>Sat, Dec 25, 2021</p>
                            </div>
                            <div className='pt-[24px] space-y-2'>
                                <p className='body2 !text-[#818181]'>Public Launch Time</p>
                                <p className='body1 !text-[#565379]'>23:59 PM</p>
                            </div>
                            <div className='pt-[24px] space-y-2'>
                                <p className='body2 !text-[#818181]'>End Date</p>
                                <p className='body1 !text-[#565379]'>Nil</p>
                            </div>
                            <div className='pt-[24px] space-y-2'>
                                <p className='body2 !text-[#818181]'>End Time</p>
                                <p className='body1 !text-[#565379]'>23:59 PM</p>
                            </div>
                            <div className='pt-[24px] space-y-2'>
                                <p className='body2 !text-[#818181]'>Enable Whitelisting</p>
                                <p className='body1 !text-[#565379]'>Yes</p>
                            </div>
                            <div className='pt-[24px] space-y-2'>
                                <p className='body2 !text-[#818181]'>Whitelisted Wallets</p>
                                <p className='body1 !text-[#565379]'>1000</p>
                            </div>
                            <div className='pt-[24px] space-y-2'>
                                <p className='body2 !text-[#818181]'>Mint Amount</p>
                                <p className='body1 !text-[#565379]'>0.5 NEAR</p>
                            </div>
                            <div className='pt-[24px] space-y-2'>
                                <p className='body2 !text-[#818181]'>Whitelist Allocation Supply</p>
                                <p className='body1 !text-[#565379]'>0.5 NEAR</p>
                            </div>
                            <div className='pt-[24px] space-y-2'>
                                <p className='body2 !text-[#818181]'>Private Launch Date</p>
                                <p className='body1 !text-[#565379]'>Sat, Dec 25, 2021</p>
                            </div>
                            <div className='pt-[24px] space-y-2'>
                                <p className='body2 !text-[#818181]'>Private Launch Time</p>
                                <p className='body1 !text-[#565379]'>23:59 PM</p>
                            </div>
                            <div className='pt-[24px] space-y-2'>
                                <p className='body2 !text-[#818181]'>End Date</p>
                                <p className='body1 !text-[#565379]'>Nil</p>
                            </div>
                            <div className='pt-[24px] space-y-2'>
                                <p className='body2 !text-[#818181]'>End Time</p>
                                <p className='body1 !text-[#565379]'>Nil</p>
                            </div>
                            { showToast == 1 && renderToast()}
                            <div className='pt-[24px] space-y-2'>
                                <p className='body2 !text-[#818181]'>Mint Page</p>
                                <div className='py-3 px-4 bg-background rounded flex flex-col lg:flex-row justify-between items-end lg:items-center w-full left-[-15px] top-[14px]'>
                                    <p className='body1 !text-[#565379] w-full lg:w-auto'>
                                        Astrogen.com/Collection Name
                                    </p>
                                    <CopyToClipboard text={'Astrogen.com/Collection Name'} onCopy={() => { setShowToast(1); setTimeout(() => setShowToast(0), 3000); }}>
                                        <Button
                                            className={'!py-1 px-4 mt-4 lg:mt-0'}
                                            type={'solid'}
                                        >
                                            Copy Link
                                        </Button>
                                    </CopyToClipboard>
                                </div>
                            </div>
                            { showToast == 2 && renderToast()}
                            <div className='pt-[24px] pb-[90px] space-y-2'>
                                <p className='body2 !text-[#818181]'>Embed Code</p>
                                <div className='py-3 px-4 bg-background rounded flex flex-col lg:flex-row justify-between items-end lg:items-center w-full left-[-15px] top-[14px]'>
                                    <p className='body1 !text-[#565379] w-full lg:w-auto'>
                                        Astrogen.com/Collection Name
                                    </p>
                                    <CopyToClipboard text={'Astrogen.com/Collection Name'} onCopy={() => { setShowToast(2); setTimeout(() => setShowToast(0), 3000); }}>
                                        <Button
                                            className={'!py-1 px-4 mt-4 lg:mt-0'}
                                            type={'solid'}
                                        >
                                            Copy Link
                                        </Button>
                                    </CopyToClipboard>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectSummary;