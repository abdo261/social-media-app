import { User } from "@nextui-org/react";
import DropDownOptions from "./DropDownOptions";
import PostDescription from "./PostDescription";
import PostImageSlide from "./PostImageSlide";
import PostFooter from "./PostFooter";

const Post = ({ post }) => {
  return (
    <div className="w-full bg-white dark:bg-black dark:text-white flex flex-col gap-2 p-3 rounded-lg">
      <div className="w-full flex justify-between items-center">
        <User
          name="said 0l9ayed"
          description="10 Hours Ago"
          avatarProps={{
            src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
          }}
        />
        <DropDownOptions id={1}/>
      </div>
   <PostDescription/>
   <PostImageSlide/>
   <PostFooter/>
    </div>
  );
};

export default Post;
