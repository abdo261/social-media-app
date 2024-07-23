import { Avatar, Button, Textarea } from "@nextui-org/react";
import React from "react";
import { CiImageOn } from "react-icons/ci";

const CreatePost = () => {
  return (
    <div className="w-full flex flex-col items-center gap-3 bg-white p-3 rounded-lg dark:bg-black dark:text-white">
      <div className="w-full flex items-start gap-2">
        <Avatar className="flex-shrink-0" size="sm"/>
        <Textarea placeholder="Write Somthing Her ..." />
      </div>
      <div className="flex w-full justify-end gap-3 ">
        <Button isIconOnly={true} variant="light" color="success">
          <CiImageOn size={20}/>
        </Button>
        <Button color="success">Post</Button>
      </div>
    </div>
  );
};

export default CreatePost;
