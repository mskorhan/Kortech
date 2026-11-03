/**
 * Test-only preload that makes ONE exact file path unreadable.
 *
 * Loaded with `node --import` by the scanner's canary suite so the
 * "file could not be read" branch can be exercised deterministically, on any
 * OS, in CI, as any user - without chmod, without root, and without relying on
 * filesystem permissions that behave differently on Windows and in containers.
 *
 * `syncBuiltinESMExports()` is the part that makes this work: the scanner
 * imports `readFileSync` as a NAMED ESM import, which is bound at module
 * instantiation. Patching the CJS `fs` object alone would not be visible to
 * it; that call re-syncs the builtin's named exports to the patched values.
 *
 * Not imported by the scanner and not shipped in the build - it is only ever
 * pulled in via --import from the test harness.
 */
import fs from 'node:fs';
import { syncBuiltinESMExports } from 'node:module';

const TARGET = process.env.SCAN_FAIL_READ_PATH;
const CODE = process.env.SCAN_FAIL_READ_CODE || 'EIO';

if (TARGET) {
  const realReadFileSync = fs.readFileSync;
  fs.readFileSync = function patchedReadFileSync(path, ...rest) {
    if (typeof path === 'string' && path === TARGET) {
      const err = new Error(`${CODE}: simulated read failure, read '${path}'`);
      err.code = CODE;
      throw err;
    }
    return realReadFileSync.call(this, path, ...rest);
  };
  syncBuiltinESMExports();
}
