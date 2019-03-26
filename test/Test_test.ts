import { Test, test } from '../src/Test'
import * as fs from 'fs-extra'
import { expect } from './common'

describe(`Test`, async () => {
  it(`should see a directory`, async () => {
    const dirName = `./limlom`
    await fs.ensureDir(dirName)
    expect(await test(Test.DIR_EXISTS, dirName)).to.be.true
    await fs.remove(dirName)
  })

  it(`should see a directory`, async () => {
    const dirName = `./not-exist`
    expect(await test(Test.DIR_EXISTS, dirName)).to.be.false
  })
})
