'use client'

import * as TogglePrimitive from '@radix-ui/react-toggle'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

/*
颜色修改指南：
1. 背景色：bg-{颜色}-{深浅}
   - bg-red-500 (红色)
   - bg-blue-500 (蓝色) 
   - bg-green-500 (绿色)
   - bg-purple-500 (紫色)
   - bg-orange-500 (橙色)
   - bg-pink-500 (粉色)

2. 文字颜色：text-{颜色}-{深浅}
   - text-white (白色文字)
   - text-black (黑色文字)
   - text-red-500 (红色文字)

3. 悬停状态：hover:bg-{颜色}-{深浅}
4. 选中状态：data-[state=on]:bg-{颜色}-{深浅}

深浅级别：50(最浅) -> 100 -> 200 -> 300 -> 400 -> 500(中等) -> 600 -> 700 -> 800 -> 900(最深)

颜色方案示例：
- 红色主题：hover:bg-red-100 data-[state=on]:bg-red-500
- 绿色主题：hover:bg-green-100 data-[state=on]:bg-green-500  
- 紫色主题：hover:bg-purple-100 data-[state=on]:bg-purple-500
- 粉色主题：hover:bg-pink-100 data-[state=on]:bg-pink-500
*/

const toggleVariants = cva(
  // 基础样式
  'inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors ' +
    // 悬停状态 - 修改这里改变悬停颜色
    'hover:bg-orange-100 hover:text-muted-foreground ' +
    // 焦点状态
    'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring ' +
    // 禁用状态
    'disabled:pointer-events-none disabled:opacity-50 ' +
    // 选中状态 - 修改这里改变激活时的颜色
    'data-[state=on]:bg-orange-500 data-[state=on]:text-white ' +
    // 图标样式
    '[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-transparent',
        outline:
          'border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground',
      },
      size: {
        default: 'h-9 px-2 min-w-9',
        sm: 'h-8 px-1.5 min-w-8',
        lg: 'h-10 px-2.5 min-w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, className }))}
    {...props}
  />
))

Toggle.displayName = TogglePrimitive.Root.displayName

export { Toggle, toggleVariants }
