import { Selector } from 'testcafe';

// The following line fixes testcafe + jest type collision
declare const test: TestFn;

fixture`Cats Game App`.page`http://localhost:3000`;

test('Initial Test', async (t) => {});
