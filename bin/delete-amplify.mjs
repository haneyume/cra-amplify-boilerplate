#!/usr/bin/env node

import { rmdir } from 'node:fs/promises';

const main = async () => {
  try {
    await rmdir('amplify', { recursive: true, force: true });
    await rmdir('src/models', { recursive: true, force: true });
    await rmdir('src/ui-components', { recursive: true, force: true });
  } catch (err) {
    console.error(err);
  }
};

main();
