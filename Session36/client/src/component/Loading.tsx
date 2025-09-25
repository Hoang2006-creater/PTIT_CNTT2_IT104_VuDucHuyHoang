import React from "react";
import { CircularProgress } from "@mui/material";

const Loading: React.FC = () => {
  return (
    <div className="flex justify-center items-center py-8">
      <CircularProgress />
    </div>
  );
};

export default Loading;
