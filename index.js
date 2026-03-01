import test from 'node:test'
import assert from 'node:assert'
import cds from '@sap/cds'



/**
 * First test which is successful to verify that the test setup is working correctly.
 */
test('Conversion of Test Entity without namespace', (t) => {

    const testEntityCsn = {
        "definitions": {
            "Test": {
                "kind": 'entity',
                "elements": {
                    "ID": {
                        "key": true,
                        "type": 'cds.Integer'
                    },
                    "Name": {
                        "type": 'cds.String'
                    }
                }
            }
        }
    }

    const expectedCdl = `entity Test { key ID : Integer;  Name : String; };`
    const testCdlResult = cds.compile(testEntityCsn).to.cdl()

    // This test fails because it throws an exception.
    assert.deepEqual(replaceWhitespace(testCdlResult), replaceWhitespace(expectedCdl));
});

/**
 * First test which is successful to verify that the test setup is working correctly.
 */
test('Conversion of Test Entity without namespace', (t) => {

    const testEntityCsn = {
        "namespace": "TestNamespace",
        "definitions": {
            "Test": {
                "kind": 'entity',
                "elements": {
                    "ID": {
                        "key": true,
                        "type": 'cds.Integer'
                    },
                    "Name": {
                        "type": 'cds.String'
                    }
                }
            }
        }
    }

    const expectedCdl = `namespace TestNamespace; entity Test { key ID : Integer;  Name : String; };`
    const testCdlResult = cds.compile(testEntityCsn).to.cdl()

    // This test fails because it throws an exception.
    assert.deepEqual(replaceWhitespace(testCdlResult), replaceWhitespace(expectedCdl));
});



function replaceWhitespace(str) {
    // Replaces CRLF and LF with a single space, and collapses multiple spaces into one
    return str.replace(/\r?\n/g, ' ').replace(/\s+/g, ' ').trim();
}
