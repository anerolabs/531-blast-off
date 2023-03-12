import React, { useState } from 'react';

import { ViewHeader } from '../../../components/viewheader/ViewHeader';
import { CustomProgram } from './internal/CustomProgram';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const templateMap: { [templateName: string]: JSX.Element } = {
  't-custom': CustomProgram(),
};

export function CreateProgramView() {
  const [template, setTemplate] = useState('');
  // const onTemplateClick = (templateId: string) => setTemplate(templateId);

  return (
    <>
      <ViewHeader title="Create Program" />
      {!template ? (
        <>
          <Typography variant={'overline'}>Choose Template</Typography>
          <Button onClick={() => setTemplate('t-custom')}>
            Custom program
          </Button>
          <Button onClick={() => setTemplate('t-531beginners')}>
            5/3/1 for Beginners
          </Button>
        </>
      ) : (
        <>
          <Button onClick={() => setTemplate('')}>Back</Button>
          {templateMap[template]}
        </>
      )}
    </>
  );
}
