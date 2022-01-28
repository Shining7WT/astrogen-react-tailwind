import React from 'react';

const Tabs = ({ activeTab, setActiveTab }) => {
  const menu = [
    {
      title: 'In Progress',
      id: 1,
      key: 'progress',
    },
    {
      title: 'Completed',
      id: 2,
      key: 'completed',
    }
  ];
  return (
    <>
      <div className='w-full pl-[24px] py-10 lg:pl-[70px] lg:pr-13 overflow-auto'>
        <div className='flex'>
          <div className='relative flex gap-[48px] w-full'>
            {menu.map((item) => (
              <div
                key={item.key}
                className={`cursor-pointer py-4 border-b-4 flex flex-row relative overflow-hidden whitespace-nowrap ${
                  activeTab === item.id
                    ? 'border-primary text-primary z-10'
                    : 'border-white'
                }`}
                onClick={()=> setActiveTab(item.id)}
              >
                <span className='h-[32px] flex items-center justify-center'>{item.title}</span> <div className='inline ml-[10px] w-[40px] h-[32px] bg-[#F6F5FF] rounded-lg flex items-center justify-center'> <p className='body2 inline'> 2 </p> </div>
              </div>
            ))}
            <div
              className='w-full absolute bg-primaryInactive'
              style={{ height: '2px', bottom: '1px' }}
            />
          </div>
          <span />
        </div>
      </div>
    </>
  );
};

export default Tabs;
