'use client'
import React from 'react'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'

const SalesCampaignBanner = () => {
    const router = useRouter();
  return (
    <div className='w-full bg-gradient-to-r from-blue-200 to-purple-500 p-4 relative overflow-hidden'>
        <div className='container mx-auto px-4'>
            <div className='flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-white'>
                <div className='flex items-center gap-2'>
                    <span className='text-xl sm:text-2xl font-bold animate-bounce'>
                    🔥
                    </span>
                    <div className='text-sm sm:text-base font-bold'>
                        FLASH SALE ENDS IN:
                    </div>
                    <div className='bg-white/20 rounded px-2 py-1 font-mono font-bold'>
                        23:50:50
                    </div>
                    <div className='flex items-center gap-2'>
                        <span className='text-xl font-bold text-purple-300 animate-pulse'>⚡</span>
                        <span>UP TO 90% OFF!</span>
                    </div>
                    <Button className='bg-white text-purple-300 font-bold text-sm hover:bg-purple-300 hover:text-white rounded-full' onClick={()=>{router.push('/')}}>SHOP NOW</Button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default SalesCampaignBanner