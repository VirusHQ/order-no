# order-no
Node.js, module to generate an order number in any length.

Generate your "unique" Order No:

```javascript
// Final length = uidLength + oidLength + randomLength;

const no = orderNo.makeOrderNo(1, 5);

console.log('              ' + no);

// Then prefix with your date or something you like the best to an Order NO:
const now   = new Date(),
      theNo = (now.toISOString().replace(/[-T:Z\.]/g, '').substr(0, 14)).toString() + no;

console.log(theNo);
```

The output:

```
              1980852598
201603230733541980852598
1,000,000 orderNos generated in: 489 ms
```
