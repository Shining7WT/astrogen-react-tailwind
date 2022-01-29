import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Button from '../../common/Button';
import BasicInformation from './components/BasicInformation';
import LaunchProject from './components/LaunchProject';
import Tabs from './components/Tabs';
import UploadTraitLayer from './components/UploadTraitLayer';
import AssignRarity from './components/AssignRarity';
import LayerPreview from './components/LayerPreview';

const Dashboard = () => {
  const {
    control,
    handleSubmit,
    register,
    errors,
    trigger,
    reset,
    watch,
    getValues,
    setValue,
  } = useForm({
    mode: 'onChange',
    reValidateMode: 'onSubmit',
    defaultValues: {
      test: [{ layer: '', file: null }],
      addMusic: false,
      scheduleLaunch: false,
      endDate: false,
      ReactDatepicker: '',
      thumbnail: [],
    },
  });
  const [activeTab, setActiveTab] = useState(1);
  const [assignRarity, setAssignRarity] = useState({});
  return (
    <>
      <div className='px-0 md:px-12 lg:px-24 w-full max-w-7xl'>
        <div className='bg-white pb-24 rounded-md'>
          <Tabs setActiveTab={setActiveTab} activeTab={activeTab} />

          {activeTab === 1 ? (
            <BasicInformation
              register={register}
              errors={errors}
              control={control}
              watch={watch}
              trigger={trigger}
              setActiveTab={setActiveTab}
              activeTab={activeTab}
            />
          ) : activeTab === 2 ? (
            <UploadTraitLayer
              register={register}
              errors={errors}
              control={control}
              watch={watch}
              trigger={trigger}
              setValue={setValue}
              setActiveTab={setActiveTab}
              activeTab={activeTab}
            />
          ) : activeTab === 3 ? (
            <AssignRarity
              register={register}
              errors={errors}
              control={control}
              watch={watch}
              trigger={trigger}
              setValue={setValue}
              setActiveTab={setActiveTab}
              activeTab={activeTab}
              setAssignRarity={setAssignRarity}
            />
          ) : activeTab === 4 ? (
            <LayerPreview
              register={register}
              errors={errors}
              control={control}
              watch={watch}
              trigger={trigger}
              setValue={setValue}
              setActiveTab={setActiveTab}
              activeTab={activeTab}
              assignRarity={assignRarity}
            />
          ) : activeTab === 5 ? (
            <LaunchProject
              register={register}
              errors={errors}
              control={control}
              watch={watch}
              trigger={trigger}
              setActiveTab={setActiveTab}
              activeTab={activeTab}
              getValues={getValues}
              setValue={setValue}
              Controller={Controller}
            />
          ) :null}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
