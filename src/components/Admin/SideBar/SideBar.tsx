import React from 'react'
import NavlinkAdmin from '../NavlinkAdmin/NavlinkAdmin'
import { MdDashboard, MdDoorBack, MdOutlineEmail } from 'react-icons/md'
import { FaCartPlus, FaFileInvoiceDollar, FaUsers } from 'react-icons/fa6'
import Cookies from "js-cookie"
import ImageCustom from '@/components/ImageCustom/ImageCustom'
import { useRouter } from 'next/navigation'

export default function SideBar() {
  const route = useRouter()
  const logout = () => {
    Cookies.remove('authToken');
    route.replace("/admin/login")
  }
  return (
    <>
      <div className='hidden md:flex w-2/12 sticky left-0 top-5 h-full flex-col gap-2'>
        <div className='flex items-center justify-center gap-2 border-b border-d-60/50 pb-5'>
          <ImageCustom alt={"logo"} src={"/logo-dark.webp"} width={100} height={60} />
          <h1 className='font-semibold text-d-100 text-xl'>Shlabs</h1>
        </div>
        <div className='h-[calc(100vh-110px)] pr-2 overflow-y-auto custom-scroll flex flex-col gap-1'>
          <NavlinkAdmin href='/admin/dashboard' icon={<MdDashboard />} name='Dashboard' />
          {/* <NavlinkAdmin href='/admin/pages' icon={<IoIosCube />} name='Pages' /> */}
          <NavlinkAdmin href='/admin/products' icon={<FaCartPlus />} name='Products' />
          {/* <NavlinkAdmin href='/admin/blogs' icon={<RiArticleLine />} name='Blogs' /> */}
          <NavlinkAdmin href='/admin/users' icon={<FaUsers />} name='Users' />
          {/* <NavlinkAdmin href='/admin/category' icon={<MdOutlineCategory />} name='Category' /> */}
          <NavlinkAdmin href='/admin/comments' icon={<MdOutlineEmail />} name='Comments' />
          {/* <NavlinkAdmin href='/admin/messages' icon={<FaRegComments />} name='Messages' /> */}
          <NavlinkAdmin href='/admin/payment' icon={<FaFileInvoiceDollar />} name='Payments' />
          {/* <NavlinkAdmin href='/admin/setting' icon={<IoSettingsOutline />} name='Setting' /> */}
          <button type='button' onClick={logout} className={`flex items-center p-2 rounded-xl  justify-strat gap-2`}>
            <i className={`bg-white text-slate-800 text-lg p-2 shadow-md rounded-lg`}><MdDoorBack /></i>
            <span>
              Log out
            </span>
          </button>
        </div>
      </div>
    </>

  )
}
