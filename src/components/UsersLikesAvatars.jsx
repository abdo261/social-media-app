"use client";
import { Avatar, AvatarGroup } from "@nextui-org/react";

export default function UsersLikesAvatars() {
  return (
    <AvatarGroup isBordered max={2} size="sm">
      <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" size="sm"/>
      <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" size="sm"/>
      <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" size="sm"/>
      <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" size="sm"/>
      <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" size="sm"/>
      <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" size="sm"/>
    </AvatarGroup>
  );
}
