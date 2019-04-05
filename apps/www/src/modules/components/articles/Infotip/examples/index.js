/* eslint-disable import/no-webpack-loader-syntax,import/no-duplicates */
import InfotipExample from './InfotipExample'
import InfotipExampleSrc from '!raw-loader!./InfotipExample'
import UncontrolledInfotipExample from './UncontrolledInfotipExample'
import UncontrolledInfotipExampleSrc from '!raw-loader!./UncontrolledInfotipExample'

export {
  InfotipExample,
  InfotipExampleSrc,
  UncontrolledInfotipExample,
  UncontrolledInfotipExampleSrc,
}
