"use client"
import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button} from "@nextui-org/react";

export default function ModelComments({isOpen,onOpenChange}) {


  return (
    <>
      
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center" scrollBehavior="inside" size="lg" >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <ModalBody>
                thi si list of comments <br />
                thi si list of comments <br />
                thi si list of comments <br />
                thi si list of comments <br />
                thi si list of comments <br />
                thi si list of comments <br />
                thi si list of comments <br />
                thi si list of comments <br />
                thi si list of comments <br />
                thi si list of comments <br />
                thi si list of comments <br />
                thi si list of comments <br />
                thi si list of comments <br />
                thi si list of comments <br />
                thi si list of comments <br />
                thi si list of comments <br />
                thi si list of comments <br />
                thi si list of comments <br />
                thi si list of comments <br />
                thi si list of comments <br />
                thi si list of comments <br />
                thi si list of comments <br />
                thi si list of comments <br />
                thi si list of comments <br />
                thi si list of comments <br />
                thi si list of comments <br />
                thi si list of comments <br />
                thi si list of comments <br />
                thi si list of comments <br />
                thi si list of comments <br />
                thi si list of comments <br />
                thi si list of comments <br />
                thi si list of comments <br />
                thi si list of comments <br />
                thi si list of comments <br />
                thi si list of comments <br />
                thi si list of comments <br />
                thi si list of comments <br />
                thi si list of comments <br />
                thi si list of comments <br />
                thi si list of comments <br />
                thi si list of comments <br />
                thi si list of comments <br />
                thi si list of comments <br />
                thi si list of comments <br />
                thi si list of comments <br />
                thi si list of comments <br />
                thi si list of comments <br />
                thi si list of comments <br />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
