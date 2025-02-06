"use client"
import React, { useState } from 'react'
import ImageCustom from '../ImageCustom/ImageCustom'
import { Button } from '@heroui/button'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import Image from 'next/image'
import { useLocale, useTranslations } from 'next-intl'
type ProjectCardsType = {
    image: string
    name: string
    text: string
}
export default function ProjectCards({ image, name, text }: ProjectCardsType) {
    const [showMore, setShowMore] = useState<boolean>(false)
    const local = useLocale()
    const ShowMoreBox = () => {
        return <div className='mt-5 md:mt-10 flex flex-col gap-6'>
            <div className='border justify-between border-d-60 p-3 md:p-6 rounded-xl grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-10'>
                <div className='flex flex-col gap-2 border-r border-d-60'>
                    <span className='text-w-50 text-xs md:text-base'>{local === "fa" ? "دسته" : "Category"}</span>
                    <span className='text-w-90 text-sm md:text-base'>E-commerce</span>
                </div>
                <div className='flex flex-col gap-2 md:border-r border-d-60'>
                    <span className='text-w-50 text-xs md:text-base'> {local === "fa" ? "زمان مد نظر" : "Time Taken"}</span>
                    <span className='text-w-90 text-sm md:text-base'>4 Months</span>
                </div>
                <div className='md:hidden col-span-2 border-b border-d-60 h-1'></div>
                <div className='flex flex-col gap-2 border-r border-d-60'>
                    <span className='text-w-50 text-xs md:text-base'>{local === "fa" ? "تاریخ شروع" : "Start Date"}</span>
                    <span className='text-w-90 text-sm md:text-base'>January 15, 2023</span>
                </div>
                <div className='flex flex-col gap-2'>
                    <span className='text-w-50 text-xs md:text-base'>{local === "fa" ? "تاریخ تکمیل" : "Completed Date"}</span>
                    <span className='text-w-90 text-sm md:text-base'>May 15, 2023</span>
                </div>
            </div>
            <div className='flex gap-3 md:gap-7 flex-col md:flex-row border items-center border-d-60 p-3 md:p-6 rounded-xl'>
                <span className='text-w-100'>{local === "fa" ? "تکنولوژی های استفاده شده" : "Technologies Used"} </span>
                <div className='flex gap-3 md:gap-7 items-center'>
                    <ImageCustom figureClass='border border-d-60 p-2 md:p-3 rounded-full bg-gradient-to-b to-d-100 from-gray-700/90' className='w-5' src={"/icons/html.png"} width={40} height={40} alt={"icon"} />
                    <ImageCustom figureClass='border border-d-60 p-2 md:p-3 rounded-full bg-gradient-to-b to-d-100 from-gray-700/90' className='w-5' src={"/icons/code.png"} width={25} height={25} alt={"icon"} />
                    <ImageCustom figureClass='border border-d-60 p-2 md:p-3 rounded-full bg-gradient-to-b to-d-100 from-gray-700/90' className='w-5' src={"/icons/app.png"} width={25} height={25} alt={"icon"} />
                    <ImageCustom figureClass='border border-d-60 p-2 md:p-3 rounded-full bg-gradient-to-b to-d-100 from-gray-700/90' className='w-5' src={"/icons/fast.png"} width={25} height={25} alt={"icon"} />
                </div>
            </div>
            <div className='border items-center border-d-60 p-3 md:p-6 rounded-xl'>
                <span className='text-w-100 w-full col-span-3'>{local === "fa" ? "اعضای تیم" : "Team Members"}</span>
                <div className='flex flex-col md:flex-row gap-3 md:gap-7 mt-4 justify-between'>
                    <div className='w-full md:w-1/3 md:rounded-xl p-3 border-d-60 border-b md:border'>
                        <span className='block text-w-100 mb-5 md:mb-3 text-sm md:text-base'> {local === "fa" ? "توسعه دهنده وب" : "Web Developers"}</span>
                        <div className='flex'>
                            <div className='relative w-1/3'>
                                <figure className='absolute right-3 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                                    <Image src="/profile/prof.png" alt='profile' width={40} height={40} />
                                </figure>
                                <figure className='absolute -right-2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                                    <Image src="/profile/prof2.png" alt='profile' width={40} height={40} />
                                </figure>
                            </div>
                            <div className='text-w-90 md:text-sm text-xs'>John Smith ,
                                Emily Johnson
                            </div>

                        </div>
                    </div>
                    <div className='w-full md:w-1/3 md:rounded-xl p-3 border-d-60 border-b md:border'>
                        <span className='block text-w-100 mb-5 md:mb-3 text-sm md:text-base'>{local === "fa" ? "طراح UI UX " : "UI UX Designer"}</span>
                        <div className='flex'>
                            <div className='relative w-1/3'>
                                <figure className='absolute right-0 top-1/2  transform -translate-x-1/2 -translate-y-1/2'>
                                    <Image src="/profile/prof3.png" alt='profile' width={40} height={40} />
                                </figure>
                            </div>
                            <span className='text-w-90 md:text-sm text-xs'>Jessica Lee</span>
                        </div>
                    </div>
                    <div className='w-full md:w-1/3 rounded-xl p-3 border-d-60 md:border'>
                        <span className='block text-w-100 mb-5 md:mb-3 text-sm md:text-base'>{local === "fa" ? "مدیریت پروژه" : "Project Manager"}</span>
                        <div className='flex'>
                            <div className='relative w-1/3'>
                                <figure className='absolute right-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                                    <Image src="/profile/prof4.png" alt='profile' width={40} height={40} />
                                </figure>

                            </div>
                            <span className='text-w-90 md:text-sm text-xs'>Michael Williams</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border items-center border-d-60 p-3 md:p-6 rounded-xl'>
                <span className='text-w-100'>{local === "fa" ? "روش های مورد استفاده" : "Methods Used"}</span>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-2 md:gap-10 mt-4 items-center justify-between p-4 md:p-6 border border-d-60 rounded-xl'>
                    <span className='text-center p-3 rounded-full border text-w-90 md:text-sm border-d-60 text-xs'>Agile Development</span>
                    <span className='text-center p-3 rounded-full border text-w-90 md:text-sm border-d-60 text-xs'>User Testing</span>
                    <span className='text-center p-3 rounded-full border text-w-90 md:text-sm border-d-60 text-xs'>A/B Testing</span>
                </div>
            </div>
        </div>
    }
    return (
        <section className='w-full md:w-3/4 flex flex-col gap-6 md:gap-8 mx-auto p-3 md:p-6 border border-d-60 rounded-xl'>
            <ImageCustom src={image} alt={"project"} width={1000} height={600} />
            <div className='flex justify-between flex-col gap-3 md:flex-row md:gap-0'>
                <h3 className='text-w-100 order-2 md:order-1 font-semibold text-xl'>{name}</h3>
                <div className='order-1 md:order-2 text-center'>
                    <span className='text-w-50'>
                        {showMore ? local === "fa" ? "بستن جزئیات" : "Show Less" : local === "fa" ? "نمایش جزئیات" : "Show More"}
                    </span>
                    <Button onPress={() => setShowMore(prev => !prev)} isIconOnly className='border mx-2 border-d-60 p-3 rounded-full text-w-100 bg-gradient-to-b to-d-100 from-gray-700/90'>
                        {showMore ?
                            <FaChevronUp />
                            :
                            <FaChevronDown />
                        }
                    </Button>
                </div>
            </div>
            <div className='flex-col md:flex-row flex gap-3 items-start  md:items-center'>
                <div className='p-1 border rounded-full px-2 border-d-60 text-w-100 flex items-center gap-2'>
                    <ImageCustom figureClass='p-2 bg-d-60 rounded-full' src={"/icons/chart.png"} alt={"iamge"} width={15} height={15} />
                    <span className='text-sm'>
                        {local === "fa" ? "تجارت الکترونیک" : "E-commerce"}

                    </span>
                </div>
                <div className='p-1 border rounded-full px-2 border-d-60 text-w-100 flex items-center gap-2'>
                    <ImageCustom figureClass='p-2 bg-d-60 rounded-full' src={"/icons/bags.png"} alt={"iamge"} width={15} height={15} />
                    <span className='text-sm'>
                        {local === "fa" ? "طراحی دیزاین" : "Web Design"}
                    </span>
                </div>
                <div className='p-1 border rounded-full px-2 border-d-60 text-w-100 flex items-center gap-2'>
                    <ImageCustom figureClass='p-2 bg-d-60 rounded-full' src={"/icons/calender.png"} alt={"iamge"} width={15} height={15} />
                    <span className='text-sm'>
                        {local === "fa" ? "توسعه دهنده" : "Development"}
                    </span>
                </div>
            </div>
            <div className='border border-d-60 p-3 md:p-6 rounded-xl'>
                <span className='text-w-90 block'>{local === "fa" ? "توضیحات پروژه" : "Project Description"}</span>
                <p className='text-w-50'>
                    {text}
                </p>
                {showMore ?
                    <ShowMoreBox />
                    : null}
            </div>
        </section>
    )
}
