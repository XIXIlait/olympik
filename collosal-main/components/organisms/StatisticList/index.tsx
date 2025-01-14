import StatisticListItem from 'components/molecules/StatisticListItem'
import React from 'react'
import { FiAward, FiFlag, FiSmartphone, FiUsers } from 'react-icons/fi'

const StatisticList = () => {
  return (
    <div className="w-full px-8 py-6 bg-light rounded flex flex-col gap-5 md:flex-row md:justify-around md:items-center">
      
      <StatisticListItem icon={<FiSmartphone />} label="APPS" value="5" />
      <div className="w-full h-[1px] bg-borderLight md:w-[1px] md:min-h-[65px]"></div>
      <StatisticListItem icon={<FiAward />} label="AN D'EXISTENCE" value="1" />
      <div className="w-full h-[1px] bg-borderLight md:w-[1px] md:min-h-[65px]"></div>
      <StatisticListItem icon={<FiUsers />} label="CLIENTS" value="+10" />
    </div>
  )
}

export default StatisticList
