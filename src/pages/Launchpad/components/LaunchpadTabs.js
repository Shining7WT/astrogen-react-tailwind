import React from 'react';

const LaunchpadTabs = ({ activeTab, setActiveTab }) => {
  const menu = [
    {
      title: 'In Progress',
      id: 1,
      key: 'progress',
    },
    {
      title: 'Upcoming',
      id: 2,
      key: 'upcoming',
    },
    {
      title: 'Completed',
      id: 3,
      key: 'completed',
    }
  ];
  return (
    <div className='flex min-w-[585px]'>
      <div className='relative flex gap-[48px] w-full'>
        {menu.map((item) => (
          <div
            key={item.key}
            className={`cursor-pointer py-4 border-b-4 flex flex-row relative overflow-hidden whitespace-nowrap ${activeTab === item.id
              ? 'border-white !text-white z-10'
              : 'border-transparent !text-secondary'
              }`}
            onClick={() => setActiveTab(item.id)}
          >
            <span className='h-[32px] text-[20px] flex items-center justify-center '>{item.title}</span>
            <div className='ml-[10px] w-[40px] h-[32px] bg-[#F6F5FF] rounded-lg flex items-center justify-center'>
              <p className='body2 inline'> 2 </p>
            </div>
          </div>
        ))}
      </div>
      <span />
    </div>
  );
};

export default LaunchpadTabs;
