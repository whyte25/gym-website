import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

export const ExerciseCard = ({ exercise }) => {
  console.log(exercise);

  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt="" loading="lazy" />
      <Stack direction="row">
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#ffa9a9",
            fontSize: "14px",
            borderRaduis: "20px",
            textTransfrom: "capitalize",
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#fcc757",
            fontSize: "14px",
            borderRaduis: "20px",
            textTransfrom: "capitalize",
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        ml="21px"
        color="black"
        fontWeight="bold"
        pb="10px"
        textTransform="capitalize"
        fontSize="24px"
      >
        {exercise.name}
      </Typography>
    </Link>
  );
};
