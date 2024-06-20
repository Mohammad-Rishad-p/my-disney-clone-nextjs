
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ThemeToggler } from './ThemeToggler'
import SearchInput from './SearchInput'

function Header() {
  return (
    <header className='fixed w-full z-20 flex items-center
     justify-between p-5 bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900'>
      {/* first section */}
      <Link href='/' className=' mr-10'>
        <Image
          src="https://links.papareact.com/a943ae"
          alt='Disney logo'
          width={100}
          height={199}
          className="cursor-pointer invert-0 dark:invert"
        />
      </Link>

      {/* second section */}
      <div className='flex space-x-2'>
        {/* Genre dropdown */}
        {/* search input */}
        <SearchInput />
        {/* theme triiger */}
        <ThemeToggler />
      </div>
      
    </header>
  )
}

export default Header