"use client"
import { Button } from '@heroui/button';
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Pagination, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Textarea, useDisclosure } from '@nextui-org/react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react'
import { FaReply } from 'react-icons/fa6';
import { MdClose, MdOutlineDataSaverOn, MdOutlineSave } from 'react-icons/md';
const getData = () => {
  return axios.get("comments")
}

export default function page() {
  const query = useQueryClient();
  const [text, setText] = useState<string>("")
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { data } = useQuery({
    queryKey: ["getComments"],
    queryFn: getData,
    staleTime: 1000 * 60 * 60 * 24,
    gcTime: 1000 * 60 * 60 * 24,
  });
  console.log(data);

  // const { isPending, mutate: loginHandler } = useMutation({
  //   mutationFn: (form: FormType) => {
  //     const url = isLogin ? "user" : "user/login";
  //     return axios.post(url, form);
  //   },
  //   onSuccess: ({ data }) => {
  //     if (data.role === "USER") {
  //       toast.info("شما اجازه ورود ندارید!");
  //       return;
  //     }
  //     const body = {
  //       id: data.id,
  //       name: data.name,
  //       role: data.role,
  //     };
  //     localStorage.setItem("user", JSON.stringify(body));
  //     const name = `خوش آمدید ${data?.name}`;
  //     navigate("home/dashboard");
  //     toast.success(name);
  //   },
  //   onError: ({ response }: any) => {
  //     setErr((prev) => prev + 1);
  //     toast.warning(response?.data?.message);
  //   },
  // });
  return (
    <div className='flex flex-col gap-5'>
      <Table aria-label="Example static collection table">
        <TableHeader>
          <TableColumn>#</TableColumn>
          <TableColumn>NAME</TableColumn>
          <TableColumn>Comment</TableColumn>
          <TableColumn>Post</TableColumn>
          <TableColumn>Created At</TableColumn>
          <TableColumn>EDit</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="1">
            <TableCell>1</TableCell>
            <TableCell>Tony Reichert</TableCell>
            <TableCell>
              <p className='cutline cutline-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam mollitia sit praesentium suscipit accusantium quaerat nobis, ea maiores! Est doloremque repellat tempora totam explicabo quasi nisi. Ab ipsa cumque et ducimus quibusdam, minus nobis. Voluptates voluptas modi perspiciatis vel recusandae eos possimus! Consequatur tempora corporis voluptas reiciendis blanditiis repudiandae laudantium eius dolorem, nesciunt ad pariatur ea aperiam consequuntur inventore nisi eos sint nam. Est quis ratione odit incidunt sapiente rerum laudantium sed, tempore non quasi commodi ad nobis vero amet vel natus debitis labore! Dolorem error unde excepturi iusto quia! Nisi possimus id, quasi veritatis consequatur illum minus dolores maxime!</p>
            </TableCell>
            <TableCell>Active</TableCell>
            <TableCell>2024/07/25</TableCell>
            <TableCell>
              <Button onPress={() => onOpen()} variant='bordered' className='bg-d-btn rounded-md text-white'>
                <FaReply />
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
      <Modal size='xl' isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <ModalBody>
                <Textarea
                  onChange={({ target }) => {
                    setText(target.value)
                  }}
                  variant='bordered'
                  isRequired
                  className='w-full'
                  value={text}
                  label="Comment"
                  labelPlacement="outside"
                  placeholder="Text Comment"
                />
              </ModalBody>
              <ModalFooter className='flex justify-between items-center'>
                <Button color="danger" className='flex justify-between items-center gap-5' variant="bordered" onPress={onClose}>
                  Close
                  <MdClose size={25} />
                </Button>
                <Button className='flex justify-between items-center gap-5 border rounded-md border-b-70' onPress={onClose}>
                  Update
                  <MdOutlineDataSaverOn size={25} />
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  )
}
