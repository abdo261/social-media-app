"use client";
import { FcLike } from "react-icons/fc";
import UsersLikesAvatars from "./UsersLikesAvatars";
import { useState } from "react";
import { LiaCommentSolid } from "react-icons/lia";
import { Badge, useDisclosure } from "@nextui-org/react";
import ModelComments from "./ModelComments";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { IoBookmarkOutline } from "react-icons/io5";
import { IoBookmark } from "react-icons/io5";

const PostFooter = () => {
  const [isLike, setIsLike] = useState(true);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div className="w-full flex items-center justify-between mt-2">
      <div className="flex items-center gap-2">
        <span onClick={() => setIsLike(!isLike)} className="cursor-pointer">
          {isLike ? (
            <AiFillLike color="#006FEE" size={30} />
          ) : (
            <AiOutlineLike   size={30} />
          )}
        </span>
        <UsersLikesAvatars />
      </div>

      <div className="cursor-pointer" onClick={onOpen}>
        <Badge
          content="525"
          color="primary"
          className="font-bold"
          placement="top-left"
          variant="faded"
        >
          <LiaCommentSolid size={30} />
        </Badge>
      </div>

      <ModelComments
        isOpen={isOpen}
        onOpen={onOpen}
        onOpenChange={onOpenChange}
      />
    </div>
  );
};

export default PostFooter;
