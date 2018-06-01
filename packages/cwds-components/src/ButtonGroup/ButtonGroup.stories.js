import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs';

import Button from '../Button';
import ButtonGroup from './';

storiesOf('ButtonGroups', module)
  .addDecorator(withKnobs)
  .add(
    'ButtonGroup',
    withInfo()(() => (
      <div style={{ padding: '5px' }}>
        <ButtonGroup>
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </div>
    ))
  );