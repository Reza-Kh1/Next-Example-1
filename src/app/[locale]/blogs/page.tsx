import ContainerHeader from '@/components/ContainerHeader/ContainerHeader'
import Link from 'next/link'
import React from 'react'
import NavLink from './NavLink'
import ImageCustom from '@/components/ImageCustom/ImageCustom'
import Image from 'next/image'
import { MdOutlineAccessTime } from 'react-icons/md'
import { FaCalendar } from 'react-icons/fa6'
import { useLocale, useTranslations } from 'next-intl'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Blogs | Site',
  description: 'Blogs | Site'
}
export default function page() {
  const local = useLocale()
  const t = useTranslations("Blog")
  return (
    <>
      <ContainerHeader light={t("header.nameLight")} dark={t("header.nameDark")} text={t("header.text")} />
      <main className="main-class">
        <div className='my-8 md:my-16 flex'>
          <div className='bg-d-80 mx-auto p-2 px-3 overflow-auto  text-w-100 rounded-full flex gap-2 items-center border-d-50 border'>
            <NavLink url={local === "fa" ? "همه" : "All"} />
            <NavLink url={local === "fa" ? "بیزینس" : "Business"} />
            <NavLink url={local === "fa" ? "طراحی" : "Design"} />
            <NavLink url={local === "fa" ? "توسعه دهنده" : "Development"} />
          </div>
        </div>
        <div className='flex flex-col md:flex-row items-center gap-10'>
          <div className='p-8 w-full md:w-5/12 rounded-xl border border-d-60' style={{ backgroundImage: "url(/dot-top.png)" }}>
            <ImageCustom src={"/big-logo.png"} alt={"logo"} width={596} height={419} />
          </div>
          <div className='w-full md:w-7/12'>
            <h2 className='text-w-100 font-semibold text-xl mb-6'>{t("section-1.name")}</h2>
            <p className='text-w-50'>{t("section-1.text")}<Link href={"#"} className='text-w-100'>{local === "fa" ? "مطالعه بیشتر..." : "Read More..."}</Link></p>
            <div className='mt-12 grid grid-cols-1 md:grid-cols-4 items-center gap-3 md:gap-7 justify-between p-4 md:p-6 rounded-xl border border-d-60'>
              <div className={`flex flex-col gap-2 border-b md:border-b-0 pb-3 md:pb-0 border-d-60 ${local === "fa" ? "md:border-l" : "md:border-r"}`}>
                <span className='text-sm text-w-50'>{local === "fa" ? "زمان مطالعه" : "Read Time"}</span>
                <span className='text-w-100'>{t("section-1.time")}</span>
              </div>
              <div className={`flex flex-col gap-2 border-b md:border-b-0 pb-3 md:pb-0 border-d-60 ${local === "fa" ? "md:border-l" : "md:border-r"}`}>
                <span className='text-sm text-w-50'>{local === "fa" ? "نویسنده" : "Author"}</span>
                <span className='text-w-100'>{t("section-1.author")}</span>
              </div>
              <div className={`flex flex-col gap-2 border-b md:border-b-0 pb-3 md:pb-0 border-d-60 ${local === "fa" ? "md:border-l" : "md:border-r"}`}>
                <span className='text-sm text-w-50'>{local === "fa" ? "تاریخ انتشار" : "Published Date"}</span>
                <span className='text-w-100'>{t("section-1.published")}</span>
              </div>
              <div className='flex flex-col gap-2'>
                <span className='text-sm text-w-50'>{local === "fa" ? "دسته" : "Category"}</span>
                <span className='text-w-100'>{t("section-1.category")}</span>
              </div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-12'>
          {t.raw("section-1.array").map((row: any, index: number) => (
            <section key={index} className='flex justify-between flex-col gap-6'>
              <div className='p-4 rounded-xl border border-d-60' style={{ backgroundImage: "url(/dot-top.png)" }}>
                <ImageCustom className='w-full' alt={"work"} src={row.banner} height={350} width={500} />
              </div>
              <div className='flex flex-col md:flex-row items-start gap-4 md:gap-0 md:items-center justify-between'>
                <div className='flex gap-2 items-center'>
                  <Image src={row.image} alt='profile' width={40} height={40} />
                  <span className='text-w-100'>{row.name}</span>
                </div>
                <div className='flex gap-2 text-w-80'>
                  <span className='py-2 px-3 border rounded-full flex items-center gap-1 text-xs border-d-60'><MdOutlineAccessTime /> 6 min read</span>
                  <span className='py-2 px-3 border rounded-full flex items-center gap-1 text-xs border-d-60'><FaCalendar /> March 2019</span>
                </div>
              </div>
              <div>
                <h3 className='text-w-100 text-lg'>{row.title}</h3>
                <p className='text-w-50 mt-2'>{row.text}</p>
              </div>
              <div className='flex justify-center'>
                <Link className='text-w-100 bg-d-60 text-xs md:text-base px-5 py-2 rounded-full border border-d-50' href={"#"}>
                  {local === "fa" ? "مطالعه بیشتر" : "Read More"}
                </Link>
              </div>
            </section>
          ))}
        </div>
      </main>
    </>
  )
}
