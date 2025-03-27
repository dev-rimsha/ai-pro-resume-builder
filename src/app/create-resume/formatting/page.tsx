"use client";
import ReArrangeSection from "@/components/formatting/rearrange/rearrange";
import ResumeSection from "@/components/sections/ResumeSection";
import { removeSection } from "@/redux/slices/resumeSectionSlice";
import { RootState } from "@/redux/store";
import React from "react";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

export default function Formatting() {
  const dispatch = useDispatch();
  const { addedSections, availableSections } = useSelector(
    (state: RootState) => state.resumeSection
  );
  return (
    <div className="grid grid-cols-12 w-full gap-20 p-4">
      <div className="col-span-4">
        <ReArrangeSection />
      </div>
      <div className="col-span-8 border-4">
        <div className="p-4">
          {addedSections?.length && (
            <h3 className="text-lg font-bold mb-2 ">Added Sections:</h3>
          )}
          <div className="grid grid-cols-3 gap-3">
            {addedSections.map((section: any) => (
              <ResumeSection section={section} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
