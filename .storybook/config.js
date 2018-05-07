import { configure } from '@storybook/react';
import React from 'react';

function loadStories() {
  require('../src/stories/PopupHeader.js');
  require('../src/stories/NumberItemsStories.js');
  require('../src/stories/PopupStories.js');
  require('../src/stories/FormStories.js');
}

configure(loadStories, module);
