import flattenErrors from '../flattenErrors'

describe('flattenErrors.js', function () {

  describe('flattenErrors', function () {

    it('called with `undefined` errors should return `undefined`', function () {
      let outErrors = flattenErrors(undefined)

      expect(outErrors).toBeUndefined()
    })

    it('called with `null` errors should return `null`', function () {
      let outErrors = flattenErrors(null)

      expect(outErrors).toBeNull()
    })

    it('called with `{}` errors should return `{}`', function () {
      let outErrors = flattenErrors({})

      expect(outErrors).toEqual({})
    })

    it('called with flat errors should return flat errors', function () {
      let inErrors, outErrors

      inErrors = {
        firstname: 'Required',
        lastname: 'Required',
        addressLn1: 'Required',
      }
      outErrors = flattenErrors(inErrors)
      expect(outErrors).toEqual({
        firstname: 'Required',
        lastname: 'Required',
        addressLn1: 'Required',
      })

      inErrors = {
        firstname: 'Required',
        lastname: 'Required',
        addressLn1: 'Required',
        addressLn2: undefined,
        city: '',
      }
      outErrors = flattenErrors(inErrors)
      expect(outErrors).toEqual({
        firstname: 'Required',
        lastname: 'Required',
        addressLn1: 'Required',
        city: '',
      })
    })

    it('called with hierarchical errors should return flattened errors', function () {
      let inErrors, outErrors

      inErrors = {
        person: {
          name: {
            first: 'Required',
            last: 'Required',
          },
          address: {
            line1: 'Required',
            line2: undefined,
            city: 'Required',
          }
        },
        others: [
          {
            name: {
              last: 'Required'
            }
          },
          {
            address: {
              state: 'Required'
            }
          }
        ],
      }
      outErrors = flattenErrors(inErrors)
      expect(outErrors).toEqual({
        'person.name.first': 'Required',
        'person.name.last': 'Required',
        'person.address.line1': 'Required',
        'person.address.city': 'Required',
        'others[0].name.last': 'Required',
        'others[1].address.state': 'Required',
      })
    })

  })

})
