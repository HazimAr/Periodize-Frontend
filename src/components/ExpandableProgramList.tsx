import {
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
import React from "react";

interface ExpandableProgramListProps {
  id: number;
  creatorId: number;
  title: string;
  description: string;
}

export const ExpandableProgramList: React.FC<ExpandableProgramListProps> = ({
  id,
  creatorId,
  title,
  description,
}) => {
  return (
    <Accordion defaultIndex={[0]} allowMultiple>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              {title}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>{description}</AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
