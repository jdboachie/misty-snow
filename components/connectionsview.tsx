import React from 'react';
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
  ContextMenuShortcut,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuCheckboxItem,
} from "@/components/ui/context-menu"
import { Badge } from '@/components/ui/badge'
import { Skeleton } from '@/components/ui/skeleton'
import { Connection } from '@prisma/client/edge';
import { Lock as LockIcon, User as UserIcon } from '@phosphor-icons/react/dist/ssr';
import { fetchAllConnections } from '@/lib/actions';
import ConnectionCardSkeleton from './closet/skeletons/ConnectionCardSkeleton';


const ConnectionsView = async () => {

  const connections: Connection[] = await fetchAllConnections()
  // const connections: Connection[] = []

  return (
    <div className='grid lg:w-1/2 mx-auto gap-6 p-12'>
      {connections.map((connection, index) => (
        <ContextMenu key={index}>
          <ContextMenuTrigger className='font-mono border bg-primary-foreground shadow rounded-xl p-4 grid gap-2'>
            <div className="flex gap-4 py-1 items-center justify-start">
              <Skeleton className="border size-12 rounded-full"/>
              <p className="font-semibold">{connection.databaseName}</p>
            </div>
            <div className="flex gap-1">
              <Badge variant={'outline'} className={`${connection.ssl && 'bg-green-500 dark:bg-green-700'} w-fit gap-1 flex`}><LockIcon /><p>SSL</p></Badge>
              <Badge variant={'secondary'} className='flex gap-1'><UserIcon />{connection.username}</Badge>
            </div>
            <Badge variant={'secondary'} className='truncate'>
              {connection.isConnected ? (
                <div className="block bg-green-500 size-2 min-w-2 mr-1 animate-pulse rounded-full" />
              ) : (
                <div className="block bg-neutral-500 size-2 min-w-2 mr-1 rounded-full" />
              )}
              <p className="w-fit truncate">
                {connection.hostname}:{connection.port}
              </p>
            </Badge>
          </ContextMenuTrigger>
          <ContextMenuContent className="w-56">
            <ContextMenuCheckboxItem checked={connection.isConnected}>
              {connection.isConnected ? 'Disconnect' : 'Connect'}
              <ContextMenuShortcut>⌘⇧C</ContextMenuShortcut>
            </ContextMenuCheckboxItem>
            <ContextMenuItem inset>View</ContextMenuItem>
            <ContextMenuItem inset>Delete</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuSub>
              <ContextMenuSubTrigger inset>More Tools</ContextMenuSubTrigger>
              <ContextMenuSubContent className="w-48">
                <ContextMenuItem>
                  Save Page As...
                  <ContextMenuShortcut>⇧⌘S</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem>Create Shortcut...</ContextMenuItem>
                <ContextMenuItem>Name Window...</ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem>Developer Tools</ContextMenuItem>
              </ContextMenuSubContent>
            </ContextMenuSub>
          </ContextMenuContent>
      </ContextMenu>
      ))}
      <ConnectionCardSkeleton />
    </div>
  )
}

export default ConnectionsView