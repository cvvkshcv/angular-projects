
export const bgGreen = (prefix: string) => {
  return (str: string) => {
    console.log('%c' + `[${prefix}] ` + str, 'background-color: #028482; color: #fff; padding: 3px;');
  }
}

export const bgBlue = (prefix: string) => {
  return (str: string) => {
    console.log('%c' + `[${prefix}] ` + str, 'background-color: #336699; color: #fff; padding: 3px;');
  }
}

export const bgYello = (prefix: string) => {
  return (str: string) => {
    console.log('%c' + `[${prefix}] ` + str, 'background-color: #FFCC00; color: #000; padding: 3px;');
  }
}

export const bgBrown = (prefix: string) => {
  return (str: string) => {
    console.log('%c' + `[${prefix}] ` + str, 'background-color: #8C001A; color: #fff; padding: 3px;');
  }
}
