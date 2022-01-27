import React, { useState } from 'react';
import Button from '../../common/Button';
import Tabs from './components/Tabs';
import Completed from './components/Completed';
import InProgress from './components/InProgress';


const Projects = () => {
    const [activeTab, setActiveTab] = useState(1);

    return (
        <>
            <div className='px-0 md:px-12 lg:px-24 w-full max-w-7xl'>
                <div className='w-full flex justify-end gap-8 py-8 px-4 md:px-0'>
                    <div className='block'>
                        <Button type='outline' onClick={() => { }}>
                            creator.near
                        </Button>
                    </div>
                </div>
                <div className='bg-white rounded-md h-[75vh]'>
                    <Tabs setActiveTab={setActiveTab} activeTab={activeTab} />
                    {activeTab === 1 ? (
                        <InProgress

                        />
                    ) : activeTab === 2 ? (
                        <Completed

                        />
                    ) : null
                    }
                </div>
            </div>
        </>
    )
}

export default Projects;