import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";

function Card({ data, reference }) {
  return (
    <motion.div drag dragConstraints ={reference} whileDrag={{scale: 1.2}} dragElastic={0.2} className="relative flex-shrink-0 w-60 h-72 rounded-[40px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden">
      <FaRegFileAlt />
      <p className="text-sm mt-5 leading-tight font-semibold">{data.desc}</p>
      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex items-center justify-between py-3 px-8 mb-1">
          <h5>{data.filesize}</h5>
          <span className="w-7 h-7 bg-zinc-400 rounded-full flex items-center justify-center">
            {data.close ? (
              <IoMdClose />
            ) : (
              <LuDownload size=".8em" color="#000" />
            )}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`tag w-full h-10 py-4 ${
              data.tag.tagColor === "blue" ? "bg-blue-400" : "bg-green-600"
            } flex items-center justify-center`}
          >
            <h3 className="text-sm text-zinc-900 font-semibold">
              {data.tag.tagTitle}
            </h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
