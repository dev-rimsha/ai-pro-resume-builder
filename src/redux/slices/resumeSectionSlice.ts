"use client";

import { createSlice } from "@reduxjs/toolkit";

export const resumeSlice = createSlice({
  name: "resumeSection",
  initialState: {
    availableSections: [
      {
        id: 1,
        name: "Summary",
        description: "A brief overview of your skills and experience.",
        locked: false,
      },
      {
        id: 2,
        name: "Education",
        description: "Details about your academic background.",
        height: "h-[80px]",
      },
      {
        id: 3,
        name: "Experience",
        description: "Professional work experience and roles held.",
        height: "h-[80px]",
      },
      {
        id: 4,
        name: "Language",
        description: "Languages you are proficient in.",
      },
    ],
    addedSections: [],
  },
  reducers: {
    addSection: (state: any, action: any) => {
      state.addedSections.push(action.payload);

      state.availableSections = state.availableSections.filter(
        (section: any) => section.id !== action.payload.id
      );
    },
    removeSection: (state: any, action: any) => {
      state.addedSections = state.addedSections.filter(
        (section: any) => section.id !== action.payload.id
      );
      if (
        !state.availableSections.some(
          (section: any) => section.id === action.payload.id
        )
      ) {
        state.availableSections.push(action.payload);
      }
    },
  },
});

export const { addSection, removeSection } = resumeSlice.actions;
export const selectResume = (state: any) => state.resumeSection;
export default resumeSlice.reducer;
