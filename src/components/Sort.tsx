'use client'

import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { SortList, SortTitle } from '@/lib/constants'
import { SortType } from '@/types/global'

export default function Sort() {
  const handleValueChange = (value: SortType) => {
    console.log(value)
  }
  return (
    <div className="w-64 py-4">
      <p className="m-5 text-lg">{SortTitle}</p>
      <ToggleGroup
        type="single"
        defaultValue={SortList[0].value}
        onValueChange={handleValueChange}
        className="flex flex-col gap-3">
        {SortList.map((item) => (
          <ToggleGroupItem value={item.value} key={item.value}>
            {item.label}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  )
}
