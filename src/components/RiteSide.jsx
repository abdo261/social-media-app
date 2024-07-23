"use client";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  ScrollShadow,
  Tooltip,
  User,
} from "@nextui-org/react";
import { FaUserFriends } from "react-icons/fa";

import React from "react";

const RiteSide = () => {
  const users = Array(10).fill(null);
  const [isFollowed, setIsFollowed] = React.useState(false);

  return (
    <div className="  hidden dark:bg-black  fixed z-50 sm:top-[70px] sm:right-5 p-3 w-auto max-h-[50vh] min-h-fit  sm:mt-5  bg-white  rounded-lg overflow-hidden overflow-y-auto sm:flex sm:flex-col sm:gap-4 sm:shadow-lg">
      <div className=" dark:text-white mx-auto sticky top-0 z-10">
        <Chip
          className="font-extrabold  text-2xl"
          size="lg"
          variant="shadow"
          color="primary"
          startContent={<FaUserFriends />}
        >
          Suggestions
        </Chip>
      </div>
      <div className="flex justify-between items-center  w-[250px] h-fit p-2 rounded-lg border-1 dark:border-gray-600 ">
        <div className="flex gap-3">
          <Avatar
            isBordered
            radius="full"
            size="md"
            src="https://nextui.org/avatars/avatar-1.png"
            className="flex-shrink-0"
          />
          <div className="flex flex-col gap-1 items-start justify-center flex-grow">
            <Tooltip content="abdellah ait bchikhe dfjksdhfbjkdhgfudsfdsf" showArrow={true} color="foreground" size="lg"  closeDelay={50}>
              <h4 className="text-small font-semibold leading-none text-default-600 w-[100px] truncate cursor-pointer hover:underline">
                abdellah ait bchikhe dfjksdhfbjkdhgfudsfdsf
              </h4>
            </Tooltip>

            <h5 className="text-small tracking-tight text-default-400">
              @zoeylang
            </h5>
          </div>
        </div>
        <Button
          className={
            isFollowed
              ? "bg-transparent text-foreground border-default-200"
              : ""
          }
          color="primary"
          radius="full"
          size="sm"
          variant={isFollowed ? "bordered" : "solid"}
          onPress={() => setIsFollowed(!isFollowed)}
        >
          {isFollowed ? "Unfollow" : "Follow"}
        </Button>
      </div>
   
      <div className="flex justify-between items-center  w-[250px] h-fit p-2 rounded-lg border-1 dark:border-gray-600 ">
        <div className="flex gap-3">
          <Avatar
            isBordered
            radius="full"
            size="md"
            src="https://nextui.org/avatars/avatar-1.png"
            className="flex-shrink-0"
          />
          <div className="flex flex-col gap-1 items-start justify-center flex-grow">
            <Tooltip content="abdellah ait bchikhe dfjksdhfbjkdhgfudsfdsf" showArrow={true} color="foreground" size="lg">
              <h4 className="text-small font-semibold leading-none text-default-600 w-[100px] truncate cursor-pointer hover:underline">
                abdellah ait bchikhe dfjksdhfbjkdhgfudsfdsf
              </h4>
            </Tooltip>

            <h5 className="text-small tracking-tight text-default-400">
              @zoeylang
            </h5>
          </div>
        </div>
        <Button
          className={
            isFollowed
              ? "bg-transparent text-foreground border-default-200"
              : ""
          }
          color="primary"
          radius="full"
          size="sm"
          variant={isFollowed ? "bordered" : "solid"}
          onPress={() => setIsFollowed(!isFollowed)}
        >
          {isFollowed ? "Unfollow" : "Follow"}
        </Button>
      </div>
   
      <div className="flex justify-between items-center  w-[250px] h-fit p-2 rounded-lg border-1 dark:border-gray-600 ">
        <div className="flex gap-3">
          <Avatar
            isBordered
            radius="full"
            size="md"
            src="https://nextui.org/avatars/avatar-1.png"
            className="flex-shrink-0"
          />
          <div className="flex flex-col gap-1 items-start justify-center flex-grow">
            <Tooltip content="abdellah ait bchikhe dfjksdhfbjkdhgfudsfdsf" showArrow={true} color="foreground" size="lg">
              <h4 className="text-small font-semibold leading-none text-default-600 w-[100px] truncate cursor-pointer hover:underline">
                abdellah ait bchikhe dfjksdhfbjkdhgfudsfdsf
              </h4>
            </Tooltip>

            <h5 className="text-small tracking-tight text-default-400">
              @zoeylang
            </h5>
          </div>
        </div>
        <Button
          className={
            isFollowed
              ? "bg-transparent text-foreground border-default-200"
              : ""
          }
          color="primary"
          radius="full"
          size="sm"
          variant={isFollowed ? "bordered" : "solid"}
          onPress={() => setIsFollowed(!isFollowed)}
        >
          {isFollowed ? "Unfollow" : "Follow"}
        </Button>
      </div>
   
      <div className="flex justify-between items-center  w-[250px] h-fit p-2 rounded-lg border-1 dark:border-gray-600 ">
        <div className="flex gap-3">
          <Avatar
            isBordered
            radius="full"
            size="md"
            src="https://nextui.org/avatars/avatar-1.png"
            className="flex-shrink-0"
          />
          <div className="flex flex-col gap-1 items-start justify-center flex-grow">
            <Tooltip content="abdellah ait bchikhe dfjksdhfbjkdhgfudsfdsf" showArrow={true} color="foreground" size="lg">
              <h4 className="text-small font-semibold leading-none text-default-600 w-[100px] truncate cursor-pointer hover:underline">
                abdellah ait bchikhe dfjksdhfbjkdhgfudsfdsf
              </h4>
            </Tooltip>

            <h5 className="text-small tracking-tight text-default-400">
              @zoeylang
            </h5>
          </div>
        </div>
        <Button
          className={
            isFollowed
              ? "bg-transparent text-foreground border-default-200"
              : ""
          }
          color="primary"
          radius="full"
          size="sm"
          variant={isFollowed ? "bordered" : "solid"}
          onPress={() => setIsFollowed(!isFollowed)}
        >
          {isFollowed ? "Unfollow" : "Follow"}
        </Button>
      </div>
   
      <div className="flex justify-between items-center  w-[250px] h-fit p-2 rounded-lg border-1 dark:border-gray-600 ">
        <div className="flex gap-3">
          <Avatar
            isBordered
            radius="full"
            size="md"
            src="https://nextui.org/avatars/avatar-1.png"
            className="flex-shrink-0"
          />
          <div className="flex flex-col gap-1 items-start justify-center flex-grow">
            <Tooltip content="abdellah ait bchikhe dfjksdhfbjkdhgfudsfdsf" showArrow={true} color="foreground" size="lg">
              <h4 className="text-small font-semibold leading-none text-default-600 w-[100px] truncate cursor-pointer hover:underline">
                abdellah ait bchikhe dfjksdhfbjkdhgfudsfdsf
              </h4>
            </Tooltip>

            <h5 className="text-small tracking-tight text-default-400">
              @zoeylang
            </h5>
          </div>
        </div>
        <Button
          className={
            isFollowed
              ? "bg-transparent text-foreground border-default-200"
              : ""
          }
          color="primary"
          radius="full"
          size="sm"
          variant={isFollowed ? "bordered" : "solid"}
          onPress={() => setIsFollowed(!isFollowed)}
        >
          {isFollowed ? "Unfollow" : "Follow"}
        </Button>
      </div>
   
      <div className="flex justify-between items-center  w-[250px] h-fit p-2 rounded-lg border-1 dark:border-gray-600 ">
        <div className="flex gap-3">
          <Avatar
            isBordered
            radius="full"
            size="md"
            src="https://nextui.org/avatars/avatar-1.png"
            className="flex-shrink-0"
          />
          <div className="flex flex-col gap-1 items-start justify-center flex-grow">
            <Tooltip content="abdellah ait bchikhe dfjksdhfbjkdhgfudsfdsf" showArrow={true} color="foreground" size="lg">
              <h4 className="text-small font-semibold leading-none text-default-600 w-[100px] truncate cursor-pointer hover:underline">
                abdellah ait bchikhe dfjksdhfbjkdhgfudsfdsf
              </h4>
            </Tooltip>

            <h5 className="text-small tracking-tight text-default-400">
              @zoeylang
            </h5>
          </div>
        </div>
        <Button
          className={
            isFollowed
              ? "bg-transparent text-foreground border-default-200"
              : ""
          }
          color="primary"
          radius="full"
          size="sm"
          variant={isFollowed ? "bordered" : "solid"}
          onPress={() => setIsFollowed(!isFollowed)}
        >
          {isFollowed ? "Unfollow" : "Follow"}
        </Button>
      </div>
   
      <div className="flex justify-between items-center  w-[250px] h-fit p-2 rounded-lg border-1 dark:border-gray-600 ">
        <div className="flex gap-3">
          <Avatar
            isBordered
            radius="full"
            size="md"
            src="https://nextui.org/avatars/avatar-1.png"
            className="flex-shrink-0"
          />
          <div className="flex flex-col gap-1 items-start justify-center flex-grow">
            <Tooltip content="abdellah ait bchikhe dfjksdhfbjkdhgfudsfdsf" showArrow={true} color="foreground" size="lg">
              <h4 className="text-small font-semibold leading-none text-default-600 w-[100px] truncate cursor-pointer hover:underline">
                abdellah ait bchikhe dfjksdhfbjkdhgfudsfdsf
              </h4>
            </Tooltip>

            <h5 className="text-small tracking-tight text-default-400">
              @zoeylang
            </h5>
          </div>
        </div>
        <Button
          className={
            isFollowed
              ? "bg-transparent text-foreground border-default-200"
              : ""
          }
          color="primary"
          radius="full"
          size="sm"
          variant={isFollowed ? "bordered" : "solid"}
          onPress={() => setIsFollowed(!isFollowed)}
        >
          {isFollowed ? "Unfollow" : "Follow"}
        </Button>
      </div>
   
      <div className="flex justify-between items-center  w-[250px] h-fit p-2 rounded-lg border-1 dark:border-gray-600 ">
        <div className="flex gap-3">
          <Avatar
            isBordered
            radius="full"
            size="md"
            src="https://nextui.org/avatars/avatar-1.png"
            className="flex-shrink-0"
          />
          <div className="flex flex-col gap-1 items-start justify-center flex-grow">
            <Tooltip content="abdellah ait bchikhe dfjksdhfbjkdhgfudsfdsf" showArrow={true} color="foreground" size="lg">
              <h4 className="text-small font-semibold leading-none text-default-600 w-[100px] truncate cursor-pointer hover:underline">
                abdellah ait bchikhe dfjksdhfbjkdhgfudsfdsf
              </h4>
            </Tooltip>

            <h5 className="text-small tracking-tight text-default-400">
              @zoeylang
            </h5>
          </div>
        </div>
        <Button
          className={
            isFollowed
              ? "bg-transparent text-foreground border-default-200"
              : ""
          }
          color="primary"
          radius="full"
          size="sm"
          variant={isFollowed ? "bordered" : "solid"}
          onPress={() => setIsFollowed(!isFollowed)}
        >
          {isFollowed ? "Unfollow" : "Follow"}
        </Button>
      </div>
   
    
    </div>
  );
};

export default RiteSide;
