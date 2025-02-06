import CircleBox from '@/components/CircleBox/CircleBox'
import ContainerHeader from '@/components/ContainerHeader/ContainerHeader'
import { Button } from '@heroui/button'
import Link from 'next/link'
import React from 'react'
import { FaArrowLeftLong, FaArrowRightLong, FaInstagram, FaLinkedin, FaPhone, FaTwitter } from 'react-icons/fa6'
import { GoMail } from 'react-icons/go'
import FormContact from './FormContact'
import ImageCustom from '@/components/ImageCustom/ImageCustom'
import { useLocale, useTranslations } from 'next-intl'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Contact Us | Site',
  description: 'Contact Us | Site'
}
export default function page() {
  const local = useLocale()
  const t = useTranslations("Contact-us")
  return (
    <>
      <ContainerHeader bgMid='/big-logo.png' />
      <main className="main-class">
        <div className='border my-6 md:my-12 relative  bg-center bg-no-repeat border-d-60 rounded-xl p-6 md:p-12 py-12 md:py-24' style={{ backgroundImage: "url(/dot-top.png)" }}>
          <div className='mx-auto w-full md:w-2/3 text-center'>
            <h2 className='text-3xl md:text-4xl font-semibold mb-4 text-w-100'><span className='text-w-50'>{t("header.nameDark")}</span>{t("header.nameLight")}</h2>
            <p className='text-w-50'>{t("header.text")}</p>
          </div>
          <span className='absolute w-5/6 md:w-auto text-center text-xs md:text-base p-4 text-w-100 left-1/2 -translate-x-1/2 -bottom-7 rounded-full border border-d-60 transform bg-d-100'>{t("header.hover")}</span>
        </div>
        <div>
          {t.raw("section-2.array").map((row: any, index: number) => (
            <React.Fragment key={index}>
              <h3 className='text-w-100 font-semibold text-lg text-center my-4 mt-14 md:mt-16'>{row.name}</h3>
              <section className='p-4 md:p-8 rounded-xl border gap-6 border-d-60 grid grid-cols-1 md:grid-cols-3 items-center'>
                {row.boxs.map((item: any, num: number) => (
                  <div key={num} className={`${row.boxs.length === num + 1 ? "" : local === "fa" ? "md:border-l border-d-60 md:pl-6" : "md:border-r border-d-60 md:pr-6"}`}>
                    <span className='text-w-50 block mb-3'>{item.title}</span>
                    <Link href={"#"} className='flex items-center gap-2 w-full rounded-full border border-d-60 p-2 px-3'>
                      {item.image === "phone" ? <FaPhone className='text-w-80 text-2xl' /> : <GoMail className='text-w-80 text-2xl' />}
                      <p className='w-full text-w-80'>{item.name}</p>
                      <i className='py-2 px-4 rounded-full bg-d-60'>
                        {local === "fa" ?
                          <FaArrowLeftLong className="text-w-100" />
                          :
                          <FaArrowRightLong className="text-w-100" />
                        }
                      </i>
                    </Link>
                  </div>
                ))}
              </section>
            </React.Fragment>
          ))}
        </div>
        <div className='mt-10'>
          <h3 className='text-w-100 font-semibold text-xl block text-center'>{t("section-1.header.name")}</h3>
          <p className='text-w-50 block text-center'>{t("section-1.header.text")}</p>
          <div className='border border-d-60 p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mt-12 rounded-xl'>
            {t.raw("section-1.array").map((row: any, index: number) => (
              <CircleBox image={row.image}
                customText={<>
                  <div>
                    <Button className='bg-d-100 p-3 px-3 text-w-100 items-center border border-d-60 rounded-full'>
                      {local === "fa" ? "دریافت" : "Get Direction"}
                      <i className='bg-d-60 py-1 px-3 rounded-full'>
                        {local === "fa" ?
                          <FaArrowLeftLong className="text-w-100" />
                          :
                          <FaArrowRightLong className="text-w-100" />
                        }
                      </i>
                    </Button>
                  </div>
                </>}
                name={row.name} text={row.text} />
            ))}
          </div>
        </div>
        <div className='mt-10'>
          <h3 className='text-w-100 font-semibold text-xl block text-center'>{t("section-2.header.name")}</h3>
          <p className='text-w-50 block text-center'>{t("section-2.header.text")}</p>
          <FormContact />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-12'>
          {t.raw("section-3").map((row: any, index: number) => (
            <div key={index} className='rounded-xl border border-d-60 p-6 md:p-8' style={{ background: 'linear-gradient(194deg, #5552523b, #00000066)' }}>
              <div className='flex items-center gap-2 text-w-100'>
                <i className='p-3 rounded-full' style={{ background: 'linear-gradient(334deg, #000000, #272626b5)' }}>
                  <ImageCustom alt={"clock"} src={row.image} width={30} height={30} />
                </i>
                <span className='text-lg md:text-xl'>{row.name}</span>
              </div>
              <p className='text-w-50 mt-6 text-sm md:text-base'>{row.text}</p>
            </div>
          ))}
        </div>
        <div className='mt-8 md:mt-16'>
          <h3 className='text-w-100 font-semibold text-xl block text-center'>{t("section-4.header.text")}</h3>
          <p className='text-w-50 block text-center mt-2'>{t("section-4.header.text")}</p>
          <div className='rounded-xl border mt-8 md:mt-16 border-d-60 p-6 md:p-8 py-8 md:py-20' style={{ background: 'linear-gradient(194deg, #5552523b, #00000066)' }}>
            <div className='flex items-center justify-center gap-2 text-w-100'>
              <i className='p-3 rounded-full text-w-100' style={{ background: 'linear-gradient(334deg, #000000, #272626b5)' }}>
                <FaTwitter className='text-2xl' />
              </i>
              <i className='p-3 rounded-full text-w-100' style={{ background: 'linear-gradient(334deg, #000000, #272626b5)' }}>
                <FaInstagram className='text-2xl' />
              </i>
              <i className='p-3 rounded-full text-w-100' style={{ background: 'linear-gradient(334deg, #000000, #272626b5)' }}>
                <FaLinkedin className='text-2xl' />
              </i>
            </div>
            <div className='w-full md:w-2/3 mx-auto mt-4 md:mt-8'>
              <span className='text-center block text-w-100 text-xl md:text-2xl font-semibold'>{t("section-4.name")}</span>
              <p className='text-w-50 mt-2 text-center'>{t("section-4.text")}</p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
