import React from 'react'
import {Skeleton} from "@/components/ui/skeleton";
import { Empty } from '@/components/ui/empty';

const UserButtonSkeleton = ({collapsed}: {collapsed: boolean}) => {
  return (
    <Skeleton className='bg-transparent shadow-none rounded-lg p-1 h-10 flex items-center gap-2'>
      <Empty className="size-8 rounded-lg"/>
      <Empty className={`w-24 h-3 rounded-sm ${collapsed && 'hidden'}`}/>
    </Skeleton>
  )
}

export default UserButtonSkeleton