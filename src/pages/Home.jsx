import React from "react";
import { Box } from "@mui/material";
import { SearchExercises } from "../components/SearchExercises";
import { HeroBanner } from "../components/HeroBanner";
import { Exercises } from "../components/Exercises";

export const Home = () => {
  const [exercises, setExercises] = React.useState([]);
  const [bodyPart, setBodyPart] = React.useState("all");

  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        exercises={exercises}
      />
    </Box>
  );
};
