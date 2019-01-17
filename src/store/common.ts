export default class CommonManager {

  userName: string = ''

  setUserName(userName: string) {
    this.userName = userName
  }

  getUserName() {
    return this.userName
  }

  getValueByKeys(keys: string[], originObj: any, defaultValue: any = null) {
    return keys.reduce((obj: any, key: string) => (obj && obj[key] != null) ? obj[key] : defaultValue, originObj)
  }

  shuffleArray() {
    const chars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    const len  = chars.length
    for (let i = len - 1; i >= 0; --i) {
      const j = Math.floor(Math.random() * (i + 1));
      [chars[i], chars[j]] = [chars[j], chars[i]]
    }
    return chars
  }

  generateRandomToken = (len = 11) => {
    return this.shuffleArray().slice(0, len).join('')
  }
}