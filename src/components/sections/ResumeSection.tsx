"use client";
import { removeSection } from "@/redux/slices/resumeSectionSlice";
import React from "react";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";

const NewSection = ({ section }: any) => {
  const dispatch = useDispatch();

  return (
    <div className="mt-4 flex">
      <textarea
        className="w-full text-center border rounded"
        value={section?.name}
        // onChange={(e) => updateState({ ...currentState, text: e.target.value })}
      />
      <button
        onClick={() => dispatch(removeSection(section))}
        className="text-red-600 hover:text-red-800"
      >
        <FaTrash />
      </button>
    </div>
  );
};

export default NewSection;
