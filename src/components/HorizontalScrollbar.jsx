import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import { BodyParts } from "./BodyParts";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { ExerciseCard } from "./ExerciseCard";

import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="" />
    </Typography>
  );
};
const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="" />
    </Typography>
  );
};

export const HorizontalScrollbar = ({
  data,
  bodyPart,
  setBodyPart,
  isBodyParts,
}) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemID={item.id || item}
          title={item.id || item}
          m="0 40px"
        >
          {isBodyParts ? (
            <BodyParts
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
              item={item}
            />
          ) : (
            <ExerciseCard exercise={item} />
          )}
        </Box>
      ))}
    </ScrollMenu>
  );
};
