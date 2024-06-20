import React from 'react'
import {Skeleton} from "@/components/ui/skeleton";
import { Empty } from '@/components/ui/empty';

const ConnectionCardSkeleton = () => {
  return (
    <Skeleton className='font-mono border bg-primary-foregroun bg-transparent shadow rounded-xl p-4 grid gap-2'>
      <div className="flex gap-4 py-1 items-center justify-start">
        <Empty className="size-12 rounded-full"/>
        <Empty className='w-32 h-6'/>
      </div>
      <div className="flex gap-1">
        <Empty className='w-12 h-[22px]' />
        <Empty className='w-32 h-[22px]' />
      </div>
      <Empty className='w-full h-[22px]' />
    </Skeleton>
  )
}

export default ConnectionCardSkeleton