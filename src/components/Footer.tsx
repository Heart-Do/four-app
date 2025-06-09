import { Separator } from '@/components/ui/separator'
import { NavList, Title } from '@/lib/constants'
import Link from 'next/link'
import { Fragment } from 'react'

export default async function Footer() {
  return (
    <div className="border-t mt-6">
      <div className="container py-32 flex justify-between">
        <h2 className="text-2xl">
          <Link href="/">{Title}</Link>
        </h2>
        <div className="flex justify-between gap-6">
          {NavList.map((item, index) => (
            <Fragment key={item.title}>
              {index !== 0 && <Separator orientation="vertical" />}
              <div>
                <span>{item.title}</span>
                <ul className="m-4 space-y-3">
                  {item.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}
