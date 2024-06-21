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
import React from 'react';
import { Empty } from './ui/empty';
import { Badge } from '@/components/ui/badge'
import { Connection } from '@prisma/client/edge';
import { fetchAllConnections } from '@/lib/actions';
import { Lock as LockIcon, User as UserIcon } from '@phosphor-icons/react/dist/ssr';
import { Button } from "./ui/button";
import { PostgresIcon } from "./icons";



const ConnectionsCardView = async () => {

  const connections: Connection[] = await fetchAllConnections()
  // const connections: Connection[] = []

  return (
    <div className='grid grid-flow-row gap-4 grid-cols-2'>
      {connections.map((connection) => (
        <ContextMenu key={connection.id}>
          <ContextMenuTrigger className='font-mono border bg-primary-foreground hover:shadow rounded-lg p-4 grid gap-2'>
            <div className="flex gap-4 items-center justify-start">
              <PostgresIcon className="size-12 rounded-lg"/>
              <p className="font-semibold">{connection.databaseName}</p>
            </div>
            <div className="flex gap-1 w-full truncate">
              <Badge variant={'outline'} className={`${connection.ssl && 'bg-green-500 dark:bg-green-700'} w-fit gap-1 flex`}><LockIcon /><p>SSL</p></Badge>
              <Badge variant={'outline'} className=' truncate'>
                <UserIcon />
                <p className="truncate">{connection.username}</p>
              </Badge>
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
    </div>
  )
}

const ConnectionsButtonView = async () => {

  // could optimize to use one fetch for both components
  const connections: Connection[] = await fetchAllConnections()
  // const connections: Connection[] = []

  return (
    <div className='grid grid-flow-row gap-2'>
      {connections.map((connection) => (
        <ContextMenu key={connection.id}>
          <ContextMenuTrigger>
            <Button variant={'ghost'} size={'default'} className="w-full px-2 font-mono flex gap-2 items-center justify-between">
              <div className="flex gap-2">
                <PostgresIcon className="size-6 rounded"/>
                <p className="">{connection.databaseName}</p>
                </div>
              {connection.isConnected ? (
                <div className="block bg-green-500 size-2 min-w-2 mr-1 animate-pulse rounded-full" />
              ) : (
                <div className="block bg-neutral-500 size-2 min-w-2 mr-1 rounded-full" />
              )}
            </Button>
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
    </div>
  )
}

export { ConnectionsCardView, ConnectionsButtonView }