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
import { Badge } from '@/components/ui/badge'
import { Connection } from '@prisma/client/edge';
import { fetchAllConnections } from '@/lib/actions';
import { Lock as LockIcon, User as UserIcon } from '@phosphor-icons/react/dist/ssr';
import { PostgresIcon } from "./icons";
import Link from "next/link";



const ConnectionsListView = async () => {

  const connections: Connection[] = await fetchAllConnections()
  // const connections: Connection[] = []

  return (
    <div className='grid grid-flow-row gap-4'>
      {connections.map((connection) => (
        <ContextMenu key={connection.id}>
          <ContextMenuTrigger className='font-mono border bg-card dark:bg-primary-foreground drop-shadow-sm rounded-lg p-4 grid gap-2'>
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
            <Link
              href={`/app/connections/${connection.id}`}
            >
              <ContextMenuItem inset>
                  View
              </ContextMenuItem>
            </Link>
            <ContextMenuItem inset>Delete</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuSub>
              <ContextMenuSubTrigger inset>Export</ContextMenuSubTrigger>
              <ContextMenuSubContent className="w-48">
                <ContextMenuItem>
                  CSV
                  {/* <ContextMenuShortcut>⇧⌘S</ContextMenuShortcut> */}
                </ContextMenuItem>
                <ContextMenuItem>XLSX</ContextMenuItem>
                <ContextMenuItem>HTML</ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem>PDF</ContextMenuItem>
              </ContextMenuSubContent>
            </ContextMenuSub>
          </ContextMenuContent>
      </ContextMenu>
      ))}
    </div>
  )
}


export { ConnectionsListView }