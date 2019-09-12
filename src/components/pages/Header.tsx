import React, { useEffect, useState } from 'react';
import { CommandBar } from 'office-ui-fabric-react/lib/CommandBar';

const videoElementStyles = {
  display: "inline-block", 
  width: "33%", 
  margin: "0px" 
};

export const Header: React.FunctionComponent = () => {
  const menuItems = [
    {
      key: 'upload',
      name: 'Upload',
      iconProps: {
        iconName: 'Upload'
      },
      onClick: () => console.log('Download'),
      ['data-automation-id']: 'uploadButton'
    }
    // {
    //   key: 'download',
    //   name: 'Download',
    //   iconProps: {
    //     iconName: 'Download'
    //   },
    //   onClick: () => console.log('Download'),
    //   href: 'https://dev.office.com/fabric',
    // }
  ];
    
  return (
    <div>
        <CommandBar
          items={menuItems}
          overflowButtonProps={{ ariaLabel: 'More commands' }}
          ariaLabel={'Use left and right arrow keys to navigate between commands'}
        />
    </div>
  );
};