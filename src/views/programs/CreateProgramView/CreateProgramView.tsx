import React, { useState } from 'react';

import { ViewHeader } from '../../../components/viewheader/ViewHeader';
import { CustomProgram } from './internal/CustomProgram';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const templateMap: {
  [templateName: string]: { label: string; element: React.FC };
} = {
  't-custom': {
    label: 'Custom program',
    element: CustomProgram,
  },
  't-531beginners': {
    label: '5/3/1 for Beginners',
    element: CustomProgram,
  },
};

export function CreateProgramView() {
  const [template, setTemplate] = useState('');
  const TemplateForm: React.FC = templateMap[template]?.element;
  return (
    <>
      <ViewHeader title="Create Program" />
      {!template ? (
        <>
          <Typography variant={'overline'}>Choose Template</Typography>
          {Object.keys(templateMap).map((template) => {
            return (
              <Button key={template} onClick={() => setTemplate(template)}>
                {templateMap[template].label}
              </Button>
            );
          })}
        </>
      ) : (
        <>
          <Button onClick={() => setTemplate('')}>Back</Button>
          <TemplateForm />
        </>
      )}
    </>
  );
}
