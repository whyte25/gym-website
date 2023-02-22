import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";

import { exerciseOption, fetchData } from "../utils/fetchData";
import { ExerciseCard } from "./ExerciseCard";

export const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 10;

  const exerciseDbUrl = import.meta.env.VITE_EXERCISEDB_URL;

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (e, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behaviour: "smooth" });
  };

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === "all") {
        exercisesData = await fetchData(`${exerciseDbUrl}`, exerciseOption);
      } else {
        exercisesData = await fetchData(
          `${exerciseDbUrl}/exercises/bodypart/${bodyPart}`,
          exerciseOption
        );
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart]);

  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography variant="h3" mb="46px">
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};
