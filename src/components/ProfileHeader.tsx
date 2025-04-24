import React from 'react'
import { UserResource } from '@clerk/types'
import CornerElements from './CornerElements'

const ProfileHeader = ({ user }: { user: UserResource | null | undefined }) => {
  if (!user) return null

  return (
    <div className="mb-10 relative backdrop-blur-sm border border-border p-6 rounded-lg">
      <CornerElements />

      <div className="flex  flex-col md:flex-row items-start md:items-center gap-6">
        {/* Profile Picture */}
        <div className="relative w-20 h-20">
          {user.imageUrl ? (
            <div className="w-full h-full overflow-hidden rounded-full shadow-md ring-2 ring-primary">
              <img
                src={user.imageUrl}
                alt={user.fullName || 'Profile'}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          ) : (
            <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center">
              <span className="text-3xl italic text-primary">
                {user.fullName?.charAt(0) || 'U'}
              </span>
            </div>
          )}
          {/* Online status dot */}
          <div className="absolute -bottom-1 right-1 w-3 h-3 rounded-full bg-green-500 border-2 border-background animate-ping" />
        </div>

        {/* User Info */}
        <div className="mt-4 md:mt-0 flex flex-col gap-1 w-full">
          <h1 className="text-2xl font-semibold text-foreground italic">{user.fullName}</h1>
          <div className="flex w-fit items-center bg-cyber-terminal-bg backdrop-blur-sm border border-border rounded px-3 py-1">
            <div className="size-2 rounded-full bg-primary animate-pulse mr-2"></div>
            <p className="text-xs font-mono text-primary">USER ACTIVE</p>
          </div>
          {/* Decorative Line */}
         <div className="h-px w-full bg-gradient-to-r from-primary via-secondary to-primary opacity-50 mt-3" />
          <p className="text-sm text-muted-foreground">{user.primaryEmailAddress?.emailAddress || 'No email address'}</p>
        </div>
      </div>

      
    </div>
  )
}

export default ProfileHeader
