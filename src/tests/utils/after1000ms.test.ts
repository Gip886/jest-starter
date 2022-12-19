import after1000ms from '@/utils/after1000ms'

describe('after1000ms', () => {
  it('可以在 1000ms 后自动执行函数', (done) => {
    after1000ms(() => {
      expect('???')
      done()
    })
  })
})

describe('after1000ms', () => {
  beforeAll(() => {
    jest.useFakeTimers()
  })

  it('可以在 1000ms 后自动执行函数', () => {
    jest.spyOn(global, 'setTimeout')
    const callback = jest.fn()
    expect(callback).not.toBeCalled()
    after1000ms(callback)
    jest.runAllTimers()
    expect(callback).toHaveBeenCalled()
    expect(setTimeout).toHaveBeenCalledTimes(1)
    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 1000)
  })
})
