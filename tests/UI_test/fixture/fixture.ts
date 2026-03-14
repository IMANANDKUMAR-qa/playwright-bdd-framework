// fixture/fixture.ts
import { test as base } from 'playwright-bdd';
import * as Pages from '../page';
import { expect, Page } from '@playwright/test';

// Infer fixture types from all exported page objects
type MyFixtures = {
  [K in keyof typeof Pages]: InstanceType<(typeof Pages)[K]>;
};

// Dynamically extend base test with all page objects
export const test = base.extend<MyFixtures>(
  Object.fromEntries(
    Object.entries(Pages).map(([key, PageClass]) => [
      key,
      async ({ page }: { page: Page }, use: (fixture: InstanceType<typeof PageClass>) => Promise<void>) => {
        const instance = new (PageClass as any)(page);
        await use(instance);
      },
    ])
  ) as Partial<MyFixtures>
);

export { expect };