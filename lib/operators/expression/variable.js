/**
 * Aggregation framework variable operators
 */

import { each, keys } from '../../util'
import { computeValue } from '../../internal'

/**
 * Defines variables for use within the scope of a sub-expression and returns the result of the sub-expression.
 *
 * @param obj
 * @param expr
 * @returns {*}
 */
export function $let (obj, expr) {
  let varsExpr = expr['vars']
  let inExpr = expr['in']

  // resolve vars
  let varsKeys = keys(varsExpr)
  each(varsKeys, key => {
    let val = computeValue(obj, varsExpr[key])
    let tempKey = '$' + key
    obj[tempKey] = val
  })

  return computeValue(obj, inExpr)
}
