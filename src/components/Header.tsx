import { Separator } from '@/components/ui/separator'
import { MenuList, Title } from '@/lib/constants'
import Link from 'next/link'
import { Fragment } from 'react'

export default async function Header() {
  return (
    <div className="h-16 px-4 py-2 border-b bg-white">
      <div className="container flex items-center justify-between h-full">
        <h1 className="text-2xl">
          <Link href="/">{Title}</Link>
        </h1>
        <div className="flex justify-end space-x-4 text-sm h-1/3">
          {MenuList.map((item, index) => (
            <Fragment key={item.text}>
              <Link href="/search">{item.text}</Link>
              {index !== MenuList.length - 1 && (
                <Separator orientation="vertical" />
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}
