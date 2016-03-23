/**
 * Created on 3/23/16.
 * @author rankun203
 */
'use strict';

const orderNo = require('./');

const no = orderNo.makeOrderNo(1, 5);

console.log('              ' + no);

const now   = new Date(),
      theNo = (now.toISOString().replace(/[-T:Z\.]/g, '').substr(0, 14)).toString() + no;

console.log(theNo);

const start = Date.now();
for (let i = 0; i < 1000000; i++) {
    orderNo.makeOrderNo(2, 4);
}

console.log('1,000,000 orderNos generated in:', Date.now() - start, 'ms');