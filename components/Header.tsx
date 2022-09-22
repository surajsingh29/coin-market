import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'

type Props = {}

function Header({}: Props) {
  return (
    <div className='fixed flex flex-row w-full h-20 bg-black items-center justify-between px-4'>
        <Image src='/hf/logo_transparent.png' alt='logo' height="150px" width="150px" />
        <div className='hidden lg:flex flex-row text-white justify-evenly items-center space-x-4'>
            <Link href='/'><p>Cryptocurrencies</p></Link>
            <Link href='/'><p>Exchanges</p></Link>
            <Link href='/'><p>NFT</p></Link>
            <Link href='/'><p>Portfolio</p></Link>
            <Link href='/'><p>Products</p></Link>
            <Link href='/'><p>Learn</p></Link>
            <Link href='/'>
                <button className='px-4 py-2 rounded-3xl text-sm text-blue-600 bg-white hover:scale-90'>Connect Wallet</button>
            </Link>
            <div className='flex relative text-black'>
                <input className='pl-[24px] outline-none' type="text" name="" id="" placeholder='Search'/>
                <AiOutlineSearch className='absolute left-0 m-1' />
            </div>
        </div>
    </div>
  )
}

export default Header