import AppsHelpers = require('../apps_helpers');
import * as Sandbox from "../common/sandbox";

describe('app3 (label GRANTED_TO dev, no root)', function () {
    this.timeout(30000);
    this.retries(3);

    describe('super admin user', function () {
        AppsHelpers.testInteractionsWithTerminal('john', 'app3');
    });

    describe('user harry', function () {
        AppsHelpers.testUnauthorizedUser('harry', 'app3');
    });

    describe('user bob (in dev group)', function () {
        AppsHelpers.testUnauthorizedUser('bob', 'app3');
    });

    describe("sandbox", () => {
        describe('user john can open sandbox', () => {
            Sandbox.testOpenSandbox('john', 'app3');
        });

        describe('user harry is not authorized to open sandbox', () => {
            Sandbox.testSandboxUnauthorized('harry', 'app3');
        });

        describe('user bob is not authorized to open sandbox', () => {
            Sandbox.testSandboxUnauthorized('bob', 'app3');
        });
    });
});
