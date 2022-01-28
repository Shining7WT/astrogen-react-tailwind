import React, { useState } from 'react';
import Button from '../../../common/Button';
import { useNavigate } from 'react-router-dom';

const InProgress = () => {

    const [showProjects, setShowProjects] = useState(true);
    const navigate = useNavigate();

    const renderProjectCard = () => {
        return (
            <div className='px-[16px] py-[24px] bg-[#37354D] rounded w-full sm:w-[37%]'>
                <h3 className='text-[#F6F5FF] pb-2'>
                    AstroGenetics
                </h3>
                <p className='text-[16px] leading-[28px] pb-[24px] text-[#FFFFFF]'>
                    NFT Collection Name  are 8,888 unique NFT name on the NEAR blockchain. 69% ...
                </p>
                <div className='flex flex-row pb-[8px]'>
                    <div className='flex-1 flex items-center h-[44px] gap-[8px]'>
                        <div className="flex-1 bg-white h-[28px] rounded">
                            <div className="bg-gradient-to-b from-from-blue to-to-blue h-[28px] rounded-l" style={{ width: '12%' }}></div>
                        </div>
                        <div className='w-[46px]'>
                            <span className='text-[16px] leading-[28px] text-[#F6F5FF] inline'>12%</span>
                        </div>
                    </div>
                    <Button type='solid' className='px-2 py-2' onClick={() => navigate('/create-project')}>Continue</Button>
                </div>
            </div>
        )
    }

    return (
        <>
            {!showProjects ? <div className='flex flex-col items-center'>
                <div className='flex flex-col items-center text-center pt-[97px]'>
                    <h3 className='pb-2'>Create a Project</h3>
                    <p className='body2 pb-4'>
                        You currently do not have a project in <br /> progress.
                    </p>
                    <Button type='solid' onClick={() => navigate('/create-project')}>Create New Project</Button>
                </div>
            </div>
                :
                <div className='pb-[32px] px-4 flex flex-col lg:flex-row gap-[24px] lg:pl-[70px] lg:pr-13'>
                    {renderProjectCard()}
                    {renderProjectCard()}
                </div>
            }
        </>
    )
}

export default InProgress;