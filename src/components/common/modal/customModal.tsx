"use client";
import { addSection, removeSection } from "@/redux/slices/resumeSectionSlice";
import { RootState } from "@/redux/store";
import React, { forwardRef } from "react";
import { CgClose } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";

type propType = {
  setAddSectionModal: React.Dispatch<React.SetStateAction<boolean>>;
  addSectionModal: boolean;
};

const CustomModal = forwardRef<HTMLDivElement, propType>(
  ({ setAddSectionModal }, ref) => {
    const dispatch = useDispatch();
    const { addedSections, availableSections } = useSelector(
      (state: RootState) => state.resumeSection
    );

    console.log(addedSections, "---", availableSections);

    const handleAddSection = (section: any) => {
      dispatch(addSection(section));
      setAddSectionModal(false);
    };

    return (
      <div className="bg-[rgba(0,0,0,0.5)] flex justify-center items-center fixed top-0 left-0 w-full h-full z-[9999]">
        <div
          className="bg-white w-[95%] lg:w-[50%] 2xl:w-[60%] font-Lexend flex flex-col rounded-lg border-[0.9px] shadow-lg border-primaryBlue/60"
          ref={ref}
        >
          <div className="flex w-full px-8 py-5 justify-between border-b border-primaryBlue/60">
            <h2 className="text-xl font-semibold">Add Section to Resume</h2>

            <CgClose
              onClick={() => setAddSectionModal(false)}
              className="cursor-pointer right-0 items-end float-end"
              size={24}
            />
          </div>
          <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {availableSections?.map((section) => (
              <div
                key={section.id}
                className="group relative w-full h-40 hover:bg-gray-400 bg-[#f3f4f6] rounded-md p-4 flex flex-row justify-between hover:bg-opacity-80 transition-all"
              >
                <div>
                  <h3 className="font-bold">{section.name}</h3>
                  <p className="text-sm text-gray-600 mt-2">
                    {section.description}
                  </p>
                </div>
                <button
                  className="absolute inset-12 bg-purple-700 cursor-pointer bg-opacity-80 text-white text-center py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-all"
                  onClick={() => handleAddSection(section)}
                >
                  Add to resume
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
);

CustomModal.displayName = "CustomModal";
export default CustomModal;
