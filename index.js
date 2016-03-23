/**
 * Created on 3/23/16.
 * Order Num, completely unordered
 * @author rankun203
 */
'use strict';


/**
 * 订单号: oid{4}uid{4}random{2}
 * @param uid buyer ID
 * @param oid order ID
 * @param config
 * @param config.uidLength uid factor
 * @param config.oidLength oid factor
 * @param config.randomLength random number factor
 * @param config.duplicateCheck the function to Check duplicates, skip if undefined
 */
function makeOrderNo(uid, oid, config) {
    const uidLength    = config && config.uidLength || 1,
          oidLength    = config && config.oidLength || 7,
          randomLength = config && config.randomLength || 2,
          sUid         = fillOrSubToFixed(String(uid), uidLength),
          sOid         = fillOrSubToFixed(String(oid), oidLength);

    const orderNo     = sUid + sOid + random(randomLength),
          sameOrderNo = config && config.duplicateCheck && config.duplicateCheck({orderNo: orderNo}) || false;

    return sameOrderNo && sameOrderNo.length > 0 ? makeOrderNo(uid, oid) : orderNo;
}

/**
 * 指定一个长度, 给一个数字, 给固定到那么长, 长了就砍, 短了就补随机数
 * @param sNum 指定的数字
 * @param sLength 指定的长度
 * @returns {string} 生成的数字字符串
 */
function fillOrSubToFixed(sNum, sLength) {
    if (sNum.length > sLength) sNum = sNum.substring(sNum.length - sLength, sNum.length);
    if (sNum.length < sLength) sNum = random(sLength - sNum.length) + sNum;

    return sNum;
}

/**
 * 获取指定长度的随机数
 * @param length 长度
 * @returns {*} 目标随机数
 */
function random(length) {
    if (length === 0) return null;

    var total = 1;
    for (let i = 0; i < length; i++) total *= 10;

    const base = total - total / 10,
          fill = total - base - 1;

    return base + Math.floor(Math.random() * fill);
}

module.exports.fillOrSubToFixed = fillOrSubToFixed;
module.exports.makeOrderNo      = makeOrderNo;
