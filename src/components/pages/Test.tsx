import React, { useEffect, useState } from 'react';
import { Stack, Text, Link, FontWeights, SwatchColorPicker } from 'office-ui-fabric-react';

const boldStyle = { root: { fontWeight: FontWeights.semibold } };

export const Test: React.FunctionComponent = () => {
    const [colour, setColour] = useState();
    return (
    <Stack
      horizontalAlign="center"
      verticalAlign="center"
      verticalFill
      styles={{
        root: {
          width: '960px',
          margin: '0 auto',
          textAlign: 'center',
          color: '#605e5c'
        }
      }}
      gap={15}
    >
        <SwatchColorPicker
          columnCount={5}
          cellHeight={35}
          cellWidth={35}
          selectedId={colour}
          cellShape={'square'}
          colorCells={[
            { id: 'a', label: 'orange', color: '#ca5010' },
            { id: 'b', label: 'cyan', color: '#038387' },
            { id: 'c', label: 'blueMagenta', color: '#8764b8' },
            { id: 'd', label: 'magenta', color: '#881798' },
            { id: 'e', label: 'white', color: '#ffffff' }
          ]}
        />
    </Stack>
  );
};