import DevFeature from '@/components/reusable/development-features/DevFeature';
import Step from '@/components/reusable/steps/Step';
import TechnologyWeUse from '@/components/reusable/technology-we-use/TechnologyWeUse';
import WhyTech10x from '@/components/reusable/why-tech10x/WhyTech10x';
import React from 'react';

const ApiDevelopment = () => {
  return (
    <div className='mx-12'>
      <WhyTech10x />
      <Step />
      <TechnologyWeUse />
      <DevFeature />
    </div>
  )
}

export default ApiDevelopment;