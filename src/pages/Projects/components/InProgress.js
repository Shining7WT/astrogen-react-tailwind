import React from 'react';
import Button from '../../../common/Button';

const InProgress = () => {
  return (
    <>
        <div className='flex flex-col items-center'>
            <div className='flex flex-col items-center text-center pt-[97px]'>
                <h3 className='pb-2'>Create a Project</h3>
                <p className='body2 pb-4'>
                    You currently do not have a project in <br /> progress.
                </p>
                <Button type='solid' onClick={() => {}}>Create New Project</Button>
            </div>
        </div>
    </>
  )
}

export default InProgress;