import * as cp from 'child_process'
import * as Debug from 'debug'

const log = Debug(`Shellfish:Test`)
log

export enum Test {
  ANY_FILE_EXISTS = 'a',
  REGULAR_FILE_EXISTS = 'f',
  DIR_EXISTS = 'd',
  SYMLINK_EXISTS = 'h',
  NAMED_PIPE_EXISTS = 'p',
  READABLE_FILE_EXISTS = 'r',
}

export enum TestErr {
}

export async function test(type: Test, arg: string): Promise<boolean> {
  return new Promise(resolve => {
    const cmd = `test -${type} ${arg}`
    cp.exec(cmd, err => {
      const success = !err
      resolve(success)
    })
  })
}
