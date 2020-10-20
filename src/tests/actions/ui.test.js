const { setError, removeError, uiStartLoading, uiFinishLoading } = require("../../actions/ui")
const { types } = require("../../types/types")



describe('ACTION UI', () => {
  test('should create all action', () => {
    const action = setError("TEST!!")

    expect(action).toEqual({
      type: types.uiSetError,
      payload: "TEST!!"
    })
 
    const actionRemoveError = removeError()
    const actionUiStartLoading = uiStartLoading()
    const actionUiFinishLoading = uiFinishLoading()

    expect(actionRemoveError).toEqual({type: types.uiRemoveError})
    expect(actionUiStartLoading).toEqual({type: types.uiStartLoading})
    expect(actionUiFinishLoading).toEqual({type: types.uiFinishLoading})

  })
  
})
