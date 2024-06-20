
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ThemeToggler } from './ThemeToggler'

function Header() {
  return (
    <header>
      {/* first section */}
      <Link href='/'>
        <Image
          src="https://links.papareact.com/a943ae"
          alt='Disney logo'
          width={100}
          height={199}
          className="cursor-pointer invert-0 dark:invert"
        />
      </Link>

      {/* second section */}
      <div>
        {/* Genre dropdown */}
        {/* search input */}
        {/* theme triiger */}
        <ThemeToggler />
      </div>
      
    </header>
  )
}

export default Header