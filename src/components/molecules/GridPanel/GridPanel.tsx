import { IGridPanelProps } from "@molecules/GridPanel";
import { Grid, GridSection } from "@atomes/Grid";

export const GridPanel: React.FC<IGridPanelProps> = ({ leftContent, topRightContent, bottomRightContent }) => {
  return (
    <Grid>
      <GridSection className="w-[75%] p-6 border-r">{leftContent}</GridSection>
      <GridSection className="w-[25%] flex flex-col">
        <GridSection className="flex-1 p-6 border-b">{topRightContent}</GridSection>
        <GridSection className="flex-1 p-6">{bottomRightContent}</GridSection>
      </GridSection>
    </Grid>
  );
};

