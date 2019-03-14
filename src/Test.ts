import * as nfs from 'fs'

export enum Test {
  ANY_FILE_EXISTS = 'a',
  REGULAR_FILE_EXISTS = 'f',
  DIR_EXISTS = 'd',
  SYMLINK_EXISTS = 'h',
  NAMED_PIPE_EXISTS = 'p',
  READABLE_FILE_EXISTS = 'r',
}

export async function test(type: Test, arg: string): Promise<boolean> {
  switch(type) {
    case Test.DIR_EXISTS:
      return isDirectory(arg)
  }
}

async function isDirectory(path: string): Promise<boolean> {
  return new Promise(resolve => {
    nfs.readdir(path, null, err => resolve(!err))
  })
}
