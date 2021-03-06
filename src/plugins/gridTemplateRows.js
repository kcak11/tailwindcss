import { asList } from '../util/pluginUtils'
import createUtilityPlugin from '../util/createUtilityPlugin'

export default function () {
  return createUtilityPlugin('gridTemplateRows', [['grid-rows', ['gridTemplateRows']]], {
    resolveArbitraryValue: asList,
  })
}
