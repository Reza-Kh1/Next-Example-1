"use client"
import { Button } from '@heroui/button'
import { Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Pagination, Select, SelectItem, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, useDisclosure } from '@nextui-org/react'
import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp, FaPen } from 'react-icons/fa6'
import { MdOutlineDataSaverOn } from 'react-icons/md'

export default function page() {
  const [createCategory, setCreateCategory] = useState<boolean>(false)
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div className='flex flex-col gap-5'>
      <div className='flex flex-col gap-5 p-3 rounded-xl bg-white shadow-md'>
        <div className='flex justify-between items-center'>
          <span>Import Category</span>
          <Button onPress={() => setCreateCategory(prev => !prev)} variant='bordered' className='bg-d-btn rounded-md shadow-md text-white'>
            {createCategory ?
              <>
                Show Less
                <FaAngleDown />
              </>
              :
              <>
                Show More
                <FaAngleUp />
              </>
            }
          </Button>
        </div>
        {createCategory && (
          <form action="" className='flex flex-col gap-2'>
            <div className='grid grid-cols-2 gap-3'>
              <Input
                name='name-en'
                label="Name(English)"
                type="text"
                labelPlacement='outside'
                placeholder='name(en)'
                variant="bordered"
              />
              <Input
                name='slug'
                label="slug"
                type="text"
                labelPlacement='outside'
                placeholder='slug'
                variant="bordered"
              />
              <Input
                name='name'
                label="Name(persian)"
                type="email"
                labelPlacement='outside'
                placeholder='name(fa)'
                variant="bordered"
              />
              <Select
                label="Select a SubCategory"
                variant="bordered"
                placeholder="Select"
                labelPlacement="outside"
                defaultSelectedKeys="all"
                value="select"
              >
                <SelectItem key="select" value={"select"}>Select</SelectItem>
                <SelectItem key="admin" value={"admin"}>Admin</SelectItem>
                <SelectItem key="author" value={"author"}>Author</SelectItem>
                <SelectItem key="user" value={"user"}>User</SelectItem>
              </Select>
            </div>
            <div>
              <Button type='submit' className='bg-white rounded-md shadow-md text-b-70 border border-b-70'>
                Create User
                <MdOutlineDataSaverOn />
              </Button>
            </div>
          </form>
        )}
      </div>
      <Table aria-label="Example static collection table">
        <TableHeader>
          <TableColumn>#</TableColumn>
          <TableColumn>NAME</TableColumn>
          <TableColumn>ROLE</TableColumn>
          <TableColumn>STATUS</TableColumn>
          <TableColumn>Created At</TableColumn>
          <TableColumn>EDit</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="1">
            <TableCell>1</TableCell>
            <TableCell>Tony Reichert</TableCell>
            <TableCell>CEO</TableCell>
            <TableCell>Active</TableCell>
            <TableCell>2024/07/25</TableCell>
            <TableCell>
              <Button onPress={() => onOpen()} variant='bordered' className='bg-d-btn rounded-md text-white'>
                <FaPen />
                Edit
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div className='bg-white p-3 shadow-md rounded-xl flex items-center justify-center'>
        <Pagination classNames={{ cursor: "bg-o-60" }} onChange={(value) => console.log(value)
        } initialPage={3} boundaries={1} total={20} siblings={2} />
      </div>
      <Modal size='md' isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <ModalBody>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                  risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                  quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                  risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                  quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor
                  adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit
                  officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt
                  nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa
                  deserunt nostrud ad veniam.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div >
  )
}
