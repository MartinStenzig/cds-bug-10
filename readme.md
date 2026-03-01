
## Problem Description
There seems to be a bug in the conversion from a CSN containing a namespace attribute to CDL when using the following: 
```javascript
const cdlString = cds.compile(Csn).to.cdl()
```

## Reproduction
1. Clone the repo
2. `npm i`
3. Run `npm test`

## Supporting information
The compilation of the following cdl...
```cds
namespace s4;
entity Test {
    key ID : Integer;
    Name : String;
}
```
...results in this csn...
```json
{
  "namespace": "s4",
  "definitions": {
    "s4.Test": {
      "kind": "entity",
      "elements": {
        "ID": {
          "key": true,
          "type": "cds.Integer"
        },
        "Name": {
          "type": "cds.String"
        }
      }
    }
  },
  "meta": {
    "creator": "CDS Compiler v6.7.3",
    "flavor": "inferred"
  },
  "$version": "2.0"
}
```

The natural expectation is that when I put that json object back into `cds.compile(Csn).to.cdl()` that a "compatible" cdl is returned. 
