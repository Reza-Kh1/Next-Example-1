"use client"
import { Button } from '@heroui/button'
import { Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Pagination, Select, SelectItem, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, useDisclosure } from '@nextui-org/react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { FaAngleDown, FaAngleUp, FaPen } from 'react-icons/fa6'
import { MdOutlineDataSaverOn } from 'react-icons/md'
import Cookies from "js-cookie"
const getData = () => {
  return axios.get("users")
}
export default function page() {
  const [create, setCreate] = useState<boolean>(false)
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [password, setPassword] = useState<string>("")
  const [username, setUserName] = useState<string>("")
  const query = useQueryClient();
  const async = () => {
    const token = Cookies.get('authToken')
    axios.get("/user", {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }).then(({ data }) => {
      console.log(data);
    }).catch((err) => {
      console.log(err);

    })
  }
  // const { data } = useQuery({
  //   queryKey: ["getUsers"],
  //   queryFn: getData,
  //   staleTime: 1000 * 60 * 60 * 24,
  //   gcTime: 1000 * 60 * 60 * 24,
  // });
  const { mutate: updateUser } = useMutation({
    mutationFn: () => {
      const body = {
        usePass: password,
        username
      }
      const token = Cookies.get('authToken')
      return axios.put("login", body, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });
    },
    onSuccess: ({ data }) => {
      toast("User was Updated")
      query.invalidateQueries({ queryKey: 'getUsers' });
    },
    onError: ({ response }: any) => {
      toast.error(response?.data?.message);
    },
  });
  const { mutate: createUser } = useMutation({
    mutationFn: () => {
      const body = {
        usePass: password,
        username
      }
      const token = Cookies.get('authToken')
      return axios.post("login", body, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });
    },
    onSuccess: ({ data }) => {
      query.invalidateQueries({ queryKey: 'getUsers' });
      toast("User was created")
    },
    onError: ({ response }: any) => {
      toast.error(response?.data?.message);
    },
  });
  useEffect(() => {
    async()
  }, [])
  return (
    <div className='flex flex-col gap-5'>
      <div className='flex flex-col gap-5 p-3 rounded-xl bg-white shadow-md'>
        <div className='flex justify-between items-center'>
          <span>Create User</span>
          <Button onPress={() => setCreate(prev => !prev)} variant='bordered' className='bg-d-btn rounded-md shadow-md text-white'>
            {create ?
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
        {create && (
          <div className='flex flex-col gap-2'>
            <div className='grid grid-cols-2 gap-3'>
              <Input
                onChange={({ target }) => {
                  setUserName(target.value)
                }}
                value={username}
                label="Name"
                type="text"
                labelPlacement='outside'
                placeholder='name'
                variant="bordered"
              />
              <Input
                onChange={({ target }) => {
                  setPassword(target.value)
                }}
                value={password}
                label="Password"
                type="text"
                labelPlacement='outside'
                placeholder='password'
                variant="bordered"
              />
              {/* <Input
                name='email'
                label="Email"
                type="email"
                labelPlacement='outside'
                placeholder='Email'
                variant="bordered"
              />
              <Select
                label="Select a Role"
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
              </Select> */}
            </div>
            <div>
              <Button onPress={() => createUser()} className='bg-white rounded-md shadow-md text-b-70 border border-b-70'>
                Create User
                <MdOutlineDataSaverOn />
              </Button>
            </div>
          </div>
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
        } initialPage={3} boundaries={1} total={20} />
      </div>
      <Modal size='lg' isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <ModalBody>
                <div className='grid grid-cols-2 gap-3'>
                  <Input
                    onChange={({ target }) => {
                      setUserName(target.value)
                    }}
                    value={username}
                    label="Name"
                    type="text"
                    labelPlacement='outside'
                    placeholder='name'
                    variant="bordered"
                  />
                  <Input
                    onChange={({ target }) => {
                      setPassword(target.value)
                    }}
                    value={password}
                    label="Password"
                    type="text"
                    labelPlacement='outside'
                    placeholder='password'
                    variant="bordered"
                  />
                </div>
              </ModalBody>
              <ModalFooter className='flex justify-between items-center'>
                <Button color="danger" variant="bordered" className='rounded-md' onPress={onClose}>
                  Close
                </Button>
                <Button className='border border-b-70 bg-white text-black rounded-md' onPress={() => updateUser()}>
                  Update
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div >
  )
}
