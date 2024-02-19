import React, { useRef } from "react";
import Card from "./Card";


function Foreground() {


  const ref = useRef(null);

  const data = [
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores",
      filesize: ".9mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
        desc: "i so niceeee",
        filesize: ".3mb",
        close: true,
        tag: {
          isOpen: false,
          tagTitle: "Download Now",
          tagColor: "green",
        },
      },
      {
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores",
        filesize: ".9mb",
        close: false,
        tag: {
          isOpen: true,
          tagTitle: "Download Now",
          tagColor: "blue",
        },
      },
      {
        desc: "NOTES APP DONE",
        filesize: ".167mb",
        close: true,
        tag: {
          isOpen: true,
          tagTitle: "Upload",
          tagColor: "green",
        },
      },
      {
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores",
        filesize: ".9mb",
        close: false,
        tag: {
          isOpen: true,
          tagTitle: "Download Now",
          tagColor: "blue",
        },
      },
      {
        desc: "Sorry not sorry",
        filesize: ".3mb",
        close: false,
        tag: {
          isOpen: false,
          tagTitle: "Download Now",
          tagColor: "green",
        },
      },
  ];

  return (
    <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-6">
      {data.map((item, index) => (
        <Card data={item} reference ={ref}
     />
      ))}
    </div>
  );
}

export default Foreground;
