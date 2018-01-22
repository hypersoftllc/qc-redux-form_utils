import ReduxFormUtils from '../'
import flattenErrors from '../flattenErrors'

describe('index.js', function () {

  describe('ReduxFormUtils', function () {

    describe('.flattenErrors', function () {

      it('is an alias', function () {
        expect(ReduxFormUtils.flattenErrors).toBe(flattenErrors)
      })

    })

  })

})
