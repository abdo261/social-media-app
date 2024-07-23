"use client"
import React, { useState } from 'react';

const PostDescription = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className='p-3'>
      <div className={`w-full  ${showMore ? " overflow-visible " : "overflow-hidden text-ellipsis whitespace-nowrap "}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur at
        saepe numquam similique vel laboriosam excepturi accusamus sequi, iusto
        rem eius mollitia, maiores impedit magni ducimus omnis reiciendis sunt
        doloribus?
      </div>
      <button onClick={() => setShowMore(!showMore)} className="mt-2 text-blue-500">
        {showMore ? "Show Less" : "Show More"}
      </button>
    </div>
  );
}

export default PostDescription;
