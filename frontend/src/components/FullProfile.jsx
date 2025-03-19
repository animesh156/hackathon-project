import React from 'react'
import PersonalInformation from './PersonalInformation'
import ContactInformation from './ContactInformation'
import Bio from './Bio'
import PreferredLanguage from './PreferredLanguage'
import InterestedTopic from './InterestedTopic'

function FullProfile() {
  return (
    <div className='border flex flex-col items-center border-gray-200 mr-6 -mt-20 rounded-2xl bg-white h-[1200px] w-[1000px]'>

         <PersonalInformation />

         <ContactInformation />

         <Bio />

         <PreferredLanguage />

         <InterestedTopic />

    </div>
  )
}

export default FullProfile